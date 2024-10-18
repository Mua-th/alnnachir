// pages/index.tsx
'use client'
import { useState } from 'react';
import { registerUser, loginUser } from '../../../../../packages/fireb/auth';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      await registerUser(email, password);
    } else {
      await loginUser(email, password);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">{isRegistering ? 'Register' : 'Login'}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 p-2 border"
          required
        />
        <Button  className="p-2">
          {isRegistering ? 'Register' : 'Login'}
        </Button>
      </form>
      <Button
        onClick={() => setIsRegistering(!isRegistering)}
        className="mt-4 p-2 border"
      >
        {isRegistering ? 'Switch to Login' : 'Switch to Register'}
      </Button>
    </div>
  );
};

export default Home;
