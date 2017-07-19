import React, { Component } from 'react'; 
import Title from './Title';
import Paragraph from './Paragraph';
import { Button } from 'semantic-ui-react';

export default class AboutItem extends Component {

	render() {
		const { block, title, text } = this.props;
		const button = block === 'greet' ?
		 	<button className="greet__offerBtn makeOrder">
				Сделать заказ
			</button> : '';
		return (
			<div className={block + ' about__item'}>
				<div className='container' data-aos='zoom-in'>
					<Title block={block} text={title} />
					<Paragraph block={block} text={text} />
					{button}
				</div>
			</div>
		);
	}
}