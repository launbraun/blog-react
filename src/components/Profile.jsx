import React from 'react'
import photo from '../assets/images/photo.jpg'


const Profile = () => {


    return (
        <>
            <h1 className="page__title">Профиль</h1>


            <form className="form">

                <div className="cabinet">
                    <div className="cabinet__form">
                        <div className="form__group form__group--md">
                            <input className="form__control" type="text" placeholder="Ваше имя"
                                   value="Александр Лаунбраун"/>
                                <span className="form__line"></span>
                        </div>
                        <div className="form__group form__group--md">
                            <input className="form__control" type="email" placeholder="Ваш e-mail"
                                   value="launbraun@bk.ru"/>
                                <span className="form__line"></span>
                        </div>
                        <div className="form__group form__group--md">
                            <input className="form__control" type="password" placeholder="Новый пароль" value=""/>
                                <span className="form__line"></span>
                        </div>
                        <div className="form__group form__group--md">
                            <input className="form__control" type="text" placeholder="Подтвердите пароль" value=""/>
                                <span className="form__line"></span>
                        </div>
                    </div>
                    <div className="cabinet__avatar">
                        <img src={photo} alt=""/>
                            <label htmlFor="" className="cabinet__file">
                                <input type="file"/>выбрать аватар
                            </label>
                    </div>
                </div>

                <button type="submit" className="btn btn--blue btn--rounded btn--sm">Сохранить</button>
            </form>
        </>
)
}


export default Profile
