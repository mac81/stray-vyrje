import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import logo from "../../images/logo.png"
import Burger from "../burger/burger"
import Menu from "../menu/Menu"
import useOnClickOutside from "../../utils/hooks/useOnClickOutside"

import {
  StyledHeader,
  Container,
  LogoLink,
  Logo,
  MenuContainer,
} from "./Header.styled"
import Language from "../language/Language"

const Header = ({ siteTitle, displayBackground = true }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <StyledHeader $displayBackground={displayBackground}>
        <Container>
          <LogoLink to="/">
            <Logo src={logo} $isHomePage={!displayBackground} />
            {siteTitle}
          </LogoLink>
          <div>
            <Language />
            <MenuContainer ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </MenuContainer>
          </div>
        </Container>
      </StyledHeader>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
