import React from "react";
import {connect} from "react-redux";

function Works(props) {

    let works = props.works.map(e => <Work props={e} key={e.id}/> )

    return (
        <>
            <h1 className="page__title">Мои работы</h1>
            {works}
        </>
    )
}

const Work = (props) => {

    return (
        <article className="work">
            <div className="work__preview">
                <img src={props.props.preview} alt=""/>
            </div>
            <div className="work__content">
                <h2 className="work__title">
                    <a href="#">{props.props.site}</a>
                </h2>
                <div className="work__description">
                    <p>{props.props.text}</p>
                </div>
                <ul className="tags">
                    { props.props.tags.map(tags => <li className="tags__item">{tags}</li>)}
                </ul>

                <div className="work__footer">
                    <a href="" className="btn btn--blue btn--rounded btn--sm">Перейти на сайт</a>
                </div>
            </div>
        </article>
    )
}


const mapStateToProps = (state) => {

    return {
        works: state.works.works
    }
}

export default connect(mapStateToProps, {})(Works)
