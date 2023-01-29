import React, { Component } from "react";

type Props = {
  users: Array<string>;
};

type State = {};

const UserList = (props: Props) => {
  return (
    <ul>
      {props.users.map((userId) => (
        <li key={userId}>{userId}</li>
      ))}
    </ul>
  );
};

export default UserList;
