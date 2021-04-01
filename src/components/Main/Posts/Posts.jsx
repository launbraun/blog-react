import React from "react";
import {NavLink} from "react-router-dom";

const Post = (props) => {

    const textDescription = props.posts.text.slice(0, 230)

    return (
        <article className="post">
            <div className="post__header post__header--preview">
                <a href="#">
                    <img className="post__preview" src={props.posts.preview} alt=""/>
                </a>
            </div>
            <div className="post__content">
                <h2 className="post__title">
                    <a href="#">{props.posts.title}</a>
                </h2>
                <p className="post__description">{textDescription}
                </p>
            </div>
            <div className="post__footer">
                <ul className="post__data">
                    <li className="post__data-item">
                        <time>{props.posts.time}</time>
                    </li>
                    <li className="post__data-item">
                        <a href="#">{props.posts.category}</a>
                    </li>
                </ul>
                <NavLink  className="post__read" to={props.posts.url}>Читать</NavLink>
               </div>
        </article>
    )

}

const Posts = (props) => {

    let posts = props.posts.map(e => <Post posts={e} key={e.id}/> )

    return ( <>
            {posts}
           </>
    )
}

export default Posts
