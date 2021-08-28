import '../App.js';
import styled from 'styled-components';
import React from "react";

export default function TodoItem ({ todo, handleDeleteTodo, handleToggleClick }) {
  return(
    <Li className="list-group-item" data-todo-id={todo.id}>
      <FormCheck>
        <span className="form-check-item" onClick={() => {
          handleToggleClick(todo.id)
        }}>
          <input type="hidden" className="done" name="done" />
          <button className="form-check-checkbox btn btn-outline-secondary" type="checkbox" id={todo.id} isDone={todo.isDone}>{todo.isDone ? '已完成':'未完成'}</button>
          <Label className="form-check-label" htmlFor={todo.id} isDone={todo.isDone} >{todo.content}</Label>
        </span>
        <Delete title="刪除！" onClick={() => {
          handleDeleteTodo(todo.id)
        }}>✘</Delete>
      </FormCheck>
    </Li>
  )
}

const Label = styled.label`
  margin-left: 30px;
  ${props => props.isDone && `
    color: grey;
    text-decoration: line-through;
  `}

`;

const FormCheck = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Delete = styled.span`
  cursor: pointer;
`;

const Li = styled.li`
  &:hover {
    background: #F1CFCD;
  }
`;
