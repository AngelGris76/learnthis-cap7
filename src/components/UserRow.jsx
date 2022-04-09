import UserStatus from './UserStatus';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import Button from './Button';
import { useState } from 'react';

const UserRow = ({ name, active, role }) => {
  const [activeState, setActiveState] = useState(active);

  return (
    <div className={style.userRow}>
      <div className={style.name}>
        <span>{name}</span>
      </div>
      <div className={style.status}>
        <UserStatus active={activeState} />
      </div>
      <div className={style.role}>
        <UserRole role={role} />
      </div>
      <div className={style.action}>
        <Button
          active={activeState}
          onClick={() => {
            setActiveState(!activeState);
          }}
        />
      </div>
    </div>
  );
};

export default UserRow;
