/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-11-03 19:00:31
 * @LastEditors: wenq
 * @LastEditTime: 2019-11-03 19:02:05
 */
//测试数据
import {Map, List, fromJS} from 'immutable'

//轮播图控件测试数据
let carousel_test_data = [
    {id: 1, content: 'xxx1.png'},
    {id: 2, content: 'xxx2.png'},
    {id: 3, content: 'xxx3.png'},
    {id: 4, content: 'xxx4.png'},
    {id: 5, content: 'xxx5.png'},
]
carousel_test_data = fromJS(carousel_test_data)