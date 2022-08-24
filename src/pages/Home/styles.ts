import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
export const CriarProduto = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 3.5rem;
  margin-top: 8rem;
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['dark-blue']};
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: ${(props) => props.theme['light-dark-blue']};
  }
`
