import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setSearchValue } from '../slices/dataSlice'
import './NavButton.css'

const activeStyle = {
  textDecoration: 'underline',
}

const NavButton = ({ text, count, to }) => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(setSearchValue({ value: '' }))
  }

  return (
    <NavLink
      className='Link'
      to={to}
      onClick={handleOnClick}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {`${text}(${count})`}
    </NavLink>
  )
}

export { NavButton }
