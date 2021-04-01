import React, {useState} from "react";
import {NavLink} from "react-router-dom";


const Header = (props) => {



    return (
        <header className="header">
            <div className="header__left">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/" className="nav__link">Главная</a>
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
                    </ul>
                </nav>

                {props.sidebarActive
                    ? <button className="burger active" type="button" onClick={props.closeSidebar} >
                      <span>Открыть навигацию</span>
                      </button>
                    : <button className="burger active" type="button" onClick={props.showSidebar} >
                      <span>Открыть навигацию</span>
                      </button>
                }
            </div>
            <div className="header__right">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to={'/profile'} className="nav__link">Профиль</NavLink>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link">Выйти</a>
                        </li>
                    </ul>
                </nav>
                <form method="post" className="search">
                    <input className="search__input" type="text" placeholder="Поиск по блогу"/>
                </form>

            </div>
        </header>
    )
}

export default Header
