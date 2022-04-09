import style from './UserRow.module.css';

const UserRow = ({ name, active, role }) => {
  return (
    <div className={style.userRow}>
      <span className={style.name}>{name}</span>
      <span className={style.active}>{active}</span>
      <span className={style.role}>{role}</span>
    </div>
  );
};

export default UserRow;
