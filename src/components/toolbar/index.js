import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { logout } from '../../store/reducers/auth'

const AppToolbar = () => {
    const { url } = useRouteMatch()
    
    const dispatch = useDispatch()
    const history = useHistory()
    
    const exitApp = () => {
        dispatch(logout())
        history.push('/login')
    }

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant="h6">
                    Tech Manager
                </Typography>
                <span style={{flexGrow: 1}} />
                <Button color="inherit" component={Link} to={`${url}/equipments`}>Equipamentos</Button>
                <Button color="inherit" component={Link} to={`${url}/reservations`}>Reservas</Button>
                <Button color="inherit" onClick={exitApp}>Sair</Button>
            </Toolbar>
        </AppBar>
    )
}

export default AppToolbar