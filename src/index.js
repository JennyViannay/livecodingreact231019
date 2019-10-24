import React from 'react';
import ReactDOM from 'react-dom';

//rooting
import { Route, BrowserRouter as Router } from 'react-router-dom';

//css
import './index.css';

//components
import App from './App';
import Login from './components/Login';

//serviceWorker
import * as serviceWorker from './serviceWorker';


// -- ICI CREATION D'UNE CONSTANTE DANS LAQUELLE LES ROUTES SONT DÉCLARÉES
// -- CHAQUE ROUTE DIRIGE VERS UN COMPONANT
const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
        </div>
    </Router>
)

ReactDOM.render(
    // REMPLACE <APP/> PAR LA CONST ROUTING POUR QUE CELLE CI REDIRIGE L'APP EN FONCTION DES ROUTES 
    routing,
    document.getElementById('root')
);

serviceWorker.unregister();
