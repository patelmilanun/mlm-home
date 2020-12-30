import { ThemeProvider } from "@material-ui/core";
import { Suspense, Fragment, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import DashboardLayout from "layouts/DashboardLayout";
import LoadingScreen from "components/LoadingScreen";
import GuestGuard from "./GuestGuard";
import AuthGuard from "./AuthGuard";
import { theme2 } from "Theme2";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;
        const customTheme = route.customTheme;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                {customTheme ? (
                  <ThemeProvider theme={customTheme}>
                    <Layout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <Component {...props} />
                      )}
                    </Layout>
                  </ThemeProvider>
                ) : (
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                )}
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  //   {
  //     exact: true,
  //     path: "/404",
  //     component: lazy(() => import("views/errors/NotFoundView")),
  //   },
  {
    path: "/app",
    guard: AuthGuard,
    layout: DashboardLayout,
    customTheme: theme2,
    routes: [
      {
        exact: true,
        path: "/app/dashboard",
        component: lazy(() => import("views/app/DashboardView")),
      },
      {
        exact: true,
        path: "/app/course",
        component: lazy(() => import("views/app/DashboardView")),
      },
    ],
  },
  //   {
  //     path: "/auth",
  //     guard: GuestGuard,
  //     layout: HomeLayout,
  //     routes: [
  //       {
  //         exact: true,
  //         path: "/auth/login",
  //         component: lazy(() => import("views/auth/LoginView")),
  //       },
  //       {
  //         exact: true,
  //         path: "/auth/signup",
  //         component: lazy(() => import("views/auth/RegisterView")),
  //       },
  //     ],
  //   },
  {
    path: "*",
    routes: [
      {
        exact: true,
        path: "/",
        component: lazy(() => import("views/app/HomeView")),
        // component: () => <Redirect to="/app/dashboard" />,
      },
      //   {
      //     component: () => <Redirect to="/404" />,
      //   },
    ],
  },
];

export default routes;
