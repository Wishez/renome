import React, { Component } from 'react';
import classNames from 'classnames';


export default class MiniOrderButton extends Component {
	render() {
		return (
			<button className={this.getClasses()}>
					Заказать
			</button>
		);
	}

	getClasses() {
		const { block, backgroundColorBtn, fontColorBtn } = this.props;

		return `${block}__btn miniOrderButton miniOrderButton--backgroundColor_${backgroundColorBtn} miniOrderButton--color_${fontColorBtn} makeOrder`;
	}
}