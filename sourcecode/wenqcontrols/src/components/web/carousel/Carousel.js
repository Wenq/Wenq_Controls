/*
 * @Descripttion: 轮播图控件
 * @version: 
 * @Author: wenq
 * @Date: 2019-11-02 15:26:57
 * @LastEditors: wenq
 * @LastEditTime: 2019-11-02 16:41:42
 */
import React, { Component } from 'react'
import * as styles from './Carousel.css'
import classnames from 'classnames'

export default class Carousel extends Component {
    constructor(props) {
        super(props)
    } 

    render() {
        // let { style={}, className='', ...others }; //es6语法才支持解构
        let { style, className, ...others } = this.props;
        className = classnames(styles['carousel'], className);
        return <div style={style} className={className} {...others}>Carousel</div>
    }
}

Carousel.defaultProps = {
    style: {},
    className: ''
}