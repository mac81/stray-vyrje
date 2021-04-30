import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'gatsby';

const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/">Forside</Link>
      <Link to="/arbeidsfelt">Arbeidsfelt</Link>
      <Link to="/menneskene">Menneskene</Link>
      <Link to="/kontakt">Kontakt oss</Link>
      <Link to="/omoss">Om oss</Link>
      {/* <Link to="/nyheter">Nyheter</Link> */}
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;