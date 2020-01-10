import React from 'react';
//import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';


import Login from './component/Login';

import Test from './component/Test';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        {/* <Route exact path="/" render={props => <Home {...props}/>}/> */}
        {/* <Route  path="/Form" render={props => <Form {...props}/>}/> */}
        <Route  path="/login" render={props => <Login {...props}/>}/>

        <Route  path="/test" render={props => <Test {...props}/>}/>

        {/* <Route  path="/edit/:company_id" render={props=> < Edit {...props}/>} /> */}
         
        </BrowserRouter>
    </div>
  );
}

export default App;
