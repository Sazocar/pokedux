import React from 'react'
import { Col } from 'antd'
import { Searcher } from './Searcher'
import { NavButton } from './NavButton'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../statics/logo.svg'
import './Searcher.css'

const Header = () => {
  const allPokemonsCounter = useSelector(
    (state) => state.data.allPokemonsCounter
  )
  const favoriteCounter = useSelector((state) => state.data.favoriteCounter)
  const navigate = useNavigate()

  const handleFavorites = () => {
    navigate('/favorites')
  }

  const handleHome = () => {
    navigate('/')
  }

  return (
    <>
      <Col span={4} offset={10}>
        <img className='PokeLogo' src={logo} alt='' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      <Col span={24} type='flex' align='middle'>

        <NavButton text={'All'} count={allPokemonsCounter} to={'/'}/>
        <NavButton text={'Favorites'} count={favoriteCounter} to={'/favorites'}/>

      </Col>
    </>
  )
}

export { Header }

