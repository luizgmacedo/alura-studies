import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';
import { ITarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Form = ({ setTarefas }: Props) => {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  const addTask = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTarefas(oldTasks =>
      [
        ...oldTasks,
        {
          tarefa,
          tempo,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    );
    setTarefa("");
    setTempo("00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={e => setTarefa(e.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={e => setTempo(e.target.value)}
          id="tempo"
          min="00:00:00" max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  )
}

export default Form;