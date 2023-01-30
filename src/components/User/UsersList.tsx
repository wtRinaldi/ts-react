import React from "react";

interface Props {
  className?: string;
  users: Array<Object>;
}

const UsersList = ({ className = "", users }: Props) => {
  return (
    <ul className={className}>
      {users.map((user: Object) => (
        <li key={user.id}>
          {user.userName} - Age: {user.userAge}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
