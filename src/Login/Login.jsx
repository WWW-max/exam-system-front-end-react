import React, { Component } from 'react';
import { Input, Button } from 'antd';

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        账号：<Input/><br/><br/><br/>
        密码：<Input/><br/>
        <Button type="primary">登录</Button>&nbsp;  
        <Button type="primary">重置</Button>  
      </div>
    )
  }
}
