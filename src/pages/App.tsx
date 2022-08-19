import React, { useState } from "react";
import Form from '../components/Form';
import List from "../components/List";
import style from './App.module.scss';
import Cronometer from '../components/Cronometer';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selected, setSelected] = useState<ITarefa>();

  function selectTask(selectedTask: ITarefa) {
    setSelected(selectedTask);
    setTarefas(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  const finishTask = () => {
    if (selected) {
      setSelected(undefined);
      setTarefas(oldTasks => oldTasks.map((task: ITarefa) => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }
      ))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List
        tarefas={tarefas}
        selectTask={selectTask}
      />
      <Cronometer selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
