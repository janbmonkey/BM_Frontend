import { UserModel } from "./UserModel";

export const getUser = async (id: number) => {
  const response = await fetch(`http://localhost:8081/user/${id}`)
  const body = await response.json();
  return body as UserModel;
};

export const getAllUsers = async () => {
  const response = await fetch(`http://localhost:8081/user`)
  const body = await response.json();
  return body as UserModel[];
};

export const putUsers = async (user: UserModel) => {
  const response = await fetch(`http://localhost:8081/user`,{
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    },
  });
  const body = await response.json();
  return body;
};