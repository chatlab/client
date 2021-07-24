import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import CounterContainer from '../containers/CounterContainer';
import Login from '../containers/LoginContainer';

const Application = () => (
    <div>
        Hello World from Electron!!!!
        <CounterContainer />
        <Login />
    </div>
);

export default hot(Application);
