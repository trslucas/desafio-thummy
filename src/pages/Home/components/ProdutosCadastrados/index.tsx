import {
  ProdutosCadastradosContainer,
  ProdutosCadastradosTabela,
} from './styles'

export function ProdutosCadastrados() {
  return (
    <ProdutosCadastradosContainer>
      <h1>Produtos Cadastrados</h1>
      <ProdutosCadastradosTabela>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Código</th>
              <th>Descrição</th>
              <th>Quantidade em estoque</th>
              <th>Preço</th>
              <th>Quantidade Vendida</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alcool</td>
              <td>125</td>
              <td>Utilitário</td>
              <td>100</td>
              <td>R$5,00</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </ProdutosCadastradosTabela>
    </ProdutosCadastradosContainer>
  )
}
