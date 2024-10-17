// src/context/UserContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { get_user_data } from '@/api/user.tsx';

type UserObject = {
  user_id: number;
  username: string;
  rate: string;
  balance: number;
  refferer: string;
  credit_count: number;
  analytics_count: number;
  subscription_date: string;
  activated: boolean;
};

type UserContextType = {
  userData: UserObject | null;
  refreshUserData: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserObject | null>(null);

  const refreshUserData = async () => {
    const access_token = localStorage.getItem('auth');
    if (!access_token) return;

    try {
      const user = await get_user_data(access_token);
      setUserData(user);
    } catch (error) {
      console.error('Failed to refresh user data:', error);
    }
  };

  return (
    <UserContext.Provider value={{ userData, refreshUserData }}>
      {children}
    </UserContext.Provider>
  );
};
