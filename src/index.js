import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import {GlobalStyles} from './global-styles';
import { firebase } from "./lib/firebase.prod";
import {FirebaseContext} from "./context/firebase";

ReactDOM.render(<>
            {console.log(firebase)}
        <FirebaseContext.Provider value={{firebase}}>
        <GlobalStyles/>
        <App />
        </FirebaseContext.Provider>
        </>,
  document.getElementById('root')
);

