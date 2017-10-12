/**
 * Created by lull on 2017/10/11.
 */
import React, { Component } from 'react';
export default class TodoInput extends Component{
    render(){
        return <input type="text" defaultValue={this.props.content} onkeypress={this.submit}/>
    }
     submit(e){
         if(e.key==="Enter"){
            console.log("用户按回车了")
         }
     }
}