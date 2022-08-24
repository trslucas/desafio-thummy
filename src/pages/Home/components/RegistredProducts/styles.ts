import styled from 'styled-components'

export const RegistredProductsContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['dark-blue']};
  }
`

export const RegistredProductsTable = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 20rem;

    th {
      background-color: ${(props) => props.theme['blue-green']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.white};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-left: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-300']};
      border-top: 2px solid ${(props) => props.theme['gray-100']};
      padding: 1rem;
      color: ${(props) => props.theme['gray-900']};
      line-height: 1.6;
      font-size: 0.875rem;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-left: 1.5rem;
      }
    }
  }
`
export const BaseButton = styled.button`
  transition: 0.4s;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  nav {
    a {
      color: ${(props) => props.theme['gray-900']};
    }
  }
`
export const ChangeProductButton = styled(BaseButton)`
  background-color: transparent;
  nav {
    a {
      &:not(:disabled):hover {
        color: ${(props) => props.theme['light-dark-blue']};
      }
    }
  }
`
export const DeleteProductButton = styled(BaseButton)`
  background-color: transparent;
  &:not(:disabled):hover {
    color: ${(props) => props.theme['red-500']};
  }
`
