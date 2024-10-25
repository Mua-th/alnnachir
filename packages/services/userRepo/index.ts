import { collection, getDocs, query, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../fireb/index'; // Your client-side Firebase config
import { User } from '../../fireb/firebase-admin';

export const userService = {
  async getAllUsers(): Promise<User[]> {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    try {
      const userDataWithTimestamps = {
        ...userData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      
      const docRef = await addDoc(collection(db, 'users'), userDataWithTimestamps);
      return {
        id: docRef.id,
        ...userData,
        createdAt: userDataWithTimestamps.createdAt,
        updatedAt: userDataWithTimestamps.updatedAt,
      } as User;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  async updateUser(id: string, userData: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User> {
    try {
      const userRef = doc(db, 'users', id);
      const updateData = {
        ...userData,
        updatedAt: serverTimestamp(),
      };
      
      await updateDoc(userRef, updateData);
      return {
        id,
        ...userData,
        updatedAt: updateData.updatedAt,
      } as User;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  async deleteUser(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'users', id));
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
};