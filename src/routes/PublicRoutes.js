const LoginPage = React.lazy(() => import('../pages/UnAuth/Login'))
export const PublicRoutes = [
  {
    key: 'login',
    path: '/login',
    Component: LoginPage,
  },
]
