import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"
import { Link } from "gatsby"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/">
        <FormattedMessage id="menu.home" />
      </Link>
      <Link to="/arbeidsfelt">
        <FormattedMessage id="menu.services" />
      </Link>
      <Link to="/menneskene">
        <FormattedMessage id="menu.peoples" />
      </Link>
      <Link to="/kontakt">
        <FormattedMessage id="menu.contact" />
      </Link>
      <Link to="/omoss">
        <FormattedMessage id="menu.about" />
      </Link>
      {/* <Link to="/nyheter">Nyheter</Link> */}
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default injectIntl(Menu)
