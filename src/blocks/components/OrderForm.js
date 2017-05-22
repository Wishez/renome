import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Select } from 'semantic-ui-react';
import { servicesOptions } from '../constants/servicesOptions.js';
import IntelTelInput from 'react-intl-tel-input';
import 'file?name=libphonenumber.js!./../../../node_modules/react-intl-tel-input/dist/libphonenumber.js';

const required = value => value ? undefined : 'Заполните, пожалуйста, это поле, и спасибо',
	  email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Неправильный e-mail адрес' : undefined;

const renderField = ({ input, type, label, placeholder, icon,  meta: { touched, error, warning }, fieldType, maxLength}) => {
	let field;
	switch(fieldType) {
		case 'textarea':
			field = <textarea 
				{...input}
				type={type}
				placeholder={placeholder}
				className='orderFormController__item orderFormController__item--type_textarea'
				rows='2'
				maxLength={maxLength}
			/>;
			break;
		case 'select':
			field =	<Select
				id='service'
				name='service'
				placeholder='Выберите услугу'
				options={servicesOptions}
				className='orderFormController__item orderFormController__item--type_select'
			/>
			break;
		case 'telephone':
			field = <IntelTelInput 
				fieldName='phone'
				fieldId='phone'
				preferredCountries={['ru']}
				css={ ['intl-tel-input', 'from-control', 'orderFormController__item']}
				utilsScript={ 'libphonenumber.js' }
			 />;
			break;
		default:
			field =	<input 
				{...input}
				type={type}
				placeholder={placeholder}
				className='orderFormController__item'
				maxLength={maxLength}
			/>;
			break;
	}

	return (
		<div className='orderFormController'>
			<label
				htmlFor={name}
				className='orderFormController__label'>
				{label}
			</label>
			<div className='inputContainer'>
				{field}
				{fieldType !== 'select' ? <i className={'fa ' + icon} /> : ''}
			</div>
			{touched && ((error && <span className='orderFormController__error'>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>	
	)
}


class OrderForm extends Component  {

	submit(values, dispatch) {
		values.service = $('#service').find('select').val();
		values.phone = $('#phone').val();

		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div className='orderFormWrapper'>
				<i className='fa fa-close' 
				 id='closeOrderForm' />
				<form 
					id='orderForm' 
					className='orderForm'
					onSubmit={handleSubmit(this.submit.bind(this))}>
					<h2 className="orderForm__title text-center">
						Заказ
					</h2>
					<Field 
						autofocus="true"
						name='name'
						type='text'
						component={renderField}
						label='Имя'
						placeholder='Ф.И.О.'
						maxLength='150'
						validate={[ required ]}
						icon='fa-user'
					/>
					<Field 
						component={renderField}
						label='Телефон'
						maxLength='24'
						fieldType='telephone'
						validate={[ required ]}
						icon='fa-phone'
					/>
					<Field 
						name='email'
						type='email'
						component={renderField}
						label='E-mail'
						maxLength='70'
						placeholder='bloody@comandos.com'
						validate={[ required, email ]}
						icon='fa-envelope'
					/>
					<Field 
						fieldType='select'
						component={renderField}
						label='Услуга'
						validate={[ required ]}
					/>
					<Field 
						name='comment'
						type='text'
						fieldType='textarea'
						component={renderField}
						label='Комментарий'
						maxLength='250'
						placeholder='Опишите вкратце, что вы хотите&hellip;'
						validate={[ required ]}
						icon='fa-comments'
					/>
					<button 
						type='submit' 
						className='orderForm__btn btn'>
						Заказать
					</button> 
				</form>
			</div>

		);
	}
}

export default reduxForm({
  form: 'orderForm'
})(OrderForm);