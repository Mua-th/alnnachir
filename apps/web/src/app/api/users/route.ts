// pages/api/users/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import {userService} from "../../../../../../packages/services/userRepo";
import { adminDb, User } from "../../../../../../packages/fireb/firebase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Create user
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else if (req.method === "GET") {
    // Get all users
    try {
      const usersRef = adminDb.collection('users');
      const snapshot = await usersRef.get();
      
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as User));
  
      return res.json(users);
    } catch (error) {
      console.error("API Error:", error);
      return res.status(500).json(
        { error: "Failed to fetch users" },
      );
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
