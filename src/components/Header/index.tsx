import { HeaderContainer, NavBar } from './styles'

import logoThummy from '../../assets/Logo-Thummi.svg'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavBar>
        <img src={logoThummy} alt="" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="">Produtos mais caros</NavLink>
          <NavLink to="">Produtos com maior estoque</NavLink>
        </nav>
      </NavBar>
    </HeaderContainer>
  )
}
