import style from "./Clock.module.scss";

interface Props {
  time: number | undefined
}

const Clock = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteDozen, minuteUnit] = String(minutes).padStart(2, '0');
  const [secondDozen, secondUnit] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.relogioNumero}>{minuteDozen}</span>
      <span className={style.relogioNumero}>{minuteUnit}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondDozen}</span>
      <span className={style.relogioNumero}>{secondUnit}</span>
    </>
  )
}

export default Clock;