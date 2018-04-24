import React from 'react';
import './Classfy.css'
import {NavLink,Switch,Route} from 'react-router-dom'




export default class Classfy extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="class_head">
                    <div className="head_left">
                        <span className="active">分类</span>
                    </div>
                    <div className="head_right">
                        <span className="">品牌</span>
                        <div className="search">
                            <i className="iconfont icon-sousuosearch82"></i>
                        </div>

                    </div>
                </div>

                <div id="tab1" className="kindbox" style={{display: 'none'}}>
                    <div className="leftbox bgfff scrollbar-none">
                        <div>
                            <ul>
                                <li className="bgfff on">为您推荐</li>
                                <li className="bgfff">E宠国际</li>
                                <li className="bgfff">驱虫祛毛</li>
                                <li className="bgfff">外出清洁</li>
                                <li className="bgfff">狗狗主粮</li>
                                <li className="bgfff">狗狗零食</li>
                                <li className="bgfff">狗狗玩具</li>
                                <li className="bgfff">狗狗清洁</li>
                                <li className="bgfff">狗狗保健</li>
                                <li className="bgfff">狗狗护理</li>
                                <li className="bgfff">狗狗生活</li>
                                <li className="bgfff">狗狗牵引</li>
                                <li className="bgfff">狗狗美容</li>
                                <li className="bgfff">狗狗服饰</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rightbox bgfff scrollbar-none">
                        <div className="sort-detail-list">
                            <div className="sort-recom bgfff">
                                <div className="hot-recom bbtf3">
                                    <a href="javascript:;" className="db ft12">
                                        热门分类
                                    </a>
                                    <ul className="clearfix">
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sort-recom bgfff">
                                <div className="hot-recom bbtf3">
                                    <a href="javascript:;" className="db ft12">
                                        热门分类
                                    </a>
                                    <ul className="clearfix">
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                        <li className="fl">
                                            <a href="javasrcipt:;" className="db">
                                                <div className="loadimg-nofixed">
                                                    <img className="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt=""/>
                                                </div>
                                                <p>强化免疫</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tab2" className="bandsbox" >
                    <div className="brand-list">
                        <div className="wrapper">
                            <div className="title">
                                <span className="c999">—— 推荐品牌 ——</span>
                            </div>
                            <div className="list">
                                <ul className="clearfix">
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="title">
                                <span className="c999">—— 推荐品牌 ——</span>
                            </div>
                            <div className="list">
                                <ul className="clearfix">
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="title">
                                <span className="c999">—— 推荐品牌 ——</span>
                            </div>
                            <div className="list">
                                <ul className="clearfix">
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                    <li className="fl">
                                        <a href="javascript:;" className="block">
                                            <div className="img loadimg-nofixed rela">
                                                <img className="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200"/>
                                            </div>
                                            <p className="name">冠能</p>
                                            <p className="address">美国</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )


    }


}
