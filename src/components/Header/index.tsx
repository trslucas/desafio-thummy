import { HeaderContainer, NavBar } from './styles'

import logoThummy from '../../assets/Logo-Thummi.svg'

import { NavLink, useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <NavBar>
        <nav>
          <NavLink to="/">
            <img src={logoThummy} alt="" />
          </NavLink>
        </nav>
        {/* <button onClick={navigate('/')}></button> */}
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="">Produtos mais caros</NavLink>
          <NavLink to="">Produtos com maior estoque</NavLink>
        </nav>
      </NavBar>
    </HeaderContainer>
  )
}
