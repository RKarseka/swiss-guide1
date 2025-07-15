import React from 'react';

export const getPage = <T extends { key: React.Key }>(arr: T[], id: string) =>
  arr.find((i) => i.key === id) || arr[0];
