import { db } from '../firebase';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

const Todo = ({ arr }) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={arr.item.todo} secondary="Dummy deadline" />
      </ListItem>
      <DeleteForeverIcon onClick={(event) => db.collection('todos').doc(arr.id).delete()} />
    </List>
  );
};

export default Todo;
