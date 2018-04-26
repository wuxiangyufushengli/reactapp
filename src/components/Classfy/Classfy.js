import React from 'react';
import './Classfy.css';
import {connect} from 'react-redux'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom';
import {reqcategorys} from '../../redux/actions'
import List from '../list/list';
import Brand from '../brand/brand';
import PubSub from 'pubsub-js';





 class Classfy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
            isactive:false,

        }

    };
    componentWillMount(){
        if(this.props.match.path=='/classfy'){
            PubSub.publish('show',this.state.show)
        }
        this.props.reqcategorys();

    };

    render(){
        var {classfys}=this.props;
        return(
            <div>
                <div className="container">
                    <div className="class_head">
                        <div className="head_left"  >
                            <NavLink to='/classfy/list'>
                                <span>分类</span>
                            </NavLink>

                        </div>
                        <div className="head_right" >
                            <NavLink to='/classfy/brand'>
                                <span>品牌</span>
                            </NavLink>

                            <div className="search">
                                <i className="iconfont icon-sousuosearch82"></i>
                            </div>
                        </div>
                    </div>

                </div>
                <Switch>
                    <Route path='/classfy/list' component={List}/>
                    <Route path='/classfy/brand' component={Brand}/>
                    <Redirect to='/classfy/list'/>
                </Switch>

            </div>

        )

    }

}
export default connect(
    state=>({classfys:state.classfys}),{reqcategorys}
)(Classfy);
