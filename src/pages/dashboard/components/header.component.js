import LogoutRounded from '@mui/icons-material/LogoutRounded';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/auth';
import token from '../../../utils/token.util';
import '../../../type-defs';

function Header() {
  /**
   * @type {AuthState} redux store {@link AuthState}
   */
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    token.removeToken();
    dispatch(authActions.onLogout());
  };

  return (
    <AppBar position='static' color='transparent' elevation={1}>
      <Toolbar>
        <Avatar src={user.avatar} alt={user.username} />
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, marginLeft: 2 }}>
          {user.fullName || user.username}
        </Typography>
        <IconButton size='large' color='secondary' onClick={onLogout}>
          <LogoutRounded />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
