import React from 'react'
import { Col } from 'antd'
import { Searcher } from './Searcher'
import { NavButton } from './NavButton'
import { useSelector } from 'react-redux'
import logo from '../statics/logo.svg'
import './Searcher.css'

const Header = () => {
  const allPokemonsCounter = useSelector(
    (state) => state.data.allPokemonsCounter
  )
  const favoriteCounter = useSelector((state) => state.data.favoriteCounter)

  return (
    <>
      <Col span={24} type='flex' align='middle'>
        <img className='PokeLogo' src={logo} alt='' />
      </Col>
      <Col span={24} type='flex' align='middle'>
        <Searcher />
      </Col>

      <Col span={24} type='flex' align='middle'>
        <NavButton text={'All'} count={allPokemonsCounter} to={'/'} />
        <NavButton
          text={'Favorites'}
          count={favoriteCounter}
          to={'/favorites'}
        />
      </Col>
    </>
  )
}

export { Header }



