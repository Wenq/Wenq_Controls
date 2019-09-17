/**
 *  标签组件 
 *  author: wenq
 *  date: 2019年9月17日
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