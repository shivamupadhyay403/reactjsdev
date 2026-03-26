import React from 'react'
const DashboardPage = React.lazy(() => import('../pages/Auth/Dashboard'))
export const PrivateRoutes = [
  {
    key: 'dashboard',
    path: '/dashboard',
    Component: DashboardPage,
  },
]
