import React from 'react'
const LoginPage = React.lazy(() => import('../pages/UnAuth/Login'))
const HomePage = React.lazy(() => import('../pages/UnAuth/HomePage'))
export const PublicRoutes = [
  {
    key: 'homepage',
    path: '/',
    Component: HomePage,
  },
  {
    key: 'login',
    path: '/login',
    Component: LoginPage,
  },
]
