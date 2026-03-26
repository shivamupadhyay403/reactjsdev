import React from 'react'
const DashboardPage = React.lazy(() => import('../pages/Auth/Dashboard'))
export const PrivateRoutes = [
  {
    key: 'user-dashboard',
    path: '/user-dashboard',
    Component: DashboardPage,
  },
]
