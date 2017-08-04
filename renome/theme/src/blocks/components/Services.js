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
					<div className='container' data-aos='zoom-in'>
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
			</div>
		);
	}
}