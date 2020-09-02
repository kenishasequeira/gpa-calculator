import React from 'react';
import './App.css';
import AddClassButton from'./AddClassButton'
import {Helmet} from 'react-helmet';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Helmet>
               <style>{'body { background-color: bisque; }'}</style>
        </Helmet>
        <br/><br/>
        <center className = "Headings"><h1><b><u>RU GPA Calculator</u></b></h1></center>
        <br/>
        <AddClassButton/>
      </div>
    );
  }  
}

