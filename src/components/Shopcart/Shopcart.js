import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import './shopcart.css';
import PubSub from 'pubsub-js';
import $ from 'jquery'


export default class Shopcart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            isshow:true
        }

    };
    show=()=>{
        var footer=this.refs.footer;
      this.setState({
          isshow:!this.state.isshow
      });
       if(this.state.isshow){
           $(footer).addClass('show');
           $(footer).removeClass('hide');
       }else{
           $(footer).addClass('hide');
           $(footer).removeClass('show');
       }





    };
    componentWillMount(){
        if(this.props.match.path=='/shopcart'){
            PubSub.publish('show',this.state.show)
        }
    }
    render(){
        return(
            <div>
                <div className="bg">
                    <header className="ftc head-top bgfff zcolor rela">
                        <a href="javascript:void(0)" className="aback page-top go-back iconfont icon-jiantou2"></a>
                    <span className="ft18 topbar-title">购物车</span>
                    <span className="iconfont icon-tupianliebiao" onClick={this.show}></span>
               </header>

            <div ref='footer' className="footer border-1px">
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
