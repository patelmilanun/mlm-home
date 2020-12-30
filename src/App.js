import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { history } from "utils/history";
import routes, { renderRoutes } from "routes/routes";
// import HomeView from "./app/HomeView";
// import DashboardView from "./app/DashboardView";
import { Route, Router, Switch } from "react-router-dom";
import { theme } from "./Theme";
import { theme2 } from "./Theme2";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
};

export default App;
