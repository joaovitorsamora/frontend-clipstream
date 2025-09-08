import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {
  const canAccess = sessionStorage.getItem('canAccessVideo') === 'true'

  if (!canAccess) {
    return <Navigate to="/" replace />
  }

  sessionStorage.removeItem('canAccessVideo')

  return <Outlet />
}
