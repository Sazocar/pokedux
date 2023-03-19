import { NavLink } from 'react-router-dom'
import './NavButton.css'

const activeStyle = {
  textDecoration: 'underline',
}

const NavButton = ({ text, count, to }) => {
  return (
    <NavLink
      className='Link'
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {`${text}(${count})`}
    </NavLink>
  )
}

export { NavButton }
