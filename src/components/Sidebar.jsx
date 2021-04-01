import React from 'react'
import photo from '../assets/images/photo.jpg'
import sidebarBG from '../assets/images/sidebar-header.jpg'
import instagram from '../assets/images/instagram.svg'
import vk from '../assets/images/vk.svg'
import pinterest from '../assets/images/pinterest.svg'
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {

    return (
        <aside className={'sidebar'}>
            <div className={'sidebar__header'}>
                <img src={sidebarBG} alt=""/>
            </div>
            <div className={'sidebar__content'}>
                <div className={'profile'}>
                    <img className={'profile__avatar'} src={photo} alt=""/>
                    <div className={"profile__header"}>
                    <div className={'profile__name'}>Aleksandr Launbraun</div>
                    <div className={'profile__prof'}>Frontend Developer</div>
                    </div>
                    <ul className={'social'}>
                        <li className={'social__item'}>
                            <a href="" target={'_blank'}>
                                <img src={instagram} alt=""/>
                            </a>
                        </li>
                        <li className={'social__item'}>
                            <a href="" target={'_blank'}>
                                <img src={vk} alt=""/>
                            </a>
                        </li>
                        <li className={'social__item'}>
                            <a href="" target={'_blank'}>
                                <img src={pinterest} alt=""/>
                            </a>
                        </li>
                    </ul>
                    <div className={'profile__text'}>
                        <p> Junior Front-end разработчик. Практикуюсь верстке сайтов.
                            Созданием сайтов занимаюсь с 2020 года. Применяю полученные теоретические знания на практике.
                        </p>
                    </div>
                </div>

                <nav className="nav nav--mobile">
                    <ul className="nav__list">
                        <li className="nav__item" onClick={props.closeSidebar}>
                            <NavLink to={'/'} className="nav__link">Главная</NavLink>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link has-subnav">Статьи</a>
                            <ul className="subnav">
                                <li>
                                    <a href="#" className="subnav__link">Создание сайтов</a>
                                </li>
                                <li>
                                    <a href="#" className="subnav__link">Интернет-маркетинг </a>
                                </li>
                                <li>
                                    <a href="#" className="subnav__link">Продвижение видео</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">Обо мне</a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">Реклама</a>
                        </li>
                        <li className="nav__item" onClick={props.closeSidebar}>
                            <NavLink to={'/profile'} className="nav__link" >Профиль</NavLink>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">Выйти</a>
                        </li>
                    </ul>
                </nav>


            </div>





            <div className={'sidebar__footer'}>

                <NavLink to={'/works'} className={'btn btn--red'}>Мои работы</NavLink>
                <button className={'btn btn--blue'} onClick={() => props.setActive(true)}>Написать мне</button>
            </div>
        </aside>
    )
}

export default Sidebar
