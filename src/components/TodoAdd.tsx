import * as React from 'react';
import { Button, Input, Grid } from '@chakra-ui/react';
import { SetTodosType } from '../store';
function TodoAdd({ todoSet }: { todoSet: SetTodosType }) {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo" />
      <Button>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
