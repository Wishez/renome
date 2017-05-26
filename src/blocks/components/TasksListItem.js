import React, { Component } from 'react';
import Paragraph from './Paragraph';

export default class TasksListItem extends Component {
	render() {
		const { icon, title, text } = this.props;
		const isIcon = icon ? `<i class='tasksListItem__icon fa fa-${icon}'></i>` : '';
		return (
			<div className='tasksListItem' data-aos='fade-right'> 
				<Paragraph 
					block='tasksListItem'
					text={`${isIcon}<span class='tasksListItem__title'>${title}</span>${text}`} 
				/>
			</div>
		);
	}
}
