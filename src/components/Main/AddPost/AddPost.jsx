import React from "react";
import send from '../../../assets/images/send-btn.svg'

const AddPost = (props) => {

    return (
        <div className="add-post">
            <form action="/" className="add-post__form" method="post">
                <textarea className="add-post__textarea" name="post-text" placeholder="Напишите что-нибудь" />
                <div className="add-post__form-actions">
                    <label className="add-post__file" htmlFor="add-post-file">
                        <input type="file" id="add-post-file" />

                    </label>
                    <button className="add-post__send" type="submit">
                        <img src={send} alt="Отправить" />

                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddPost
