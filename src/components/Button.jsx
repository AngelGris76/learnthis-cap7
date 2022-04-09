import style from './Button.module.css';

const Button = ({ active, onClick }) => {
  const buttonLabel = active ? 'Desactivar' : 'Activar';

  return (
    <button type='button' className={style.button} onClick={onClick}>
      {buttonLabel}
    </button>
  );
};

export default Button;
