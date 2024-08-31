import './navigation.styles.scss';
import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import crown from '../../assets/crown.svg';

const Navigation = () => (
  <Fragment>
    <div className="navigation">
      <Link className="logo-container" to='/'>
        <img className="logo" src={crown} alt="crown" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/sign-in">
          Sign In
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
);

export default Navigation;

