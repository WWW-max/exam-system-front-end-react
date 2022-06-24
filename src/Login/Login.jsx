import React, { Component } from 'react';
import { Input, Button } from 'antd';
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
        console.log(error);
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
      <div>
        账号：<Input type='text' value={username} onChange={this.usernameChange}/><br/><br/><br/>
        密码：<Input type='password' value={password} onChange={this.passwordChange}/><br/>
        <Button type="primary" onClick={this.signIn}>登录</Button>&nbsp;  
        <Button type="primary" onClick={this.reset}>重置</Button>  
      </div>
    )
  }
}
