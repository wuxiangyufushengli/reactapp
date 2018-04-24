import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import './login.css'



export default class Login extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div className="login_bg">
                        <div className="rela ftc ">
                            <a href="javascript:void(0)"  className="aback page-top iconfont icon-jiantou2"></a>
                            <div className="zfont ft16 block"><a href="https://wap.epet.com/register.html" className="afff">注册</a></div>
                        </div>
                        <div className="mlogo">
                            <div style={{height: '50px'}}></div>
                        </div>

                    </div>
                    <div className="es_por4">
                        <ul id="tags4" className="clearfix login_style">
                            <li className="selectTag4">
                            <a href="javascript:void(0)" >普通登录</a>
                            <i></i>
                        </li>
                        <li className="">
                        <a href="javascript:void(0)" >手机动态密码登录</a>
                        <i></i>
                    </li>
                </ul>
            </div>
    </header>
        <div className="bgfff">
            <div className="mformBox">
                <div id="Content">
                    <form>
                        <ul className="mform" v-if="loginWay">
                            <li>
                                <span className="mNameIco iconfont icon-yonghu"></span>
                                <input type="text" placeholder="手机号/邮箱/用户名" className="text" name="name" id="username" maxlength="11" v-model="name" /></li>
                            <li>
                                <span className="mpasswordIco iconfont icon-mima"></span>
                                <input type="password" placeholder="输入密码" className="text" name="password" id="password" maxlength="8" v-model="pwd" /></li>
                        </ul>
                        <ul className="mform" v-if="!loginWay">
                            <li>
                                <span className="mNumIco iconfont icon-phone"></span>
                                <input type="text" placeholder="已注册的手机号" className="dttext" name="phone" id="bdphone" maxlength="11" v-model="phone"/></li>
                            <li>
                                <span className="mpasswordIco iconfont icon-mima"></span>
                                <input type="text" placeholder="请输入图片内容" className="dttext" name="varify" id="varify"  v-model="captcha"/>
                  <span style={{display:"block",position: "absolute",top:"5px",right:"0px"}}>
                    <img src="http://localhost:3000/captcha" name="varify" className="codevar" align="absbottom" />
                  </span>
                            </li>
                            <li>
                                <span className="mpasswordIco iconfont icon-mima"></span>
                                <input type="text" className="dttext" placeholder="动态密码" name="code" id="code" v-model="code" />
                                    <button className="get_phonepass afff ft12"
                                       id="scodebtn">已发送</button>

                            </li>
                        </ul>
                        <div className="forget_pass"></div>
                    </form>

                </div>
            </div>

            <div  style={{paddingLeft: '2em',paddingRight: '2em'}}>
                <a href="javascript;;" className="btn-register ft14 forget">忘记密码？</a>
                <div className="clear"></div>
            </div>
            <div className="picture-yz"></div>
            <div className="ftc pt5 loginbtn" id="Content0_btn" style={{display: 'block'}}>
            <a href="javascript:void(0)" className="btn-login afff">登 录</a>
        </div>


        <div className="other-login">
            <div className="ftc ft16 mt c666 partners">
                <b>合作网站登录</b></div>
            <ul className="uList1 clearfix">
                <li>
                    <a href="https://passport.epet.com/Oauth.html?type=4&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
                        <img src="//static.epetbar.com/mpet/images/login/login_ico4.png"/>
                    </a>
                </li>
                <li>
                    <a href="https://passport.epet.com/Oauth.html?type=2&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
                        <img src="//static.epetbar.com/mpet/images/login/login_ico2.png"/>
                    </a>
                </li>
            </ul>
        </div>


    </div>
       
    </div>

        )


    }


}
