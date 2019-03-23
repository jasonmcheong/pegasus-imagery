/*
 *
 *   TODO: Before transfering build > index.html to server. Make sure that the file paths are correct ie. /static/ to static/
 *
 */

import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Careers from './components/Careers';
import CareerDetail from './components/CareerDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faBars);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            media: [],
            pages: [],
            career: [],
            categories: [],
            logo: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        Promise.all([
            fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/wp/v2/media').then(res => res.json()),
            fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/wp/v2/pages').then(res => res.json()),
            fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/wp/v2/career').then(res => res.json()),
            fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/wp/v2/categories').then(res => res.json()),
            fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/logo/v1').then(res => res.json()),
        ])
            .then(value => {
                this.setState({
                    media: value[0],
                    pages: value[1],
                    careers: value[2],
                    categories: value[3],
                    logo: value[4],
                    isLoading: false,
                });
            })
            .catch(error => error.response);
    }

    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return <p>Loading...</p>;
        } else {
            return (
                <div className='App'>
                    <Header logo={this.state.logo} />
                    <Switch>
                        {/* Should be home component for the first route once it gets finished */}
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' render={props => <About {...props} pages={this.state.pages} />} />
                        <Route
                            exact
                            path='/services'
                            render={props => <Services {...props} pages={this.state.pages} />}
                        />
                        <Route
                            exact
                            path='/careers/:careerId'
                            render={props => <CareerDetail {...props} careers={this.state.careers} />}
                        />
                        <Route
                            exact
                            path='/careers'
                            render={props => (
                                <Careers
                                    {...props}
                                    pages={this.state.pages}
                                    careers={this.state.careers}
                                    categories={this.state.categories}
                                />
                            )}
                        />
                        <Route
                            exact
                            path='/gallery'
                            render={props => <Gallery {...props} media={this.state.media} />}
                        />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                    <Footer pages={this.state.pages} />
                </div>
            );
        }
    }
}

export default App;
