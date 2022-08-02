import React, { Component } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './Login.css';
import axios from 'axios';

export default class Login extends Component {
  state = {
    username:'', // 用户名
    password:'', // 密码
  }
  signIn = () => {
    console.log('登录');
    const {username, password} = this.state;
    let param = {
        username,
        password,
    }
    axios.post('/api/login ',param).then(function(response){
        console.log(response); 
    }).catch(function(error){
        console.log('用户名或密码错误');
    })
  }
  reset = () => {
    console.log('重置');
    this.setState({
        username:'',
        password:'',
    })
  }
  usernameChange = (e) => {
    console.log(e.target.value);
     this.setState({
        username: e.target.value
     })
  }
  passwordChange = (e) => {
    console.log(e.target.value);
    this.setState({
        password: e.target.value
    })
  }
  render() {
    const {username, password} = this.state;
    return (
     <div className='container'>
       <div className='login'>
        <div className='header'>《数据结构》在线考试系统</div>
        <div className='main'>
            账号：<Input style={{width:'250px'}} type='text' value={username} onChange={this.usernameChange}/><br/><br/><br/>
            密码：<Input style={{width:'250px'}}type='password' value={password} onChange={this.passwordChange}/><br/>
        </div>
        <div className='footer'>
            <Button type="primary" onClick={this.signIn}>登录</Button>&nbsp;&nbsp;&nbsp;  
            <Button type="primary" onClick={this.reset}>重置</Button>  
        </div>
      </div>
     </div>
    )
  }
}
