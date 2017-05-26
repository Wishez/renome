import React, { Component } from 'react';
import Title from './Title';
import ServicesItem from './ServicesItem';
import OrderFrom from './OrderForm';
import TasksListItem from './TasksListItem';
import ListPricesItem from './ListPricesItem';

export default class Services extends Component {
	render() {
		return (
			<div className='services'>
				<OrderFrom />
				<section className='bigTitle text-center'>
					<div className='container' data-aos='zoom-out'>
						<Title block='bigTitle'
							text='Перечень наших услуг'
						/>
					</div>
				</section>
				<section className='container'>
					<ul className='services__items'>
						<li>
							<ServicesItem 
								icon='os'
								title='Интернет магазин'
								text='Интернет магазин на <strong>Django</strong> &mdash; позволит
								пользователям интернета покупать ваши продукты при помощи онлайн кассы
								и платёжных систем, а вам без особых усилий управлять заказами клиентов и 
								товарами, которые вы продаёте.'
							/>
						</li>
						<li>
							<ServicesItem 
								icon='ln'
								title='Лэндиг-пэйдж'
								text='Лэндинг-пэйдж &mdash; продающаяся страница,
								которая увеличит ваши продажи. Уникальный дизайн и непрерывно поступающие заказы.'
							/>
						</li>
						<li>
							<ServicesItem 
								icon='pf'
								title='Сайт-визитка'
								text='Сайт-визитка &mdash; отлично подойдёт малому бизнесу.  
								Уникальный дизайн и понятная структура помогут донести 
								клиенту об товарах и услугах вашей фирмы.'
							/>
						</li>
						<li>
							<ServicesItem 
								icon='ud'
								title='Уникальный дизайн'
								text='Уникальный дизайн &mdash; это подбор цветов, 
								шрифтов и структуры пользовательского интерфейса. 
								Правильный дизайн поможет пользователю проще взаимодействовать 
								с сайтом и оставит у него желание посетить его ещё раз.'
							/>
						</li>
						<li>
							<ServicesItem 
								icon='cv'
								title='Увеличение конверсии'
								text='Хорошая реклама увеличит количество пользователей,
									  которые выполняют основные цели, для которых был построен сайт.  
									  Также этому способствует Уникальный дизайн.'
							/>
						</li>
						<li>
							<ServicesItem 
								icon='sp'
								title='Поддержка сайта'
								text='Иногда возникает потребность добавить 
								или изменить что-нибудь на сайте. 
								В этот момент вы можете испытывать нужду 
								в программисте, который способен реализовать вашу задумку. 
								Ваш <strong>покорнй слуга</strong> готов прийти в любое время дня и ночи.'
							/>
						</li>
					</ul>
				</section>
				<section className='process'>
					<div className='container'>
						<div data-aos='zoom-in'>
							<Title 
								block='text-center process'
								text='В заказ сайта входит'
							/>
						</div>
						<ul className='tasksList'>
							<li>
								<TasksListItem 
									icon='battery-empty'
									title='Техническое задание(ТЗ)'
									text='&thinsp;&mdash;&thinsp;описывает какие задачи требуется выполнить 
и в какие сроки они будут выполнены.'
								/>
							</li>
							<li>
								<TasksListItem 
									icon='battery-quarter'
									title='Разработка дизайна'
									text='&thinsp;&mdash;&thinsp;построение внешнего вида сайта, адаптированным 
под стиль вашей фирмы.'
								/>
							</li>
							<li>
								<TasksListItem 
									icon='battery-half'
									title='Адаптивная вёрстка '
									text='&thinsp;&mdash;&thinsp;реализация макетов для стационарных, планшетных 
и мобильных устройств.'
								/>
							</li>
							<li>
								<TasksListItem 
									icon='battery-three-quarters'
									title='Интеграция вёрстки на <strong>Django</strong>'
									text='&thinsp;&mdash;&thinsp;управление содержимым сайта с помощью
панели управления.'
								/>
							</li>
							<li>
								<TasksListItem 
									icon='battery-full'
									title='Тестирование'
									text='&thinsp;&mdash;&thinsp;проверка всей функциональности вашего сайта.'
								/>
							</li>
							<li>
								<TasksListItem 
									
									title='Настройка сервера'
									text='&thinsp;&mdash;&thinsp;то место, куда будут приходить пользователи.'
								/>
							</li>
							
						</ul>
						<button className='btn process__btn makeOrder' data-aos='zoom-in'>
							Оформить заказ
						</button>
					</div>
				</section>
				<section className='prices text-center'>
					<div className='container'>
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
									title='Увеличение</br>конверсии' 
									prices='
									<li class="pricing__item">
										<i>1 день</i></br>&mdash;</br><strong>200&#8381;</strong>
									</li>
									<li class="pricing__item">
										<i>15 дней</i></br>&mdash;</br><strong>2850&#8381;</strong>
									</li>
									<li class="pricing__item">
										<i>30 дней</i></br>&mdash;</br><strong>4050&#8381;</strong>
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
										Около-недельная работа над вашим уникальным дизайном, 
										от великолепного меня, будет стоить<span class="center-block text-center"></br>&mdash;</br><strong>5000&#8381;</strong></span>
									</li>'
									fontColor='whiteOrange'
									backgroundColor='darkBlue'
									fontColorBtn='black'
								/>
							</li>
							<li>
								<ListPricesItem 
									title='Интернет</br>магазин' 
									prices='
											<li class="pricing__item">
												Техническое задание:&thinsp;<strong>2500&#8381;</strong>
											</li>
											<li class="pricing__item">
												Уникальный дизайн:&thinsp;<strong>5000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Адаптивна вёрстка:&thinsp;<strong>5000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Программирование:&thinsp;<strong>15000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Настройка сервера:&thinsp;<strong>1500&#8381;</strong>
											</li>
											<li class="pricing__item pricing__item--total">
												&#126;46 дней&thinsp;&mdash;&thinsp;<strong>29500&#8381;</strong>
											</li>'
									fontColor='white'
									backgroundColor='black'
									fontColorBtn='black'
								/>
							</li>
							<li>
								<ListPricesItem 
									title='Лэндинг</br>пэйдж' 
									prices='
											<li class="pricing__item">
												Техническое задание:&thinsp;<strong>2500&#8381;</strong>
											</li>
											<li class="pricing__item">
												Уникальный дизайн:&thinsp;<strong>5000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Адаптивна вёрстка:&thinsp;<strong>5000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Программирование:&thinsp;<strong>5000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Настройка сервера:&thinsp;<strong>1500&#8381;</strong>
											</li>
											<li class="pricing__item pricing__item--total">
												&#126;29 дней&thinsp;&mdash;&thinsp;<strong>19000&#8381;</strong>
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
												Техническое задание:&thinsp;<strong>2500&#8381;</strong>
											</li>
											<li class="pricing__item">
												Уникальный дизайн:&thinsp;<strong>5000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Адаптивна вёрстка:&thinsp;<strong>5000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Программирование:&thinsp;<strong>10000&#8381;</strong>
											</li>
											<li class="pricing__item">
												Настройка сервера:&thinsp;<strong>1500&#8381;</strong>
											</li>
											<li class="pricing__item pricing__item--total">
												&#126;39 дней&thinsp;&mdash;&thinsp;<strong>24500&#8381;</strong>
											</li>'
									fontColor='green'
									backgroundColor='lightRed'
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