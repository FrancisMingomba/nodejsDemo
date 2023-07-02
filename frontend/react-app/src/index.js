import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById("root"));
registerServiceWorker();

