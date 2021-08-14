import * as React from 'react'
import { Button, Form, Icon } from 'react-bulma-components'
import CounterContainer from '../../containers/CounterContainer'

export interface LoginProps {
    username: string
    password: string
    login: () => any
}

const Login: React.FunctionComponent<LoginProps> = ({ username, password, login }) => (
    <div>
        <Form.Field>
            <Form.Label>Name</Form.Label>
            <Form.Control>
                <Form.Input placeholder="Username" name="name" value={username} />
                <Icon align="left">
                    <i className="github" />
                </Icon>
            </Form.Control>
        </Form.Field>
        <Form.Field>
            <Form.Label>Password</Form.Label>
            <Form.Control>
                <Form.Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={password}
                    />
                <Icon align="left">
                    <i className="github" />
                </Icon>
            </Form.Control>
        </Form.Field>
        <Button.Group>
            <Button fullwidth color="primary" onClick={login}>
                Login
            </Button>
        </Button.Group>
    </div>
)

export default Login
