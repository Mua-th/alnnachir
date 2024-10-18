import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../../packages/fireb'; // Adjust to your Firebase config file

export const useAuth = () => {
  const [user, setUser] = useState(null);  // State to store user data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user); // Set user data
      } else {
        // No user is signed in
        setUser(null);
      }
      setLoading(false); // Stop loading once auth state is determined
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return { user, loading };
};
