import React from 'react';

interface TodoListProps {
    items: {id: string, text: string}[]
}


const TodoList: React.FC<TodoListProps> = (props) => {
  

  return (
    <>
      <ul>
        {props.items.map((todos) => (
          <li key={todos.id}>{todos.text}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
