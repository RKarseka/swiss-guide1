'use client';

import { createContext, useContext } from 'react';
import { Blog, Review, Tour } from '@/assets/types/types';

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

type DataType = 'blogData' | 'reviewData';

export default function NotionDataProvider({
  children,
  data,
}: NotionDataProviderProps) {
  const value: { blogData: Blog[]; reviewData: Review[]; tourData: Tour[] } = {
    blogData: [],
    reviewData: [],
    tourData: [],
  };

  for (const el of data) {
    value[(el.type + 'Data') as DataType].push(el);
  }
  return (
    <NotionDataContext.Provider value={value}>{children}</NotionDataContext.Provider>
  );
}
