
import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './Components/Upload';
import Display from './Components/Display';
import CallBack from './Components/CallBack';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import {Router,Route, browserHistory} from 'react-router';
import {requireAuth} from './utills/AuthServices';

const Root = () => {
    return (
      <div className="container">
        <Router history={browserHistory}>
          <Route path="/" component={Display}/>
          <Route path="/upload" component={Upload} onEnter={requireAuth} />
          <Route path="/callback" component={CallBack} />
        </Router>
      </div>
    )
  }
  
  ReactDOM.render(<Root />, document.getElementById('root'));
  //registerServiceWorker();
  serviceWorker.unregister();