import React, { useEffect, useState } from 'react';
import { UserModel } from './UserModel';
import { getAllUsers, getUser } from './UserService';

function UserListComponent() {
  
  const [userList, setUserList] = useState<UserModel[]>();
  
  useEffect( () => {
    const fetchData = async () => {
      const users = await getAllUsers();
      setUserList(users);
    }
    fetchData();
  }, []);

  return (
    <div>
      { userList?.map( user => <span> {user.id} {user.name} {user.email}  </span>) }
    </div>
  );
};

export default UserListComponent;