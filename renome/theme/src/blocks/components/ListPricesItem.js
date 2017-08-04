import React, { Component } from 'react';
import Title from './TItle';
import Paragraph from './Paragraph';
import MiniOrderButton from './MiniOrderButton';
import ReactHtmlParser from 'react-html-parser';

export default class ListPricesItem extends Component {
	render() {
		const { title, prices, fontColor, fontColorBtn } = this.props;
		return (
			<div className={this.getItemClasses()} data-aos='fade-down' >
				<Title block='listPricesItem' text={title} />
				<ul class="pricing">
					{ReactHtmlParser(prices)}
				</ul>
				<MiniOrderButton block='listPricesItem' backgroundColorBtn={fontColor} fontColorBtn={fontColorBtn} />
			</div>
		);
	}

	getItemClasses() {
		const { backgroundColor, fontColor } = this.props;

		return `listPricesItem listPricesItem--backgroundColor_${backgroundColor} listPricesItem--fontColor_${fontColor}`;
	}
}