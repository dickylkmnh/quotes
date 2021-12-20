import React from 'react';
import MenuComponent from './menu/menu.component';
import PaymentComponent from './payment/payment.component';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const AppComponent = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <MenuComponent />
                    </Route>
                    <Route path="/payment">
                        <PaymentComponent />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default AppComponent;
