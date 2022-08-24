import styled from 'styled-components'

export const SemProdutosCadastradosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  h1 {
    color: ${(props) => props.theme['blue-green']};
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  img {
    width: 20rem;
  }
`
