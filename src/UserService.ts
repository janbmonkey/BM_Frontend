import { UserModel } from "./UserModel";

export const getUser = async (id: number) => {
  const response = await fetch(`http://localhost:8081/user/${id}`)
  const body = await response.json();
  console.log(body);
  return body as UserModel;
};
