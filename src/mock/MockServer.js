
import Mock from 'mockjs'

import data from './data.json'


Mock.mock('/classafiy/sort', {code: 0, data: data.categorys});
Mock.mock('/classafiy/brand', {code: 0, data: data.brand});
Mock.mock('/homepages', {code: 0, data: data.homepages});
Mock.mock('/allbrands', {code: 0, data: data.allbrands});
Mock.mock('/activity',{code: 0, data: data.activity});


