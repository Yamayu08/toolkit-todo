import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { createTask } from '../taskSlice';
import styles from './TaskForm.module.scss';
import { register } from '../../../serviceWorker';

type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, setValue } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    setValue('taskTitle', '');
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
        <Controller
          control={control}
          defaultValue=""
          name="taskTitle"
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label="New Task"
              variant="outlined"
              className={styles.text_field}
              inputRef={register}
            />
          )}
        />
      </form>
    </div>
  );
};

export default TaskForm;
