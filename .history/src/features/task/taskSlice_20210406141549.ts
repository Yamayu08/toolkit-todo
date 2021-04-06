import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TaskState {
  idCount: number;
  tasks: { id: number; title: string; completed: boolean }[];
  selectedTask: { id: number; title: string; completed: boolean };
  isModalOpen: boolean;
}

const initialState: TaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: 'Task A', completed: false }],
  selectedTask: { id: 0, title: '', completed: false },
  isModalOpen: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // taskの作成
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },

    // どのタスクを選択しているかの管理
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },

    // taskの編集
    editTask: (state, action) => {
      state = action.payload;
    },

    // Modalを開くか閉じるかのフラグ管理
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const {
  createTask,
  selectTask,
  editTask,
  handleModalOpen,
} = taskSlice.actions;

export const selectTasks = (state: RootState): TaskState['tasks'] =>
  state.task.tasks;
export const selectIsModalOpen = (state: RootState): TaskState['isModalOpen'] =>
  state.task.isModalOpen;
export const selectSelectedTask = (
  state: RootState
): TaskState['selectedTask'] => state.task.selectedTask;

export default taskSlice.reducer;
