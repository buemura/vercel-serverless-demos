import { Request, Response } from "express";

export const getUsers = (request: Request, response: Response) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  return response.send(users);
};
