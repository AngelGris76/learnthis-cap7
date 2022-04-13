import UserStatus from './UserStatus';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import Button from './Button';

const UserRow = ({ id, name, active, role, setActiveState }) => {
  return (
    <div className={style.userRow}>
      <div className={style.name}>
        <span>{name}</span>
      </div>
      <div className={style.status}>
        <UserStatus active={active} />
      </div>
      <div className={style.role}>
        <UserRole role={role} />
      </div>
      <div className={style.action}>
        <Button
          active={active}
          setActive={() => {
            setActiveState(id);
          }}
        />
      </div>
    </div>
  );
};

export default UserRow;
