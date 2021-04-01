import React, {useEffect} from 'react'
import close from '../assets/images/close.svg'

const Modal = ({active, setActive}) => {

    const noScroll = document.body.classList

    useEffect(()  => {
      active ? noScroll.add('no-scroll') : noScroll.remove('no-scroll');
    });

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <button className="modal__close" type="button">
                    <img src={close} onClick={() => setActive(false)} alt=""/>
                </button>
                <form className="form">
                    <div className="form__group form__group--md">
                        <div className="cabinet__form">
                            <div className="form__group form__group--md">
                                <input className="form__control" type="text" placeholder="Ваше имя"/>
                                <span className="form__line"></span>
                            </div>
                            <div className="form__group form__group--md">
                                <input className="form__control" type="email" placeholder="Ваш e-mail"/>
                                <span className="form__line"></span>
                            </div>
                            <div className="form__group form__group--md">
                                <textarea name="" className="form__control form__control--textarea"
                                          placeholder="Текст сообщения"></textarea>
                                <span className="form__line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="form__footer">
                        <div className="form__group form__group--md">
                            <button type="submit" onClick={() => alert('Ваше сообщение отправлено')} className="btn btn--blue btn--rounded btn--sm">Отправить</button>
                        </div>
                    </div>
                </form>


                <ul className="modal__footer">
                    <li>
                        e-mail: <a href="mailto:launbraun@bk.ru">launbraun@bk.ru</a>
                    </li>
                    <li>
                        тел: <a href="tel:+79117515027">8-911-751-5027 </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Modal
