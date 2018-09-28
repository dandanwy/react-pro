import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import {Provider} from 'react-redux';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import router  from './routes/index';
import './index.css';
import '../src/style/normalize.css';
import '../src/style/base.css';
import registerServiceWorker from './registerServiceWorker';


import app from './App';
import home from './components/home/home';
import login from './components/login/login';
import counter from './components/counter/counter';

ReactDOM.render(
        <Router>
            <div>
                <Route path="/" component={app}></Route>
                <Route path="/home" component={home}></Route>
                <Route path="/login" component={login}></Route>
                <Route path="/counter" component={counter}></Route>
            </div>
        </Router>,
    document.getElementById('root')
)
registerServiceWorker();