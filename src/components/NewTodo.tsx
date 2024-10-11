import React, {useRef} from 'react';
import {Form, FormField, Button } from 'semantic-ui-react'

interface NewTodoProps {
    onAddTodo: (text: string) => void; 
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = inputRef.current!.value; 
        props.onAddTodo(enteredText)
    }
  return(
  <Form onSubmit={submitHandler}>
    <FormField>
      <label htmlFor="todo-text">Title</label>
      <input type="text" id="todo-text" ref={inputRef}/>
    </FormField>
    <Button type="submit">Add</Button>
  </Form>
  );
};

export default NewTodo;
