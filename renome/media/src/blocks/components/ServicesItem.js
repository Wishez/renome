import React, { Component } from 'React';
import Paragraph from './Paragraph';
import Title from './Title';
import MiniOrderButton from './MiniOrderButton';

export default class ServicesItem extends Component {
	render() {
		const { icon, title, text } = this.props; 
		return (
			<div className='service' data-aos='fade-up'>
				<div className={this.getIconClasses(icon)}>
					<figure></figure>
				</div>
				<Title 
					block='service'
					text={title}
				/>
				<Paragraph 
					block='service'
					text={text} 
				/>
				<MiniOrderButton block='service' color='darkBlue' />
			</div>
		);
	}
	
	getIconClasses(icon) {
		const icons = {
			os: 'service__icon--type_onlineStore',
			ln: 'service__icon--type_landing',
			pf: 'service__icon--type_portfolio',
			ud: 'service__icon--type_unicDesign',
			cv: 'service__icon--type_conversion',
			sp: 'service__icon--type_support'
		}
		
		return 'service__icon ' + icons[icon];

	}
}