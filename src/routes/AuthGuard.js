import { Redirect } from "react-router-dom";
import { useSelector } from "store";

const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Redirect to="/auth/login" />;
  }

  return <>{children}</>;
};

export default AuthGuard;
