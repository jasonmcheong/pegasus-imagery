/*
 *
 *   TODO: Before transfering build > index.html to server. Make sure that the file paths are correct ie. /static/ to static/
 *
 */

import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            media: [],
            pages: [],
            career: [],
            categories: [],
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
        ])
            .then(value => {
                this.setState({
                    media: value[0],
                    pages: value[1],
                    careers: value[2],
                    categories: value[3],
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
                    <Header />
                    <Switch>
                        {/* Should be home component for the first route once it gets finished */}
                        <Route exact path='/' component={Contact} />
                        <Route path='/about' render={props => <About {...props} pages={this.state.pages} />} />
                        <Route path='/services' render={props => <Services {...props} pages={this.state.pages} />} />
                        <Route
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
                        <Route path='/gallery' render={props => <Gallery {...props} media={this.state.media} />} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </div>
            );
        }
    }
}

export default App;
