import * as React from 'react';
import { Button, Input, Grid } from '@chakra-ui/react';
import { SetTodosType, addTodo, TodosType } from '../store';
function TodoAdd({
  todos,
  todoSet,
}: {
  todos: TodosType;
  todoSet: SetTodosType;
}) {
  const [newTodo, newTodoSet] = React.useState('');
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => newTodoSet(e.target.value)}
      />
      <Button onClick={() => todoSet(addTodo(todos, newTodo))}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
