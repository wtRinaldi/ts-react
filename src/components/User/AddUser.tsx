import React, { useState, useEffect } from "react";
import Button from "../UI/Button";

interface Props {
  className?: string;
  onAddUser(userName: string, userAge: string): void;
}

const AddUser = ({ className = "", onAddUser }: Props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  debugger;
  console.log("form is rendering");

  const addUserHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 0) {
      return;
    }

    onAddUser(userName, userAge);

    setUserName("");
    setUserAge("");
  };

  const userNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAge(event.target.value);
  };

  return (
    <form
      onSubmit={addUserHandler}
      className={`flex flex-col flex-auto ${className}`}
    >
      <div className="flex flex-col pb-6">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={userNameChangeHandler}
        ></input>
      </div>
      <div className="flex flex-col pb-6">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={userAge}
          onChange={userAgeChangeHandler}
        ></input>
      </div>
      <Button type="submit" onClick={addUserHandler}>
        Add User
      </Button>
    </form>
  );
};

export default AddUser;
