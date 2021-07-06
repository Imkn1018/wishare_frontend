import React from 'react';
import { Top } from '../components/pages/Homes/Top';

export const RouteIndex = [
  {
    path: '/',
    exact: true,
    children: <Top />,
  },
];
