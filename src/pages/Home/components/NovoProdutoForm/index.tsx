import { FormContainer, TaskInput } from './styles'

export function NovoProdutoForm() {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
      />
    </FormContainer>
  )
}
