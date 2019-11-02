/*
 * @Descripttion: 按钮组件
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-17
 * @LastEditors: wenq
 * @LastEditTime: 2019-11-02 16:40:15
 */
import react, { Component } from 'react'
import * as styles from 'Button.css'
import classnames from 'classnames'

export default class Button extends Component {
    constructor(props) {
        super(props)
    } 

    render() {
        let { style, className, caption, ...others }
        className = classnames(className, styles['btn'])
        return <a style={style} className={className} {...others}>{caption || 'button'}</a>
    }
}