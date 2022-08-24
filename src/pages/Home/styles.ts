import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 100vh;
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
export const SemProdutosCadastradosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  h1 {
    color: ${(props) => props.theme['blue-green']};
    font-size: 1.5rem;
  }
  img {
    width: 20rem;
  }
`
