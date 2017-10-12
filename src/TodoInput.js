/**
 * Created by lull on 2017/10/11.
 */
import React, { Component } from 'react';
export default class TodoInput extends Component{
    render(){
        return <input type="text" defaultValue={this.props.content} onKeyPress={this.onSubmit.bind(this)}/>
    }
    onSubmit(e){
         if(e.key==="Enter"){
            this.props.onSubmit(e)
         }
     }
}