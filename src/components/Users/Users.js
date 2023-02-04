import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";
import "./Users.css";

const Users = () => {
  const data = useLoaderData();
  const users= data.data;

  return (
     <div className="main-div">
        <div className="user-div">
       { users?.map(user => <User key={user.id} user={user}></User>)}
     </div>
     </div>
  );
};

export default Users;
