import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './components/Home';
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className='app'>
                    <NavBar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/projects' component={Projects}/>
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}
