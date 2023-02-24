import React, { Component } from 'react';
import Menu from './tasks/PageRegister/Menu'
import HomePage from './tasks/Lease/Homepage';
import Register from './tasks/PageRegister/Register';
import PageNow from './tasks/RenderProduct/PageNow';
function App() {
  /* 
  class thì dùng state quản lý trạng thái 
  funcion : dùng useState
   */
  return (
    <>
      <div className='app'>

   
   <PageNow/>
      </div>
    </>
  );
}

export default App;
