'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { createClient } from './client';
import { Blog, Review, Tour } from '@/assets/types/types';

type DataType = 'blogData' | 'reviewData';

type Content = { blogData?: Blog[]; reviewData?: Review[]; tourData?: Tour[] };

const SupabaseContext = createContext<Content>({});

export function useSupabase() {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
}

export function SupabaseProvider({ ...children }: { children: React.ReactNode }) {
  const supabase = useMemo(() => createClient(), []);
  const [data, setData] = useState<Content>({});
  useEffect(() => {
    supabase
      .from('allData')
      .select()
      .then(({ data: raw }) => {
        const value: Content = {
          blogData: [],
          reviewData: [],
          tourData: [],
        };
        if (raw?.length) {
          for (const el of raw) {
            value[(el.type + 'Data') as DataType]?.push(el);
          }
        }
        setData(value || {});
      });
  }, []);
  return <SupabaseContext.Provider value={data as Content} {...children} />;
}
