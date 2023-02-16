import { Button } from 'antd'

const NavButton = ({ text, count }) => {
  return (
    <Button
      className='nav-button'
      type='link'
      shape='round'
      size='large'
    >{`${text}(${count})`}</Button>
  )
}

export { NavButton }
