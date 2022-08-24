import styled from 'styled-components'

export const ChangeProductContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  h1 {
    color: ${(props) => props.theme['dark-blue']};
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ChangeProductButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 3.5rem;
  border: none;
  margin-top: 2rem;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
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
