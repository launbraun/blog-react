import React from "react";
import preview from '../assets/images/works/work-1.jpg'
import preview2 from '../assets/images/works/work-2.jpg'


let initialState = {
    works:  [
        {id: 1, preview: preview, site: 'altermono.com',tags: ['дизайн', 'создание сайта', 'SMM'], text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat. Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus.'},
        {id: 2, preview: preview2, site: 'yourfuture.com', tags: ['дизайн', 'создание сайта', 'SMM', 'продвижение видео'], text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat. Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.'},
    ]
};



const workReducer = (state = initialState, action) => state


export default workReducer
