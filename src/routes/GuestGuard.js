// import { Redirect } from 'react-router-dom';
// import { useSelector } from 'store';

const GuestGuard = ({ children }) => {
  //   const { isAuthenticated } = useSelector(state => state.auth);

  //   if (isAuthenticated) {
  //     return <Redirect to="/app/dashboard" />;
  //   }

  return <>{children}</>;
};

export default GuestGuard;
