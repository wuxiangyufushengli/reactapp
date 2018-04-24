import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import './shopcart.css'



export default class Shopcart extends React.Component{
    render(){
        return(
            <div>
                <div className="bg">
                    <header className="ftc head-top bgfff zcolor rela">
                        <a href="javascript:void(0)" className="aback page-top go-back iconfont icon-jiantou2"></a>
                    <span className="ft18 topbar-title">购物车</span>
                    <span className="iconfont icon-tupianliebiao" ></span>
               </header>
        <transition name="move">
            <div className="footer border-1px" v-show="isShow">
                <div className="guide">
          <span className="item_icon">
            <i className="iconfont icon-iconsy1"></i>
          </span>
                <span>首页</span>
            </div>
            <div className="guide">
          <span className="item_icon">
            <i className="iconfont icon-icon04"></i>
          </span>
            <span>分类</span>
        </div>
        <div className="guide" >
        <span className="item_icon">
               <i className="iconfont icon-gouwugouwuchedinggou"></i>
              </span>
        <span>购物车</span>
    </div>
        <div className="guide" >
        <span className="item_icon">
              <i className="iconfont icon-xiaolian-"></i>
            </span>
        <span>我的E宠</span>
    </div>
    </div>
    </transition>
        <div id="CartBox">
            <div className="mycart">
                <div className="m-emptycoupon ftc bgfff" >
                    <div>
                        <span className="u-emtcoupon iconfont icon-gouwugouwuchedinggou">&nbsp;</span>
                    </div>
                    <div className="ftc emttip ft16" >购物车是空的</div>
                    <div className="emt-a mt15">
                        <a href="http://wap.epet.com" className="c999 ft16 mr5">去逛逛</a>
                        <a href="javascript;;" className="c999 ft16">我的收藏</a>
                    </div>
                </div>

            </div>
        </div>

    </div>
    </div>

        )


    }


}
