import React from "react";
import UserDetailSelected from "./UserDetailSelected";
const List = (props) => {
  let users = props.usersSelected.map((user, i) => {
    return (
      <UserDetailSelected
        key={i}
        uid={user.login.uuid}
        name={user.name.first}
        last={user.name.last}
        src={user.picture.thumbnail}
        removeUser={props.handleClick}
      />
    );
  });

  return (
    <div>
      Users selected: {users.length} 
      {users}
    </div>
  );
};
export default List;
