import styled from 'styled-components'

export const FormContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: ${(props) => props.theme['light-dark-blue']};
  font-size: 1rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  width: 25rem;
  height: 2.5rem;
  border: 2px solid ${(props) => props.theme['blue-green']};
  border-radius: 8px;
  font-size: 1.125rem;
  padding: 0.65rem 1rem;
  color: ${(props) => props.theme['gray-900']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['light-dark-blue']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
    font-size: 1rem;
  }
`

export const ProductInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
