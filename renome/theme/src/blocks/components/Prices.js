import React, { Component } from 'react';
import ListPricesItem from './ListPricesItem.js';
import Title from './Title';
import OrderForm from './OrderForm';

export default class Prices extends Component {
	static state = {
		serviceId: 0
	}
	render() {
		return(
			<div>
				<section className='prices text-center'>
					<div className='container'>
						<OrderForm />
						<Title block='prices' text='Прайс-лист' />
						<ul className='listPrices'>
							<li>
								<ListPricesItem 
									title='Поддержка</br>сайта' 
									prices='
									<li class="pricing__item">
										<i>1 час работы</i></br>&mdash;</br><strong>250&#8381;</strong>
									</li>
									<li class="pricing__item">
										<i>3 часa работы</i></br>&mdash;</br><strong>675&#8381;</strong>
									</li>
									<li class="pricing__item">
										<i>6 часов работы</i></br>&mdash;</br><strong>1350&#8381;</strong>
									</li>'
									fontColor='green'
									backgroundColor='lightRed'
									fontColorBtn='black'
								/>
							</li>
							<li>
								<ListPricesItem 
									title='Интернет</br>магазин' 
									prices='
											<li class="pricing__item">
												Техническое задание:&thinsp;<strong>2000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Уникальный дизайн:&thinsp;<strong>6250&#8381;</strong>
											</li>
											<li class="pricing__item">
												Вёрстка:&thinsp;<strong>5000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Функциональность:&thinsp;<strong>8750&#8381;</strong>
											</li>
											<li class="pricing__item">
												Настройка сервера:&thinsp;<strong>1000&#8381;</strong>
											</li>
											<li class="pricing__item pricing__item--total">
												&#126;18 дней&thinsp;&mdash;&thinsp;<strong>23000&#8381;</strong>
											</li>'
									fontColor='black'
									backgroundColor='white'
									fontColorBtn='white'
								/>
							</li>
							<li>
								<ListPricesItem 
									title='Уникальный</br>дизайн' 
									prices='
									<li class="pricing__item text-left">
										<span class="center-block text-center">До <strong>7</strong> дней<br />&mdash;</br><strong>6250&#8381;</strong></span>
									</li>'
									fontColor='whiteOrange'
									backgroundColor='darkBlue'
									fontColorBtn='black'
								/>
							</li>
							<li>
								<ListPricesItem 
									title='Лэндинг</br>пэйдж' 
									prices='
											<li class="pricing__item">
												Техническое задание:&thinsp;<strong>2000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Уникальный дизайн:&thinsp;<strong>6250&#8381;</strong>
											</li>
											<li class="pricing__item">
												Вёрстка:&thinsp;<strong>2750&#8381;</strong>
											</li>
											<li class="pricing__item">
												Функциональность:&thinsp;<strong>2750&#8381;</strong>
											</li>
											<li class="pricing__item">
												Настройка сервера:&thinsp;<strong>1000&#8381;</strong>
											</li>
											<li class="pricing__item pricing__item--total">
												&#126;15 дней&thinsp;&mdash;&thinsp;<strong>15250&#8381;</strong>
											</li>'
									fontColor='purple'
									backgroundColor='whiteYellow'
									fontColorBtn='white'
								/>
							</li>
							<li>
								<ListPricesItem 
									title='Сайт</br>визитка' 
									prices='<li class="pricing__item">
												Техническое задание:&thinsp;<strong>2000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Уникальный дизайн:&thinsp;<strong>6250&#8381;</strong>
											</li>
											<li class="pricing__item">
												Вёрстка:&thinsp;<strong>5000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Функциональность:&thinsp;<strong>5000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Настройка сервера:&thinsp;<strong>1000&#8381;</strong>
											</li>
											<li class="pricing__item pricing__item--total">
												&#126;39 дней&thinsp;&mdash;&thinsp;<strong>19250&#8381;</strong>
											</li>'
									fontColor='white'
									backgroundColor='black'
									fontColorBtn='black'
								/>
							</li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
}
				// <div className='prices__discount'>
				// 	<figure />
				// </div>
							// <li>
							// 	<ListPricesItem 
							// 		title='Увеличение</br>конверсии' 
							// 		prices='
							// 		<li class="pricing__item">
							// 			<i>1 день</i></br>&mdash;</br><strong>200&#8381;</strong>
							// 		</li>
							// 		<li class="pricing__item">
							// 			<i>15 дней</i></br>&mdash;</br><strong>2850&#8381;</strong>
							// 		</li>
							// 		<li class="pricing__item">
							// 			<i>30 дней</i></br>&mdash;</br><strong>4050&#8381;</strong>
							// 		</li>'
							// 		fontColor='black'
							// 		backgroundColor='white'
							// 		fontColorBtn='white'
							// 	/>
							// </li>