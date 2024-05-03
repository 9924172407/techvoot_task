import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { isLoggedIn } from "../utils/helper";

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
