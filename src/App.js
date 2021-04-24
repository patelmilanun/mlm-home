import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { history } from "utils/history";
import routes, { renderRoutes } from "routes/routes";
import { Router } from "react-router-dom";
import { theme } from "./Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
};

export default App;
