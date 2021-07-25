import { useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { history } from "utils/history";
import routes, { renderRoutes } from "routes/routes";
import { Router } from "react-router-dom";
import { theme } from "./Theme";
import { useDispatch, useSelector } from "store";
import { initialize } from "slices/auth";
import LoadingScreen from "components/LoadingScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const { isInitialized } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(initialize());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        autoClose={5000}
      />
      <CssBaseline />
      {isInitialized ? (
        <Router history={history}>{renderRoutes(routes)}</Router>
      ) : (
        <LoadingScreen />
      )}
    </ThemeProvider>
  );
};

export default App;
