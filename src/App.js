import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { history } from "utils/history";
import routes, { renderRoutes } from "routes/routes";
import { Router } from "react-router-dom";
import { theme } from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
};

export default App;
