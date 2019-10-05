/*
 * @Descripttion: 按钮组件
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-17
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-18 20:12:38
 */
import react, { Component } from 'react'
import * as styles from 'button.css'
import classnames from 'classname'

export default class button extends Component {
    constructor(props) {
        super(props)
    } 

    render() {
        let { style, className, caption, ...others }
        className = classnames(className, styles['btn'])
        return <a style={style} className={className} {...others}>{caption || 'button'}</a>
    }
}