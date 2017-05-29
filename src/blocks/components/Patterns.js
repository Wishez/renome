import React, { Component } from 'react';
import Title from './Title';
import GroupPatterns from './GroupPatterns';
export default class Patterns extends Component {
	render() {
		// const pathSrc = '../img/patterns';
		const pathSrc = 'url("/media/public/img';
		const imagesUrlsFirstGroup = [pathSrc + '/middle.jpg")', pathSrc + '/bottom.jpg")'],
			  imagesUrlsSecondGroup = [pathSrc + '/choice.jpg")', pathSrc + '/empty.jpg")',
			  						   pathSrc + '/hint.jpg")', pathSrc + '/manage.jpg")'],
			  imagesUrlsThirdGroup = [pathSrc + '/top.jpg")', pathSrc + '/contacts.jpg")',
			  						   pathSrc + '/process.jpg")', pathSrc + 'empty.jpg")'];

		return (
			<div className='patterns'>
				<GroupPatterns block='firstGroupPatterns' imagesUrls={imagesUrlsFirstGroup} />
				<GroupPatterns block='secondGroupPatterns' imagesUrls={imagesUrlsSecondGroup} />
				<GroupPatterns block='thirdGroupPatterns' imagesUrls={imagesUrlsThirdGroup} />
			</div>
		);
	}
}