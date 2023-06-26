import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

export default function IsUserLoggedIn({
    user,
    loggedInPath,
    children,
    ...rest
}) {
    const location = useLocation();

    if (!user) {
        return children;
    }

    if (user) {
        return (
            <Navigate
                to={{ pathname: loggedInPath, state: { from: location } }}
                replace
            />
        );
    }
}

IsUserLoggedIn.propTypes = {
    user: PropTypes.object,
    loggedInPath: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};
