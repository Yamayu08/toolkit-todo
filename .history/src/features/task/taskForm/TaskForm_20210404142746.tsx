import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import styles from './TaskForm.module.scss';
import { register } from '../../../serviceWorker';

type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const handleCreate = (data: Inputs) => {
    console.log(data);
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
              inputRef={register}
              className={styles.text_field}
            />
          )}
        />
      </form>
    </div>
  );
};

export default TaskForm;
