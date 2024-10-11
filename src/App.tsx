import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/testComponent';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './models/Todo';
import 'semantic-ui-css/semantic.min.css'


const App: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [todos, setTodos] = useState<Todo[]>([])

  function getPerson() {
    if (!name) {
      setName('Osián');
    }
    if (name) {
      setSurname('Jorge Lezcano');
    }
    if (name && surname){
      setSurname('')
    }
     
  }

  const AddTodo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos,{id:Math.random().toString(), text:text}]) // Use spread operator to create a new array
    
  }

  const deleteTodo = (id: string) => {
      setTodos(
        prevTodos => {
          return prevTodos.filter((todos)=>todos.id !== id)
        }
      )
  }
 
  return (
    <>
     
      <Hello name={name} surname={surname} getPerson={getPerson} />
      <NewTodo onAddTodo={AddTodo}/>
      <TodoList items= {todos} onDeleteTodo={deleteTodo} />
    </>
  );
};

export default App;
