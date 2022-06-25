import { Route, Navigate } from "react-router-dom";
import auth from "../auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.loggedIn() ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
