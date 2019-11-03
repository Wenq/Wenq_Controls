/*
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2019-11-03 19:00:31
 * @LastEditors: wenq
 * @LastEditTime: 2019-11-03 23:02:11
 */
//测试数据
import { Map, List, fromJS } from 'immutable'
import img_1 from '../resource_file/imgs/img_1.jpeg'
import img_2 from '../resource_file/imgs/img_2.jpeg'
import img_3 from '../resource_file/imgs/img_3.jpeg'
import img_4 from '../resource_file/imgs/img_4.jpg'
import img_5 from '../resource_file/imgs/img_5.jpeg'


export function getCarouselTestData() {
    //轮播图控件测试数据
    let carousel_test_data = [
        { id: 111, content: img_1 },
        { id: 222, content: img_2 },
        { id: 333, content: img_3 },
        { id: 444, content: img_4 },
        { id: 555, content: img_5 },
    ]
    carousel_test_data = fromJS(carousel_test_data);
    return carousel_test_data;
}