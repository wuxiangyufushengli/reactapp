import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import './app.css';
import Msite from '../Msite/Msite';
import Classfy from '../Classfy/Classfy';
import Shopcart from '../Shopcart/Shopcart';
import Login from '../Login/Login'



export default class App extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path='/msite' component={Msite}/>
                    <Route path='/classfy' component={Classfy}/>
                    <Route path='/shopcart' component={Shopcart}/>
                    <Route path='/login' component={Login}/>
                </Switch>

                <div className="footer1_guide border-1px">
                    <NavLink to='/msite'>
                        <div className="guide_item">
                        <span className="item_icon">
                          <i className="iconfont icon-iconsy1"></i>
                        </span>
                            <span>首页</span>
                        </div>
                    </NavLink>
                    <NavLink to='/classfy'>
                        <div className="guide_item">
                     <span className="item_icon">
                        <i className="iconfont icon-icon04"></i>
                     </span>
                            <span>分类</span>
                        </div>
                    </NavLink>
                    <NavLink to='/shopcart'>
                        <div className="guide_item">
                      <span className="item_icon">
                       <i className="iconfont icon-gouwugouwuchedinggou"></i>
                      </span>
                            <span>购物车</span>
                        </div>
                    </NavLink>
                    <NavLink to='/login'>
                        <div className="guide_item">
                     <span className="item_icon">
                      <i className="iconfont icon-xiaolian-"></i>
                    </span>
                            <span>我的E宠</span>
                        </div>
                    </NavLink>
                </div>
            </div>

        )


    }


}
