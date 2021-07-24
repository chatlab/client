import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Login from '../components/Login/Login';
import { RootState } from '../reducers';
import { LoginAction, login } from '../actions/authActions';


const mapStateToProps = (state: RootState) => ({
    username: state.counter.value
});

const mapDispatchToProps = (dispatch: Dispatch<LoginAction>) => ({
    login: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
