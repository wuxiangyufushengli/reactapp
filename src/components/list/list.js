import React from 'react';
import '../Classfy/Classfy.css';
import {reqcategorys} from '../../redux/actions'
import {connect} from 'react-redux'
import {NavLink,Switch,Route} from 'react-router-dom';
import $ from 'jquery';
import BScroll from 'better-scroll';




class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0,
            list:[]
        }
    }
    componentDidMount(){
        this.props.reqcategorys();
        if(!this.scroll){
            this.scroll= new BScroll('.listcontainer', {
                scrollX: true,
                click:true
            })
        }
    };
    select=(event)=>{
       var index=$(event.target).index();
        $(event.target).siblings().removeClass('on');
        $(event.target).addClass('on');
        this.setState({
            index:index,
        });


    };


    render(){
        var {index}=this.state
        console.log(this.props.classfys)
        var list=this.props.classfys[index]&&this.props.classfys[index].cate_list;
        console.log(list)

        return(
                <div id="tab1" className="kindbox" >
                    <div className="leftbox bgfff scrollbar-none">
                        <div className="listcontainer">
                            <ul>
                                {this.props.classfys.map((list,index)=>
                                    <li className={index===0?'on':''} key={index} onClick={this.select}>{list.name}</li>
                                )}


                            </ul>
                        </div>
                    </div>

                        <div className="rightbox bgfff scrollbar-none">
                            <div className="sort-detail-list">
                                {
                                    list&&list.map((item,index)=>
                                        <div className="sort-recom bgfff" key={index}>
                                            <div className="hot-recom bbtf3">
                                                <a href="javascript:;" className="db ft12">
                                                    {item.title}
                                                </a>
                                                <ul className="clearfix">
                                                    {item.list.map((i,index)=>
                                                        <li className="fl" key={index}>
                                                            <a href="javasrcipt:;" className="db">
                                                                <div className="loadimg-nofixed">
                                                                    <img className="image" src={i.photo} alt=""/>
                                                                </div>
                                                                <p>{i.name}</p>
                                                            </a>
                                                        </li>
                                                    )}


                                                </ul>
                                            </div>
                                        </div>

                                    )
                                }


                            </div>
                        </div>


                </div>
        )

    }
}
export default connect(
    state=>({classfys:state.classfys}),{reqcategorys}
)(List)
