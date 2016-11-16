/**
 * Created by Doming on 2016/11/7.
 */
import React from "react";
import { hashHistory } from 'react-router'
import LogoImg from './assets/logo.jpg'


export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <img src={LogoImg} /><br/>
        <a onClick={()=>hashHistory.push("/")}>Index</a>
        <a onClick={()=>hashHistory.push("/about")}>About</a>
        {this.props.children}
      </div>
    )
  }
}
