import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom';
import {nameLogin,reqSmsLogin,reqSendCode} from '../../api/index'
import './login.css';
import PubSub from 'pubsub-js';
import 'antd-mobile/dist/antd-mobile.css';
import { Modal } from 'antd-mobile';
const alert = Modal.alert;

const showAlert = (msg) => {
    const alertInstance = alert(' ', msg, [
        { text: '取消', onPress: () => console.log('取消'), style: 'default' },
        { text: '确认', onPress: () => console.log('确认') },
    ]);

};



export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            selected:true,
            name:'',
            password:'',
            phone:'',
            varify:'',
            code:'',
            computeTime:0


        }
    };
    componentDidMount(){
        if(this.props.match.path=='/login'){
            PubSub.publish('show',this.state.show)
        };


    };
    handleselect=()=>{
        this.setState({
            selected:!this.state.selected
        })
    };
    change=()=>{
        this.setState({
            name:this.refs.name.value,
            password:this.refs.password.value,
            phone:this.refs.phone.value,
            varify:this.refs.varify.value,
            code:this.refs.code.value,
        });


    };
    login=(event)=>{
        event.preventDefault()

        //前端验证
        const {name,password,phone,varify,code}=this.state;
        if(this.state.selected){
            if(!name){
                showAlert('用户名不能为空')
            }else if(!/^1\d{10}$/.test(name)){
                showAlert('用户名不正确')
            } else if (!password){
                showAlert('密码不能为空')
            }else{
                nameLogin({name,pwd:password}).then((response)=>{
                    console.log(response)
                    if(response.code===1){
                        showAlert(response.msg)

                    }else if(response.code===0){
                        showAlert('登录成功')}
                })
            }

        }else{
            if(!phone){
                showAlert('手机号码不能为空')
            }else if(!/^1\d{10}$/.test(phone)){
                showAlert('用户名不正确')
            } else if (!varify){
                showAlert('图片验证码不能为空')
            }else if (!code){
                showAlert('验证码不能为空')
            }else{
              reqSmsLogin({phone,code,captcha:varify}).then((response)=>{
                  if(response.code===1){
                      showAlert(response.msg)
                  }else if(response.code===0){
                      showAlert('登录成功')
                  }
              })
            }


        }

    };
//改变验证码
    changeVarify=(event)=>{
        event.target.src='http://localhost:3000/captcha?time='+Date.now()

    };
    send=(event)=>{

        if(/^1\d{10}$/.test(this.state.phone)){
            this.setState({
                computeTime:30
            });
            const timer=setInterval(()=>{

                var time=this.state.computeTime-1;
                this.setState({
                    computeTime:time
                });
                if(this.state.computeTime===0){
                    clearInterval(timer)
                }
            },1000)
        };
        //发送验证码
        reqSendCode(this.state.phone).then((response)=>{
            if(response.code===1) {
                showAlert(response.msg)
                // 停止计时
                clearInterval(this.timer)
                this.state.computeTime = 0
            }

        })
        event.preventDefault();



    };

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
                        <ul id="tags4" className="clearfix login_style" onClick={this.handleselect}>
                            <li className="selectTag4">
                            <a href="javascript:void(0)" >普通登录</a>
                            <i className={this.state.selected?'':'slected'}></i>
                        </li>
                        <li className="">
                        <a href="javascript:void(0)" >手机动态密码登录</a>
                        <i className={this.state.selected?'slected':''}></i>
                    </li>
                </ul>
            </div>
    </header>
        <div className="bgfff">
            <div className="mformBox">
                <div id="Content">
                    <form>
                        <ul id="mform" className={this.state.selected?' ':'slected'}>
                            <li>
                                <span className="mNameIco iconfont icon-yonghu"></span>
                                <input type="text" placeholder="手机号/邮箱/用户名" className="text" name="name" id="username" maxlength="11" ref='name' onChange={this.change}/></li>
                            <li>
                                <span className="mpasswordIco iconfont icon-mima"></span>
                                <input type="password" placeholder="输入密码" className="text" name="password" id="password" maxlength="8" ref='password' onChange={this.change}/></li>
                        </ul>
                        <ul id="mform" className={this.state.selected?'slected':' '}>
                            <li>
                                <span className="mNumIco iconfont icon-phone"></span>
                                <input type="text" placeholder="已注册的手机号" className="dttext" name="phone" id="bdphone" maxlength="11" ref='phone' onChange={this.change}/></li>
                            <li>
                                <span className="mpasswordIco iconfont icon-mima"></span>
                                <input type="text" placeholder="请输入图片内容" className="dttext" name="varify" id="varify" ref='varify' onChange={this.change}/>
                                  <span style={{display:"block",position: "absolute",top:"5px",right:"0px"}}>
                                    <img src="http://localhost:3000/captcha" name="varify" className="codevar" align="absbottom" onClick={this.changeVarify}/>
                                  </span>
                            </li>
                            <li>
                                <span className="mpasswordIco iconfont icon-mima"></span>
                                <input type="text" className="dttext" placeholder="动态密码" name="code" id="code" ref='code' onChange={this.change}/>
                                    <button className="get_phonepass afff ft12"
                                       id="scodebtn" onClick={this.send}>{this.state.computeTime?`已发送(${this.state.computeTime}s)` : '获取验证码'}</button>

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
            <div className="ftc pt5 loginbtn" id="Content0_btn" style={{display: 'block'}} onClick={this.login}>
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
