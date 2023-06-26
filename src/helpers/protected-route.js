import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoute({ user, children, ...rest }) {
    const location = useLocation();

    if (user) {
        return children;
    }

    if (!user) {
        return (
            <Navigate
                to={{ pathname: ROUTES.LOGIN, state: { from: location } }}
                replace
            />
        );
    }
}

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    children: PropTypes.object.isRequired,
};
