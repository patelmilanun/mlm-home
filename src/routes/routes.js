import { ThemeProvider } from "@material-ui/core";
import { Suspense, Fragment, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import DashboardLayout from "layouts/DashboardLayout";
import LoadingScreen from "components/LoadingScreen";
import GuestGuard from "./GuestGuard";
import AuthGuard from "./AuthGuard";
import { theme2 } from "Theme2";
import TitleProvider from "components/TitleProvider";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;
        const customTheme = route.customTheme;
        const title = route.title || "";

        const layoutToRender = (props) => (
          <Layout>
            {route.routes ? (
              renderRoutes(route.routes)
            ) : (
              <TitleProvider title={title}>
                <Component {...props} />
              </TitleProvider>
            )}
          </Layout>
        );

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => {
              return (
                <Guard>
                  {customTheme ? (
                    <ThemeProvider theme={customTheme}>
                      {layoutToRender(props)}
                    </ThemeProvider>
                  ) : (
                    layoutToRender(props)
                  )}
                </Guard>
              );
            }}
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
        title: "Dashboard",
        component: lazy(() => import("views/app/DashboardView")),
      },
      {
        exact: true,
        path: "/app/course",
        title: "Course",
        component: lazy(() => import("views/app/CourseListView")),
      },
      {
        exact: true,
        path: "/app/course/:id",
        title: "View Course",
        component: lazy(() => import("views/app/CourseView")),
      },
      {
        exact: true,
        path: "/app/referral",
        title: "Referral",
        component: lazy(() => import("views/app/ReferralTreeView")),
      },
      {
        exact: true,
        path: "/app/withdrawal",
        title: "Withdrawal",
        component: lazy(() => import("views/app/WithdrawalView")),
      },
      {
        exact: true,
        path: "/app/setting",
        title: "Settings",
        component: lazy(() => import("views/app/SettingView")),
      },
    ],
  },
  {
    path: "/auth",
    guard: GuestGuard,
    // layout: HomeLayout,
    customTheme: theme2,
    routes: [
      {
        exact: true,
        path: "/auth/login",
        component: lazy(() => import("views/auth/LoginView")),
      },
      {
        exact: true,
        path: "/auth/register-payment-status",
        component: lazy(() => import("views/pub/PaymentStatus")),
      },
      {
        exact: true,
        path: "/auth/signup",
        component: lazy(() => import("views/auth/RegisterView")),
      },
    ],
  },
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
