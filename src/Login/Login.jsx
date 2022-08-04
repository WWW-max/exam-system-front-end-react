import React, { useState } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './Login.css';
import axios from 'axios';

export default function Login() {
  const [userName,setUserName] = useState('');
  const [passWord,setPassWord] = useState('');
  return (
    <div className='container'>
    <div className='login'>
     <div className='header'>《数据结构》在线考试系统</div>
     <div className='main'>
         账号：<Input style={{width:'250px'}} type='text' value={username} onChange={this.usernameChange}/><br/><br/><br/>
         密码：<Input style={{width:'250px'}}type='password' value={password} onChange={this.passwordChange}/><br/>
     </div>
     <div className='footer'>
         <Button type="primary" onClick={signIn()}>登录</Button>&nbsp;&nbsp;&nbsp;  
         <Button type="primary" onClick={reset()}>重置</Button>  
     </div>
   </div>
  </div>
  )
}
