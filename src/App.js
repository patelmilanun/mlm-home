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
        <Route path="/" component={HomeView} />
        <Route path="/dashboard" component={DashboardView} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
