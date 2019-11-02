/*
 * @Descripttion: 标签组件
 * @version: 
 * @Author: wenq
 * @Date: 2019-09-17
 * @LastEditors: wenq
 * @LastEditTime: 2019-11-02 15:32:31
 */
import react, { Component } from 'react'
import * as styles from 'Label.css'
import classnames from 'classnames'

export default class Label extends Component {
    constructor(props) {
        super(props)
    } 

    render() {
        let { style, className, caption, ...others }
        className = classnames(className, styles['label'])
        return <div style={style} className={className} {...others}>{caption || 'button'}</div>
    }
}