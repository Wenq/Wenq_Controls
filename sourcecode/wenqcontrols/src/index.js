/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-08-24 23:06:39
 * @LastEditors: wenq
 * @LastEditTime: 2019-11-03 22:59:37
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//test Carousel
import Carousel from './components/web/carousel/Carousel';
import {getCarouselTestData} from './mock/mock_data'
ReactDOM.render(<Carousel data={getCarouselTestData()} />, document.getElementById('root'));
