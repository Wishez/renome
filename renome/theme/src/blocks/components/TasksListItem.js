import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

const TasksListItem = ({ 
	icon,
	title,
	text
}) => (
		<div className='tasksListItem' data-aos='fade-right'> 
			<p className='tasksListItem__paragraph paragraph'>
				{icon ? 
					<Icon name={icon} 
						className='tasksListItem__icon'
						size='small' /> : ''}
				<span className='tasksListItem__title'>&thinsp;{ReactHtmlParser(title)}</span>
				{ReactHtmlParser(text)}
			</p>
		</div>
	);

export default TasksListItem;