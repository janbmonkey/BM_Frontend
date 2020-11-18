import React, { useState } from 'react';
import { UserModel } from './UserModel';
import { putUsers } from './UserService';

function UserFormComponent() {
  const [user, setUser] = useState<UserModel>();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setUser({...user, [name]:value} as UserModel);
  }

  const onSubmit = (event: React.FormEvent) => {
    if(user){
      const putData = async () => await putUsers(user);
      console.log('Alright put user .. ', JSON.stringify(user));
      console.log('New User has index ', putData());
    }
  }

  return (
    <>
    <form>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={user?.name}
        onChange={onChange} />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={user?.email}
        onChange={onChange} />
      </form>
      <button onClick={onSubmit}> Add User </button>
    </>
  );
};

export default UserFormComponent;