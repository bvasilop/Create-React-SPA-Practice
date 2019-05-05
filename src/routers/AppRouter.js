import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Contact from '../components/Contact';
import Home from '../components/Home';
import Item from '../components/Item';
import Layout from '../components/Layout'
import NotFoundPage from '../components/NotFoundPage';
import PortfolioPage from '../components/PortfolioPage';

const AppRouter = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/portfolio/" component={PortfolioPage} exact={true}/>
                <Route path="/portfolio/:id" component={Item}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default AppRouter;
