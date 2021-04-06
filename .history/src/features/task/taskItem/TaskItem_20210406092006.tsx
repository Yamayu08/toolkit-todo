import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import TaskForm from '../taskForm/TaskForm';
import styles from './TaskItem.module.scss';

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
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
          <EditIcon className={styles.Icon} onClick={handleOpen} />
        </button>
        <button
          onClick={() => console.log(`delete ${task.id}`)}
          className={styles.delete_button}
        >
          <DeleteIcon className={styles.Icon} />
        </button>
      </div>
      <Modal open={open} onClose={handleClose} className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Edit</div>
          <TaskForm />
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;
