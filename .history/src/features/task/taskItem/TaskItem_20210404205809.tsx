import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './TaskItem.module.scss';
import TaskForm from '../taskForm/TaskForm';

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
        <div className={styles.right_item}>
          <Checkbox
            checked={task.completed}
            onChange={() => console.log(`check ${task.id}`)}
            className={styles.checkbox}
          />
          <button
            onClick={() => console.log(`edit ${task.id}`)}
            className={styles.edit_button}
          >
            <EditIcon className={styles.Icon} />
          </button>
          <button
            onClick={() => console.log(`delete ${task.id}`)}
            className={styles.delete_button}
          >
            <DeleteIcon className={styles.Icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
