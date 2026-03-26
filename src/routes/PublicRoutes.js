import React from 'react'
const LoginPage = React.lazy(() => import('../pages/UnAuth/Login'))
export const PublicRoutes = [
  {
    key: 'homepage',
    path: '/',
    Component: LoginPage,
  },
]
