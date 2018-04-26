import React from 'react';
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import './app.css';
import Msite from '../Msite/Msite';
import Classfy from '../Classfy/Classfy';
import Shopcart from '../Shopcart/Shopcart';
import Login from '../Login/Login';
import PubSub from 'pubsub-js';





export default class App extends React.Component{
      constructor(props){
        super(props);
        this.state={
            show:true
        }

      };
    //底部隐藏
       /* show=()=> {
            PubSub.subscribe('show', (msg, data) => {
                this.setState({
                    show: data
                })

            });
            console.log(this.state.show)

        }*/
       componentDidMount(){
           PubSub.subscribe('show', (msg, data) => {
               this.setState({
                   show: data
               })

           });
           console.log(this.state.show)
       }

    render(){

        //console.log(this.state.show)
        return(
            <div>
                <Switch>
                    <Route path='/msite' component={Msite}/>
                    <Route path='/classfy' component={Classfy}/>
                    <Route path='/shopcart' component={Shopcart}/>
                    <Route path='/login' component={Login}/>
                    <Redirect to='/msite'></Redirect>
                </Switch>


                <div className="footer1_guide border-1px" style={{display:this.state.show?' ':'none'}}>
                    <NavLink to='/msite' onClick={this.show}>
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
                    <NavLink to='/login' onClick={this.show}>
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
