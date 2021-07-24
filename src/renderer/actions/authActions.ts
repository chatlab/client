import { Action, ActionCreator } from 'redux';

export const LOGIN = 'login';

export interface LoginAction extends Action {
    type: 'login';
}

export const login: ActionCreator<LoginAction> = () => ({
    type: LOGIN
});

export type CounterAction = LoginAction;
