import { ITarefa } from '../../../types/tarefa';
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selectTask: (selectedTask: ITarefa) => void
}

const Item = (
  {
    tarefa,
    tempo,
    selected,
    completed,
    id,
    selectTask
  }: Props): JSX.Element => {
  return (
    <li
      className={`
        ${style.item} 
        ${selected ? style.itemSelecionado : ''} 
        ${completed ? style.itemCompletado : ''}
        `}
      onClick={() => !completed && selectTask({
        tarefa,
        tempo,
        selected,
        completed,
        id
      })}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completed && <span className={style.concluido} aria-label="tarefa concluída"></span>}
    </li>
  );
}

export default Item;