const DashboardPage = React.lazy(() => import('../pages/UnAuth/Login'))
export const PrivateRoutes = [
  {
    key: 'dashboard',
    path: '/dashboard',
    Component: DashboardPage,
  },
]
