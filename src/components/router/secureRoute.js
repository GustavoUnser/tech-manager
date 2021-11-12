import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router"

const SecureRoute = ({ children, ...otherProps}) => {
    const user = useSelector(state => state.auth)
    
    return (
        <Route {...otherProps}>
            {
                user.isAuth ? 
                    children : 
                    <Redirect to="/login" />
            }
        </Route>
    )
}

export default SecureRoute