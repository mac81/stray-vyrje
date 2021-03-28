import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './burger.styled';

const Burger = ({ open, setOpen, ...props }) => {
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={open ? true : false} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;