import React from "react";
import UserDetail from "./UserDetail";
const List = (props) => {
  let users = props.users.map((user, i) => {
    let userSelected;

    if (props.usersSelected) {
      userSelected = props.usersSelected.find((userS) => {
        return userS.login.uuid === user.login.uuid;
      });
    }
    let isSelected = userSelected ? true : false;

    return (
      <UserDetail
        key={i}
        uid={user.login.uuid}
        name={user.name.first}
        last={user.name.last}
        src={user.picture.thumbnail}
        handleClick={props.handleClick}
        isSelected={isSelected}
      />
    );
  });
  return <div>{users.length > 0 ? users : "no data found :("}</div>;
};
export default List;
