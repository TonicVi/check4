import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const LogContext = createContext();

export function useLog() {
  return useContext(LogContext);
}