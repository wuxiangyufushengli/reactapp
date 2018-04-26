import React from 'react';
import {connect} from 'react-redux';
import {NavLink,Switch,Route} from 'react-router-dom';
import {reqhomepage} from '../../redux/actions';
import {reqHomepage,reqActivity} from '../Msite/../../components/../api/index'
import './msite.css';

import BScroll from 'better-scroll'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import PubSub from 'pubsub-js';

var logo=require('./imgs/closebtn_03.png');

var mydope=require('./imgs/mydope.png');

  class Msite extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             menus:[],
             image:[],
             saleimgs:[],
             listimgs:[],
             datas:[],
             show:true,
         };
     }
    componentWillMount(){

    };
     componentDidUpdate(){
         //轮播

         if(!this.swiper){
             this.swiper=new Swiper('.banner_item>.swiper-container', {
                 loop: true,
                 autoplay: {
                     disableOnInteraction:false
                 },
                 delay: 3000,
                 pagination: {
                     el: '.swiper-pagination'
                 }
             });
         };
         //导航轮播
         if(!this.scroll){
             this.scroll= new BScroll('.navWrap', {
                 scrollX: true
             })
         }

         //活动滑动
         if(!this.scroll2){
             new BScroll('.scroll_wrap',{
                 scrollX: true
             })
         }

     };
     componentDidMount(){
         if(this.props.match.path=='/msite'){
             PubSub.publish('show',this.state.show)
         }
         this.props.reqhomepage()
         //发请求
         reqHomepage().then((response)=>{
          var result=response.data;
          console.log(result)
             console.log(result.menus)
          this.setState({
              menus:result.menus,
              image:result.image,
              listimgs:result.contentimg,
              datas:result.datas[1].menus
          })

        });
         //发请求拿活动的信息
         reqActivity().then((response)=>{
             var result=response.data;
             console.log(result);
             this.setState({
                 saleimgs:result.data.info.goods,
             })


         })


     };
    render(){

        return(
            <div>
                <div>
                    <div className="fixHeader">
                        <div className="xiazaibaApp">
                            <div className="wrapper">
                                <span className="closebtn">
                                  <img src={logo} alt="关闭广告"/>
                                </span>
                                <div className="appImg">
                                    <a style={{display: 'block'}}>
                                        <img src="https://img2.epetbar.com/nowater/2018-04/17/19/7b42981dd47d00450b16a8906cfb2731.jpg@!water"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="headerBox">
                            <div className="topFix">
                                <div className="address">
                                    狗站|<a href="">天津<span className="triangle"></span></a>
                                </div>
                                <div className="search">
                                    <a href="#">
                                        <input type="search" placeholder="搜索商品和品牌"/>
                                            <span className="iSearch iconfont icon-icon--"></span>
                                    </a>
                                </div>
                                <div className="dialog">
                                    <a href="#">
                                        <img src={mydope}/>
                                    </a>
                                </div>
                            </div>
                            <nav className="navWrap">
                                <ul className="navList">
                                    {this.state.menus.map((menu,index)=>
                                        <li className="active" key={index}>
                                            <a href="javascript:;" class={index==0?'smallgreen':0}>{menu.menu_name}</a>
                                            <i className="linebottom"></i>
                                        </li>
                                    )}

                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="allmodule">
                        <div>
                            <div className="banner_item">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        {this.state.image.map((img,index)=>
                                            <div className="swiper-slide" key={index}>
                                                <img src={img.image}/>
                                            </div>

                                        )}

                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="columnnavdiv">
                                <div>
                                    <ul className="clearfix hottype">
                                        {this.state.datas.map((img,index)=>
                                            <li className="fl" style={{width: '20%',height: '90px'}} key={index}>
                                                <a href="javascript:;">
                                                    <img src={img.image}/>
                                                </a>
                                            </li>
                                        )}



                                    </ul>
                                </div>
                            </div>

                            <div className="new_special">
                                <img src="https://img1.epetbar.com/2018-04/18/09/39cbb85bc98c28d7e1c95c8705e9f4a6.gif" alt=""/>
                            </div>

                            <div className="surprise_day">
                                <div className="surprise">
                                    <div className="surprise-tit ">
                                        <div className="titimg">
                                            <img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03"/>
                                        </div>
                                        <div className="tit_right">
                                            <span className="endTime">本场结束</span>
                                            <span className="text">12</span><span>:</span>
                                            <span className="text">00</span>
                                            <img className="more" src="https://img2.epetbar.com/nowater/2018-02/02/12/80acfffe2d91b341fd2c8de903b3eace.png"/>
                                        </div>
                                    </div>
                                    <div className="surprise-scroll">
                                        <div className="scroll_wrap swiper-container">
                                            <div className="swiper-wrapper1 scroll_first" >
                                                {this.state.saleimgs.map((img,index)=>
                                                    <div className="swiper-slide" key={index}>
                                                        <img src={img.image.image}/>
                                                        <span className="price">￥{img.sale_price}</span>
                                                        <span className="huodong">{img.little_price}</span>
                                                    </div>

                                                )}



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="line">
                                <div className="page_line"></div>
                            </div>

                            <div className="divboximg">
                                <div className="divimg">
                                    <a href="javascript:;" className="default_bg">
                                        <img src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water" alt=""/>
                                    </a>
                                </div>
                                <div className="divimg">
                                    <a href="javascript:;" className="default_bg">
                                        <img src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water" alt=""/>
                                    </a>
                                    <a href="javascript:;" className="default_bg">
                                        <img src="https://img2.epetbar.com/nowater/2017-12/19/13/62a49af47aa7f713fc0ac0c9b9657e33.jpg@!water" alt=""/>
                                    </a>
                                </div>
                            </div>

                            <div className="line">
                                <div className="page_line"></div>
                            </div>

                            <div className="banner_item">
                                <div className="banner swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img src="https://img2.epetbar.com/nowater/2018-04/22/10/a4d3338694116d5fe9f8bb6980865d35.jpg@!water"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="https://img2.epetbar.com/nowater/2018-04/22/10/863ed304cede2304b68f9468e3a5ff4a.jpg@!water"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="https://img1.epetbar.com/2018-04/25/09/76d4351905a120bcf5c0034a66b7d0f3.jpg@!water"/>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="line">
                                <div className="page_line"></div>
                            </div>

                            <div className="custom_tite">
                                <div className="custom_left">
                                    <img src="https://img2.epetbar.com/nowater/2017-12/13/13/11acf905ca327ed7aae8f9b4851850a0.jpg" alt=""/>
                                </div>
                                <div className="custom_right">
                                    <a href="">
                                        <img src="https://img2.epetbar.com/nowater/2017-12/13/13/22f20febaae655371ef3766612102c0e.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div class="imgs">
                                {this.state.listimgs.map((img,index)=>
                                    <img name="750x320" src={img.menu_src} style={{height: '176.64px'}} key={index}/>
                                )}
                            </div>

                            <div className="custom_tite">
                                <div className="custom_left">
                                    <img src="https://img2.epetbar.com/nowater/2018-02/07/10/79d53b0ab1c8a630802d74b5beb0a632.jpg" alt=""/>
                                </div>
                                <div className="custom_right">
                                    <a href="">
                                        <img src="https://img2.epetbar.com/nowater/2017-12/13/13/22f20febaae655371ef3766612102c0e.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="fashion">
                                <div className="fashion_img">
                                    <img src="https://img1.epetbar.com/2017-12/13/16/5837d50b4993a5de2aff2b26ce8cf3d5.png?x-oss-process=style/waterfall&$1=500" alt=""/>
                                </div>
                                <div className="fashion_info">
                                    <p>SodaPup 易拉罐漏食狗玩具 口感软弹洁牙护牙</p>
                                    <p>
                                        <i className="iconfont icon-yanjing"></i>
                                        <span>7944</span>
                                        <span>|</span>
                                        <span>01:29</span>
                                    </p>
                                </div>
                            </div>

                            <div className="custom_tite">
                                <div className="custom_left">
                                    <img src="https://img2.epetbar.com/nowater/2017-12/13/14/77c0017136e51145788b7607a3a0914c.jpg" alt=""/>
                                </div>
                                <div className="custom_right">
                                    <a href="">
                                        <img src="https://img2.epetbar.com/nowater/2017-12/13/13/22f20febaae655371ef3766612102c0e.jpg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="fashion">
                                <div className="fashion_img">
                                    <img src="https://img1.epetbar.com/2017-12/13/16/5837d50b4993a5de2aff2b26ce8cf3d5.png?x-oss-process=style/waterfall&$1=500" alt=""/>
                                </div>
                                <div className="fashion_info">
                                    <p>SodaPup 易拉罐漏食狗玩具 口感软弹洁牙护牙</p>
                                    <p>
                                        <i className="iconfont icon-yanjing"></i>
                                        <span>7944</span>
                                        <span>|</span>
                                        <span>01:29</span>
                                    </p>
                                </div>
                            </div>




                            <div className="yiping">
                                <img src="imgs/yiping/777.jpg" alt=""/>
                            </div>

                            <div className="foot_wrp">
                                <p className="p1">
                                    <span>触摸屏</span>
                                    <span>手机客户端</span>
                                    <span>关于我们</span>
                                    <span>联系我们</span>
                                </p>
                                <p className="p2">© wap.epet.com 版权：重庆易宠科技有限公司</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        )


    }


}

export default connect(
    //一般数据                              //函数数据
    state => ({homepage: state.homepage}),{reqhomepage}
)(Msite);//组件
