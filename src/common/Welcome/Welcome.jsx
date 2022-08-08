import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Welcome() {
  const [userName,setUserName] = useState('');
  useEffect(() => {
     getUserInfo();
  },[]);
  const getUserInfo = () => {
    setUserName(sessionStorage.getItem('userName'));
  }
  return (
    <div>
     <span>欢迎{userName}老师</span>
    </div>
  )
}

