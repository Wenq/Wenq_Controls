/*
 * @Descripttion: 轮播图控件
 * @version: 
 * @Author: wenq
 * @Date: 2019-11-02 15:26:57
 * @LastEditors: wenq
 * @LastEditTime: 2019-11-03 18:22:01
 */
import React, { Component } from 'react'
import * as styles from './Carousel.css'
import classnames from 'classnames'
import {Map, List, fromJS} from 'immutable'

//控件数据
let test_data = [
    {id: 1, content: 'xxx1.png'},
    {id: 2, content: 'xxx2.png'},
    {id: 3, content: 'xxx3.png'},
    {id: 4, content: 'xxx4.png'},
    {id: 5, content: 'xxx5.png'},
]
test_data = fromJS(test_data)

export default class Carousel extends Component {

    render() {
        let { style, className, data, ...others } = this.props;
        className = classnames('carousel', className);
        //组件标识信息
        let data_custom = {
            type: 'Carousel'
        };
        data_custom = JSON.stringify(data_custom);
        return <div data-data_custom={data_custom} style={style} className={className} {...others}>
            <p>Carousel</p>
            <CarouselFoatMenu className={'carousel-floatmenu'} />
        </div>
    }
}

Carousel.defaultProps = {
    style: {},
    className: ''
}

//轮播图底部切换按钮组件
class CarouselFoatMenu extends Component {

    render() {
        let { style, className, items, ...others } = this.props;
        if (!items || items.size < 1) {
            return null;
        }
        return <ul style={style} className={classnames('carouselfloatmenu', className)}>
            {
                items && items.map((item, index) => {
                    return <li className={'floatitem'}>{index}</li>
                })
            }
        </ul>
    }
}