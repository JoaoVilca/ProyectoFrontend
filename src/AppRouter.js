import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import AdminDashboard from './modules/admin/screens/dashboard/AdminDashboard'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/admin"} component={AdminDashboard}></Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
