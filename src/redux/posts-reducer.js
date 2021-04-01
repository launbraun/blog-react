import React from "react";
import preview from '../assets/images/preview.jpg'
import preview2 from '../assets/images/preview2.jpg'
import preview3 from '../assets/images/preview3.jpg'
import preview4 from '../assets/images/preview4.jpg'





let initialState = {
    posts: [
        {id: 1, preview: preview, title: 'Как писать код быстро и безболезненно?', time: '21.09.2020', category: 'самообразование', url: '/post-1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat. Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?'},
        {id: 2, preview: preview2, title: 'Как я сходил на FrontEnd Conf 2021', time: '20.09.2020', category: 'самообразование', url: '/post-2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat. Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?'},
        {id: 3, preview: preview3, title: 'Какой текстовый редактор выбрать?', time: '19.09.2020', category: 'cоздание сайтов', url: '/post-3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat. Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?'},
        {id: 4, preview: preview4, title: 'Оптимизация информационной безопасности', time: '18.09.2020', category: 'самообразование', url: '/post-4', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat. Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, illum temporibus. Consequuntur cupiditate debitis dolore harum ipsam nostrum quaerat.Architecto at aut ducimus ipsum, minus nam non placeat provident recusandae? '},

    ]
};





const postsReducer = (state = initialState, action) => state


export default postsReducer