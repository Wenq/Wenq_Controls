/*
 * @Descripttion: 标签组件
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-17
 * @LastEditors: wenq
 * @LastEditTime: 2019-09-18 20:12:57
 */
import react, { Component } from 'react'
import * as styles from 'label.css'
import classnames from 'classname'

export default class label extends Component {
    constructor(props) {
        super(props)
    } 

    render() {
        let { style, className, caption, ...others }
        className = classnames(className, styles['label'])
        return <div style={style} className={className} {...others}>{caption || 'button'}</div>
    }
}