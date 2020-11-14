import React, { useEffect, useState } from 'react';
import { UserModel } from './UserModel';
import { getUser } from './UserService';

function App() {
  const [user, setUser] = useState<UserModel>();
  
  
  useEffect( () => {
    const fetchData = async () => {
      const user = await getUser(1);
      setUser(user);
    }
    fetchData();
  }, []);

  return (
    <div>
      { user?.name }
    </div>
  );
}

export default App;
