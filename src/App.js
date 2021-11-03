import React, {useState, useEffect} from 'react';
import { VStack, IconButton, Heading, useColorMode} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {

 const [todos, setTodos] = useState(
   () => JSON.parse(localStorage.getItem('todos')) || []
 )

 useEffect(()=>{
   localStorage.setItem('todos', JSON.stringify(todos));
 },[todos])

 function deleteTodo(id){
   const newTodos = todos.filter (todo => {
     return todo.id !== id
   })

   setTodos(newTodos);
 }

 function addtodo(todo){
  setTodos([...todos, todo]);
 }

 const {colorMode, toggleColorMode} = useColorMode();

  return (
    <VStack p={4}>
      <IconButton 
      icon={ colorMode==='light' ? <FaSun/> : <FaMoon/> } 
      onClick={toggleColorMode} 
      isRound='true' size='lg' 
      alignSelf='flex-end'/>

      <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
        bgClip='text'
      >
        Todo Application
      </Heading>

      <TodoList todos ={todos} deleteTodo={deleteTodo}/>
      <AddTodo addtodo={addtodo}/>
    </VStack>
    
  );
}

export default App;
