import { NavLink } from 'react-router-dom'
import '../App.css'

const activeStyle = {
  textDecoration: 'underline',
}


// Me quedé en ponerle estilo al button para el isActive de NavLink
const handleClick = () => {

}

const NavButton = ({ text, count, to }) => {
  return (
    <button type='link' className='nav-button active'>
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
        {`${text}(${count})`}
    </NavLink>
      </button>
  )
}

export { NavButton }

