import React, { useState } from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './Login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Login() {

  const [userName,setUserName] = useState('');
  const [passWord,setPassWord] = useState('');
  const [loginFailed,setLoginFailed] = useState(false);
  const Navigate = useNavigate();

  const signIn = () => {
    console.log('登录');
    let param = {
        userName,
        passWord,
    }
    axios.post('/api/login ',param).then(function(response){
      console.log('用户名密码正确');
      Navigate('/welcome');// 登录成功，跳转到欢迎界面
    }).catch(function(error){
        console.log('用户名或密码错误');
        setLoginFailed(true);
    })
  }
  const reset = () => {
    console.log('重置');
    setUserName('');
    setPassWord('');
  }
  const usernameChange = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  }
  const passwordChange = (e) => {
    console.log(e.target.value);
    setPassWord(e.target.value);
  }
  return (
    <div className='container'>
    <div className='login'>
     <div className='header'>《数据结构》在线考试系统</div>
     <div className='main'>
         账号：<Input style={{width:'250px'}} type='text' value={userName} onChange={usernameChange}/><br/><br/><br/>
         密码：<Input style={{width:'250px'}}type='password' value={passWord} onChange={passwordChange}/><br/>
     </div>
     {loginFailed && <div className='red'>账号或密码错误</div>}
     <div className='footer'>
         <Button type="primary" onClick={signIn}>登录</Button>&nbsp;&nbsp;&nbsp;  
         <Button type="primary" onClick={reset}>重置</Button>  
     </div>
   </div>
  </div>
  )
}

