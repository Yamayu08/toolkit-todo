import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import styles from './TaskForm.module.scss';
import { register } from '../../../serviceWorker';

type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset, setValue, control } = useForm();
  const handleCreate = (data: Inputs) => {
    console.log(data);
    reset();
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
              {...register('test', {
                required: true,
              })}
              id="outlined-basic"
              label="New Task"
              variant="outlined"
              className={styles.text_field}
            />
          )}
        />
      </form>
    </div>
  );
};

export default TaskForm;
