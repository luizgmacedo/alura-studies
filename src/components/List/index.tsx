import style from './List.module.scss';
import Item from './Item/index';
import { ITarefa } from '../../types/tarefa';

interface Props {
  tarefas: ITarefa[],
  selectTask: (selectedTask: ITarefa) => void
}

const List = ({ tarefas, selectTask }: Props): JSX.Element => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selectTask={selectTask}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside >
  )
}

export default List;