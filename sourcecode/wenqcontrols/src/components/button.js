/**
 *  按钮组件 
 *  author: wenq
 *  date: 2019年9月17日
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