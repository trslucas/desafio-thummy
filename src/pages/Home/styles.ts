import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`
export const CriarProdutoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 3.5rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme['dark-blue']};
  cursor: pointer;
  transition: 0.4s;

  nav {
    a {
      color: ${(props) => props.theme.white};
      text-decoration: none;
    }
  }
  &:hover {
    background-color: ${(props) => props.theme['light-dark-blue']};
  }
`
