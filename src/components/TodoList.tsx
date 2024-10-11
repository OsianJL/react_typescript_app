import React from 'react';
import { ListItem, Button, ListContent, List } from 'semantic-ui-react'

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <>
      <List>
        {props.items.map((todos) => (
          <ListItem>
          <ListContent key={todos.id}>
            <Button onClick={props.onDeleteTodo.bind(null, todos.id)}>x</Button>
            {todos.text}
          </ListContent>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
