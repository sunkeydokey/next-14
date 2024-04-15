'use client';

import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

export const TabContext = createContext({
  tab: 'recommend',
  setTab: (value: 'recommend' | 'follow') => {},
});
export default function TabProvider({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState('recommend');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
