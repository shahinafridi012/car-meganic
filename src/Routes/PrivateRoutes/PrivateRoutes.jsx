import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)
    if(loading) {
        return <div className="text-center items-center"><span className="loading text-center loading-infinity loading-lg"></span></div>
    }
    if (user?.email){
        return children
    }
        return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;