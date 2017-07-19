import React, { Component } from 'react';
import Title from './Title';
import GroupPatterns from './GroupPatterns';
export default class Patterns extends Component {

	state  = {
		patterns: []
	}
	loadPatterns() {
		fetch('/api/v0/patterns/')
			.then(respond => respond.json())
			.then(data => {this.setState({patterns: data})} )
			.catch(err => console.log(err))
	}

	componentDidMount() {
		this.loadPatterns();
	}

	render() {
		const { patterns } = this.state;
		
		const coverUrl = (url) => ( 'url("' + url + '")' );
		const patternsGroups =  patterns.map((patternsGroup, index) => {
			const imagesUrlsGroup = [ patternsGroup.img_1 ? coverUrl(patternsGroup.img_1) : '',
									  patternsGroup.img_2 ? coverUrl(patternsGroup.img_2) : '',
									  patternsGroup.img_3 ? coverUrl(patternsGroup.img_3) : '',
									  patternsGroup.img_4 ? coverUrl(patternsGroup.img_4) : ''	
									]
			return <GroupPatterns
				key={index} 
				block={patternsGroup.block} 
				background={coverUrl(patternsGroup.background)} 
				imagesUrls={imagesUrlsGroup} />;
		});
		return (
			<div className='patterns'>
				{patternsGroups}
			</div>
		);
	}
}

