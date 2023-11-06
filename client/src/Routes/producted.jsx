import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function ProtectedRoute ({children, isAdmin}) {
    const history = useHistory();
    const { isAuthenticated, loading, user } = useSelector(state => state.authState)

    if(!isAuthenticated && !loading) {
        return history.push('/FacultyStudentLoginPags')
    }

    if(isAuthenticated) {
        if(isAdmin === true  && user.role !== 'admin') {
            return history.push('/FacultyStudentLoginPags')
        }
        return children;
    }
}