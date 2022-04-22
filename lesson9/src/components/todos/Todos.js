import React from "react";
import MyList from "./List";
import Form from "./Form";
import useTodos from "./useTodos";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState} from 'react';

export default function Todos() {
  const {todos, changeStatus, deleteItem, addItem, searchItems} = useTodos();
  const [search, setSearch ] = useState('');
  function onChangeHandle(e) {
    setSearch(e.target.value);
    searchItems(e.target.value);
  }
  return (
    <Box sx={{p: 2, mt: 1.5}}>
      <Grid container spacing={2}>
        <Grid item sm={5} md={4}>
          <Form onAdd={addItem} />
        </Grid>
        <Grid item sm={7} md={8}>
          <input type="text" value={search} onChange={onChangeHandle} />
          <MyList todos={todos} onChangeStatus={changeStatus} onDelete={deleteItem} />
        </Grid>
      </Grid>
    </Box>
  );
}
