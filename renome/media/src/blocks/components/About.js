import React, { Component } from 'react'; 
import AboutItem from './AboutItem';
import OrderForm from './OrderForm';

export default class About extends Component {
	render() {
		return (
			<section className='about'>
				<OrderForm />
				<AboutItem 
				 block='greet'
				 title='Welcome!'
				 text="<strong class='greet__decorator--color_lightRed'>Renome</strong> &mdash; веб-студия, которая 
							берёт ваши идеи и задачи, превращая
							их в нечто материальное,
							оставляя тонкую, но прочную 
							нить во всемирной паутине." 
				 />
				<AboutItem block='choice' 
					title="Выбор за <span class='choice__decorator--color_lightBrown'>вами</span>" 
					text="Вы можете заказать уникальный дизайн,
					под <span class='choice__decorator--color_lightBrown'>ваш стиль</span> или <span class='choice__decorator--color_lightBrown'>стиль вашей фирмы</span>,
				    для своего проекта или представить что-то своё &mdash; уникальное." />
				<AboutItem block="manage" 
					title="Всё в <span class='manage__decorator--color_yellow'>ваших</span> руках" 
					text="Вы сможете ловко манипулировать содержимы вашего сайта при помощи панели управления. <span class='manage__decorator--color_yellow'>Добавлять, редактировать, удалять</span>
					просто при помощи &mdash; Django." />
				<AboutItem block='hint' 
					title="Как заказать сайт на <strong class='hint__decorator--color_green'>Django</strong>"
					text="Заказать разработку сайта на Django достаточно просто. Нажмите на кнопку “<a href='#' class='makeOrder'><span class='hint__decorator--color_lightRed'>Сделать заказ</span></a>”
				    в верху главной страницы, после чего заполните все поля формы.  В ближайшее
				    время мы свяжемся с вами и обсудим все детали вашего проекта.
					После мы создадим ТЗ по дальнейшей работеи будем воплощать вашу идею в реальность." />
			</section>

		);
	}
}