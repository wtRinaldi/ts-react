import { useState } from "react";

import AddUser from "../components/User/AddUser";
import UsersList from "../components/User/UsersList";
import Card from "../components/UI/Card";

export default function UserPage() {
  const [usersList, setUsersList] = useState<object[]>([]);

  const addUserHandler = (userName: string, userAge: string) => {
    setUsersList((previousList: Array<Object>) => [
      ...previousList,
      { userName: userName, userAge: userAge, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <Card className="max-w-xl mx-auto mt-6 p-10 flex">
        <AddUser onAddUser={addUserHandler} />
      </Card>
      <Card className="max-w-xl mx-auto mt-6 p-10 flex">
        <UsersList users={usersList} />
      </Card>
    </div>
  );
}
