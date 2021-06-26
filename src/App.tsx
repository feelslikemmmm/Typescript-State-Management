import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import TopBar from './components/TopBar';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import { useTodos } from './store';

export function App() {
  const [todos, todoSet] = useTodos([]);
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar todoSet={todoSet} />
        <TodoList todos={todos} todoSet={todoSet} />
        <TodoAdd todos={todos} todoSet={todoSet} />
      </Box>
    </ChakraProvider>
  );
}
