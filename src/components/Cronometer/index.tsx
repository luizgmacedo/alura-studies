import Button from '../Button/index';
import Clock from './Clock/index';
import style from "./Cronometer.module.scss";
import { timeToSeconds } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import { useEffect, useState } from 'react';

interface Props {
  selected: ITarefa | undefined,
  finishTask: () => void
}

const Cronometer = ({ selected, finishTask }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.tempo) setTime(timeToSeconds(String(selected.tempo)));
  }, [selected]);

  const regressive = (counter: number = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar</Button>
    </div>
  )
}

export default Cronometer;