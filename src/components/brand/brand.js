import React from 'react';
import '../Classfy/Classfy.css';
import {connect} from 'react-redux';
import {reqbrand} from '../../redux/actions'
import {NavLink,Switch,Route} from 'react-router-dom';
import $ from 'jquery'





 class Brand extends React.Component{
    componentDidMount(){
        var brands=this.props.reqbrand();
        console.log(this.props.brands)

    };


    render(){
        var {brands}=this.props;
        return(
            <div>
            <div>
                <div id="tab2" className="bandsbox">
                    <div className="brand-list">
                        {brands?brands.map((brand,index)=>
                            <div className="wrapper" key={index}>
                                <div className="title">
                                    <span className="c999">—— {brand.title} ——</span>
                                </div>
                                <div className="list">
                                    <ul className="clearfix">
                                        {
                                            brand.list.map((item,index)=>
                                                <li className="fl" key={index}>
                                                    <a href="javascript:;" className="block">
                                                        <div className="img loadimg-nofixed rela">
                                                            <img className="db image" src={item.photo}/>
                                                        </div>
                                                        <p className="name">{item.name}</p>
                                                        <p className="address">{item.address}</p>
                                                    </a>
                                                </li>

                                            )

                                        }


                                    </ul>
                                </div>
                            </div>
                        ):''}

                    </div>
                </div>
                <NavLink to='/brands' onClick={this.isShow}>
                    <div class="allMenue" >全部</div>
                </NavLink>
            </div>


            </div>
        )

    }

}
export default connect(
    state=>({brands:state.brands}),{reqbrand}
)(Brand)
