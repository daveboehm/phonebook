import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Layout from './HOC/Layout/Layout'
import Navigation from './components/Navigation/Navigation'
import Content from './components/Content/Content'

import Contacts from './containers/Contacts/Contacts'
import Create from './containers/Create/Create'
class App extends Component {
    render() {
        return (
            <Layout>
                <Navigation />
                <Route path="/" exact component={ Contacts } />
                <Route path="/contacts"  component={ Contacts } />
                <Route path="/create" component={ Create } />
                
            </Layout>
        )
    }
}

export default App
