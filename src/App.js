import './App.css';
import React, { useState, useRef } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import {
  HashRouter as Router,
  //NavLink,
  Route,
} from "react-router-dom";
import TodoItem from './components/TodoItem';
import Login from './pages/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Register from './pages/Register';
import MyLists from './pages/My-lists';
import Users from './pages/Users';

//import { HandleAddTodo } from './components.js';


function App() {
  const [todos, setTodos] = useState([
    {
      content: '點擊叉叉可刪除該項目！',
      id: 2,
      isDone: true
    },
    {
      content: '雙擊文字可進行編輯，按下 enter 後送出編輯內容！',
      id: 1,
      isDone: false
    }
  ]);
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('all');
  
  
  const id = useRef(3)
  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([{
      content: value,
      id: id.current,
      isDone: false
    }, ...todos])
    setValue('')
    id.current ++
  }

  const handleInputChange = (e) => {
    setValue(e.target.value) //取得輸入的 todo
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleClick = (id) => {
    setTodos(
      todos.map(todo => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }

  const handleDeleteIsDone = () => setTodos(todos.filter(todo => todo.isDone !== true))

  const handleDeleteAll = () => setTodos([])

  const handleShowAll = () => {
    setFilter("all")
  }

  const handleShowIsDone = () => {
    setFilter("isDone")
  }

  const handleShowNotDone = () => {
    setFilter("notDone")
  }

  function ShowTodo (todos, filter) {
    if(filter === "all") {
      return todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleClick={handleToggleClick}/>
      ))
    }
    if(filter === "isDone") {
      return todos.filter(todo => todo.isDone)
      .map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleClick={handleToggleClick}/>
      ))
    }
    if(filter === "notDone") {
      return todos.filter((todo) => !todo.isDone)
      .map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleClick={handleToggleClick}/>
      ))
    }
  }

  

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <div className="container">
        <Sidebar />
        <Route exact path="/">
          <form>
            <div className="form-group">
              <Title></Title>
              <input type="text" className="form-control input-content" placeholder="Add something to do here ?ヽ(✿ﾟ▽ﾟ)ノ" value={value} onChange={handleInputChange}/>
            </div>
            <Buttons>
              <Button type="submit" className="btn btn-primary submit" onClick={handleAddTodo}>新增</Button>
            </Buttons>
            <Ul className="nav nav-tabs">
              <Li className="nav-item">
                <TagButton type="button" className="nav-link li-all" onClick={handleShowAll}>全部</TagButton>
              </Li>
              <Li className="nav-item">
                <TagButton type="button" className="nav-link li-done" onClick={handleShowIsDone}>已完成</TagButton>
              </Li>
              <Li className="nav-item">
                <TagButton type="button" className="nav-link li-notyet" onClick={handleShowNotDone}>未完成</TagButton>
              </Li>
            </Ul>
          </form>
          <ul className="list-group">
            {ShowTodo(todos, filter)}
          </ul>
          <Count />
          <Clear>
            <button type="button" className="btn btn-info" onClick={handleDeleteIsDone}>清除已完成項目</button>
            <button type="button" className="btn btn-danger" onClick={handleDeleteAll}>清空全部</button>
          </Clear>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/myLists">
          <MyLists />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        
      </div>
    </Router>
    
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #faeceb;
  }
`;

const Title = styled.h3`
  color: #545871;
  margin: 15px auto;
`;

const Buttons = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  & + & {
    margin-left: 10px;
  }
`;

const TagButton = styled.button`
  display: inline-block;
`;

const Clear = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

const Count = styled.div`
  text-align: center;
  margin-left: px;
  margin-top: 15px;
`;

const Ul = styled.ul`
  display: inline;
`;

const Li = styled.li`
  display: inline;
  &:hover {
    background: #F1CFCD;
  }
  & button:hover {
    background: grey;
  }
`;

export default App;