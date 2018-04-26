import React from 'react';
import '../Classfy/Classfy.css';
import {connect} from 'react-redux';
import {reqbrand} from '../../redux/actions'
import {NavLink,Switch,Route} from 'react-router-dom';
import PubSub from 'pubsub-js';
import {reqAllbrands} from '../../api/index';
import BScroll from 'better-scroll'




class Brands extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            allbrands:[],
            index:0,
            tops:[],
            scrollY:0
        }
    };
    handleClick=(index)=>{
        this.setState({
            index
        });
        const y=-this.state.tops[index]-50;
        this.bs.scrollTo(0,y,300);
        this.state.scrollY=this.state.tops[index]
    };

    componentDidMount(){
        if(this.props.match.path=='/brands'){
            PubSub.publish('show',this.state.show)
        };
        //发请求
        reqAllbrands().then((response)=>{
            var allbrands=response.data.brand;
            this.setState({
                allbrands
            });
            //得到所有的top集合
            const tops=[];
            let top=0;
            tops.push(top);
            var lis=document.getElementsByClassName('branditem');
            Array.prototype.slice.call(lis).forEach(li => {
                top += li.clientHeight
                tops.push(top)
            });
            console.log(tops)
            this.setState({
                tops
            });
            //内容滚动
            if(!this.bs){
                this.bs=new BScroll('.bwcontainer',{
                    scrollY: true,
                    click:true,
                    probeType: 3,
                })

            };
            this.bs.on('scroll', (pos) => {
                var scrollY = Math.abs(pos.y);//实时监控手指滑动距离，就为scrollY的值
                this.setState({
                    scrollY: scrollY
                });



            });
            this.bs.on('scrollEnd', (pos) => {
                var scrollY = Math.abs(pos.y)
                this.setState({
                    scrollY: scrollY
                });

                //获取当前的索引
                console.log(this.state.tops,this.state.scrollY)
                var index=this.state.tops.findIndex((top,index)=>{
                   // console.log(this.state.scrollY,top)
                     return this.state.scrollY>top && this.state.scrollY< this.state.tops[index+1];
                })
               this.setState({
                   index
               })
            });






        });



    };


    render(){

        return(
            <div>
                <div style={{height:"600px"}} className='bwcontainer' >
                    <div className="bW" >
                        <div>
                            <header className="headerTop1">
                                <a href="javascript:;" className="iconfont icon-jiantou2"></a>
                                <span className="all">全部品牌</span>
                                <span className="iconfont icon-tupianliebiao" id="icon"></span>
                            </header>
                            <div id="content" className="brand-list">
                                <div>
                                    {this.state.allbrands?this.state.allbrands.map((brand,index)=>
                                        <div id="item0" className="branditem" key={index}>
                                            <h2 className="letter">{brand.order}</h2>
                                            <div>
                                                {brand.list.map((item,index)=>
                                                    <a href="javascript:;" key={index}>
                                                        <div className="brand-wrapper">
                                                            <div className="brand-img">
                                                                <img className="iamge" src={item.photo}/>
                                                            </div>
                                                            <div className="brand-name">
                                                                <p className="ft14">{item.name}</p>
                                                                <p className="ft12 c999">{item.address}</p>
                                                            </div>
                                                        </div>
                                                        <div className="line"></div>
                                                    </a>
                                                )}

                                            </div>



                                        </div>

                                    ):''}

                                </div>



                            </div>

                        </div>


                    </div>
                </div>

                <div className="l-26">
                    {this.state.allbrands.map((item,index)=>
                        <span className={this.state.index===index?'letterActive':''} key={index} onClick={()=>{this.handleClick(index)}}>{item.order}</span>
                    )}

                </div>
            </div>






        )

    }

}
export default connect(

)(Brands)
