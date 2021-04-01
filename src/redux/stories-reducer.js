import React from "react";
import story1 from '../assets/images/stories/stories-1.jpg'
import story2 from '../assets/images/stories/stories-2.jpg'
import story3 from '../assets/images/stories/stories-3.jpg'
import story4 from '../assets/images/stories/stories-4.jpg'


let initialState = {
    stories: [
        {id: 1, path: story1, title: 'Отдыхаю на природе', time: '21.09.2020'},
        {id: 2, path: story2, title: 'Заканчиваю сложный проект', time: '21.09.2020'},
        {id: 3, path: story3, title: 'Переехал в новую квартиру', time: '20.09.2020'},
        {id: 4, path: story4, title: 'Осень пришла!', time: '18.09.2020'},
    ]
};


const storiesReducer = (state = initialState, action) => state


export default storiesReducer
