import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { history } from "utils/history";
import HomeView from "./app/HomeView";
import DashboardView from "./app/DashboardView";
import { Route, Router } from "react-router-dom";
import { theme } from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Route path="/" exact render={(props) => <HomeView {...props} />} />
        <Route
          path="/dashboard"
          exact
          render={(props) => <DashboardView {...props} />}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
