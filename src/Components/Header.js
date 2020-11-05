import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
      <header>
          <div className='nav-item'>
            <NavLink exact={true}
                     activeClassName='is-active'
                     to='/'>Главная</NavLink>
          </div>
          <div className='nav-item'>
            <NavLink exact={true}
                     activeClassName='is-active'
                     to='/employees'>Сотрудники</NavLink>
          </div>
      </header>
  );
};

export default Header;