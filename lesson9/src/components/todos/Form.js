import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

export default function Form({onAdd}) {
  const [newTitle, setNewTitle] = useState({title: ''});
  function onChangeHandler(e) {
    setNewTitle({title: e.target.value})
  }
  function onAddTodo(e) {
    e.preventDefault();
    onAdd(newTitle.title);
  }
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}} component="form" onSubmit={onAddTodo}>
      <TextField id="outlined-basic" label="Title" variant="outlined" value={newTitle.title} onChange={onChangeHandler}/>
      <Button sx={{ml: 1}} type="submit" variant="contained" endIcon={<AddIcon />}>
        Add
      </Button>
      {/* <input type="text" value={newTitle.title} onChange={onChangeHandler} /> */}
      {/* <button>Add</button> */}
    </Box>
  )
}
