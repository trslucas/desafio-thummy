import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme['blue-green']};
  height: 4.5rem;
  width: 100%;

  img {
    width: 6rem;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 3rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: 0.85rem;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transition: 0.4s;

    &:active {
      border-bottom: 3px solid ${(props) => props.theme['light-green']};
    }

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['light-green']};
    }
  }
`
