import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component }) {
  const isAuthenticated =
    localStorage.getItem('accessToken') === process.env.REACT_APP_TOKEN;

  return isAuthenticated ? (
    <Outlet element={Component} />
  ) : (
    <Navigate to="/login" replace />
  );
}
