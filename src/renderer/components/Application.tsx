import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import 'bulma/css/bulma.min.css'
import { Form, Icon, Button } from 'react-bulma-components'
import CounterContainer from '../containers/CounterContainer'
import Login from './Login/Login'

const Application = () => (
    <div>
        <CounterContainer />
        <Login />
    </div>
)

export default hot(Application)
