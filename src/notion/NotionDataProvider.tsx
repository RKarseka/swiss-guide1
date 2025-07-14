'use client';

import { createContext, useContext } from 'react';

// Создаем контекст для данных
export const NotionDataContext = createContext<any>({});

// Хук для использования контекста
export const useNotionData = () => {
  const context = useContext(NotionDataContext);
  if (context === undefined) {
    throw new Error('useNotionData must be used within a NotionDataProvider');
  }
  return context;
};

type NotionDataProviderProps = {
  children: React.ReactNode;
  data: any;
};

export default function NotionDataProvider({
  children,
  data,
}: NotionDataProviderProps) {
  return (
    <NotionDataContext.Provider value={data}>{children}</NotionDataContext.Provider>
  );
}
