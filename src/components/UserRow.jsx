import style from './UserRow.module.css';

const UserRow = ({ name, active, role }) => {
  const activeClassName = active ? style.active : style.inactive;

  const ROLE_STYLES = {
    teacher: ['Profesor', style.teacher],
    student: ['Alumno', style.student],
    other: ['Otro', style.other],
  };

  const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.other;

  return (
    <div className={style.userRow}>
      <div className={style.name}>
        <span>{name}</span>
      </div>
      <div className={style.status}>
        <span className={activeClassName}>
          {active ? 'Activo' : 'Inactivo'}
        </span>
      </div>
      <div className={style.role}>
        <span className={roleClassName}>{roleName}</span>
      </div>
    </div>
  );
};

export default UserRow;
