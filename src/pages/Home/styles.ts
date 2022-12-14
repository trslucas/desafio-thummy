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
  margin-top: 5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['dark-blue']};
  cursor: pointer;
  transition: 0.4s;
  color: ${(props) => props.theme.white};

  nav {
    a {
      text-decoration: none;
    }
  }
  &:hover {
    background-color: ${(props) => props.theme['light-dark-blue']};
  }
`
