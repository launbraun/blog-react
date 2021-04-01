import React from 'react'
import img from '../assets/images/preview.jpg'
import share from '../assets/images/share.svg'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


class FullPost extends React.Component {


    render() {


        return (

                    <article className="post">
                        <div className="post__actions">
                            <NavLink to={'/'} >вернуться назад</NavLink>
                            <a href="">поделиться
                                <img className="post__actions-icon" src={share} alt="поделиться"/>
                            </a>

                        </div>
                        <div className="post__header">

                            <img className="post__preview" src={this.props.posts[this.props.number].preview} alt=""/>

                        </div>

                        <div className="post__header post__header--open">
                            <h1 className="post__title post__title--mb1">
                                {this.props.posts[this.props.number].title}
                            </h1>
                            <ul className="post__data">
                                <li className="post__data-item">
                                    <time >{this.props.posts[this.props.number].time}</time>
                                </li>
                                <li className="post__data-item">
                                    <a href="#">{this.props.posts[this.props.number].category}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="post__content">
                            <div className="post__text">
                                <h2>Title 2</h2>
                                {this.props.posts[this.props.number].text}

                            </div>
                        </div>
                    </article>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        posts: state.posts.posts,

    }
}
export default connect(mapStateToProps, {})(FullPost)

