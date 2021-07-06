import React from 'react';
import { SignUp } from '../components/pages/Auth/SignUp';
import { Top } from '../components/pages/Homes/Top';

export const RouteIndex = [
  // TOP Page
  {
    path: '',
    exact: true,
    children: <Top />,
  },
  // 新規登録
  {
    path: 'sign_up',
    exact: false,
    children: <SignUp />,
  },
];
