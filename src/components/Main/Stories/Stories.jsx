import React from 'react'


const Story = (props) => {

    return  (
        <div className="stories__item">
            <img className="stories__preview" src={props.stories.path} alt=""/>
            <div className="stories__title">{props.stories.title}</div>
            <time className="stories__data" dateTime="2020-09-21 19:21">{props.stories.time}</time>
        </div>
    )
}


const Stories = (props) => {

    let stories = props.stories.map(e => <Story stories={e} key={e.id}/>)

    return (
        <div className="stories">
            {stories}
        </div>
    )
}



export default Stories
