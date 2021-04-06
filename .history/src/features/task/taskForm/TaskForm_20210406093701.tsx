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

type PropsType = {
  edit?: boolean;
};

const TaskForm: React.FC<PropsType> = ({ edit }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit, setValue } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    setValue('taskTitle', '');
  };
  const handleEdit = (data: Inputs) => {
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
      >
        <Controller
          control={control}
          defaultValue={edit ? 'defaultValue' : ''}
          name="taskTitle"
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label={edit ? 'Edit Task' : 'New Task'}
              variant="outlined"
              className={styles.text_field}
              inputRef={register}
            />
          )}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button className={styles.submit_button} type="submit">
              Submit
            </button>
            <button className={styles.cancel_button} type="button">
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;
