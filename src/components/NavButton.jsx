import { Button } from 'antd'

const NavButton = ({ text, count, onClick}) => {
  return (
    <Button
      className='nav-button'
      type='link'
      shape='round'
      size='large'
      onClick={onClick}
    >{`${text}(${count})`}</Button>
  )
}

export { NavButton }
