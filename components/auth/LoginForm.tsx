'use client';

import { useState } from 'react';
import { FiMail, FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { IoPersonOutline } from "react-icons/io5";

export default function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // request to bacend later
      // const response = await fetch('/api/auth/login', {...});
      
      // imitating successfull log in
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // home page if everything is ok 
      router.push('/');
      router.refresh();
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
     
     {/* name */}
     <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
           Name
        </label>
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pinkMain focus:border-transparent outline-none"
            placeholder="Type your name here"
            required
          />
        </div>
      </div>
     
      {/*  email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email 
        </label>
        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pinkMain focus:border-transparent outline-none"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      {/* password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pinkMain focus:border-transparent outline-none"
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      </div>

      {/* remember me */}
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-pinkMain focus:ring-pinkMain border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <a href="/forgot-password" className="text-sm text-pinkMain hover:text-pink-600">
          Forgot password?
        </a>
      </div>

      
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* logIn button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-pinkMain text-white py-3 rounded-lg font-medium hover:bg-pink-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Loginging in...' : 'Log In'}
      </button>      
    </form>
  );
}