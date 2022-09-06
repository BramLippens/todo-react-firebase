import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            item: doc.data(),
          }))
        );
      });
  }, [input]);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };
  console.log(todos);
  return (
    <div className="App">
      <h1>Todo React Firebase</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)} />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((it) => (
          <Todo key={it.id} arr={it} />
        ))}
      </ul>
    </div>
  );
}

export default App;
