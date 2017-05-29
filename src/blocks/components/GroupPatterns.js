import React, { Component } from 'react';
import Title from './Title';
// import Pattern from './Pattern';

export default class GroupPatterns extends Component {
	render() {
		/*
			imagesUrls: type Array,
			block: type String
		 */
		
		const { block, imagesUrls } = this.props;
		const title = block === 'firstGroupPatterns' ? <div className='text-center' data-aos='zoom-in'>
						<Title block={block} text='Шаблоны' />
					</div> : ''; 
		const  patterns =  imagesUrls.map((imgUrl, index) => (
			<li key={index} className='listPatternsItem' data-aos='fade-right'>
				<figure className='listPatternsItem__pattern' 
				  style={{backgroundImage: imgUrl}} />
			</li>
		));
			
		return (
			<section className={block}>
				<div className='container'>
					{title}
					<ul className='listPatterns'>
						{patterns}
					</ul>
				</div>
			</section>
		);
	}
}