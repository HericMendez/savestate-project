import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { 
	AUTH_PREFIX_PATH, 
	UNAUTHENTICATED_ENTRY, 
	REDIRECT_URL_KEY 
} from 'configs/AppConfig'
import { AUTH_TOKEN } from "constants/AuthConstant";

const ProtectedRoute = () => {
  const { token } = useSelector((state) => state.auth);
  const stored_token = localStorage.getItem(AUTH_TOKEN);
  console.log("protected route token: ", stored_token);
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to={`${AUTH_PREFIX_PATH}${UNAUTHENTICATED_ENTRY}?${REDIRECT_URL_KEY}=${location.pathname}`}
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute