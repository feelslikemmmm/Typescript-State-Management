import * as React from 'react';
import { Button, Input, Flex, Checkbox, Heading } from '@chakra-ui/react';
import {
  SetTodosType,
  TodosType,
  toggleTodo,
  updateTodo,
  removeTodo,
} from '../store';
function TodoListItems({
  todos,
  todoSet,
}: {
  todos: TodosType;
  todoSet: SetTodosType;
}) {
  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => todoSet(toggleTodo(todos, todo.id))} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(e) =>
              todoSet(updateTodo(todos, todo.id, e.target.value))
            }
          />
          <Button onClick={() => todoSet(removeTodo(todos, todo.id))}>
            Delete
          </Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList({
  todos,
  todoSet,
}: {
  todos: TodosType;
  todoSet: SetTodosType;
}) {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems todos={todos} todoSet={todoSet} />
    </>
  );
}

export default TodoList;
