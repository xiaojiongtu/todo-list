import React, { Component } from 'react';
import 'normalize.css'
import './reset.css'
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from  './TodoItem'
class App extends Component {
     // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        newTodo:"",
        todoList:[
            {id:1,title:"第一个待办"},
            {id:2,title:"第二个待办"}
       ]
      };
    }
    render() {

      let todos=this.state.todoList.map((item,index)=>{
          return(
              <li>
                  <TodoItem todo={item}/>
              </li>
          )
      });
    return (
      <div className="App">
          <h1>我的代办</h1>
          <div className="inputWrapper">
              <TodoInput content={this.state.newTodo} onSubmit={this.addTodo} />
          </div>
          <ol>
              {todos}
          </ol>
      </div>
    );
  }
    addTodo(){
        console.log("我得添加一个todo了")
    }
}

export default App;
