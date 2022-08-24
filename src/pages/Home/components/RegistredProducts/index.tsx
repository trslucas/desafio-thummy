import {
  ChangeProductButton,
  DeleteProductButton,
  RegistredProductsContainer,
  RegistredProductsTable,
} from './styles'

import { Pencil, Trash } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function RegistredProducts() {
  return (
    <RegistredProductsContainer>
      <h1>Produtos Cadastrados</h1>
      <RegistredProductsTable>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Código</th>
              <th>Descrição</th>
              <th>Quantidade em estoque</th>
              <th>Preço</th>
              <th>Quantidade Vendida</th>
              <th>Ações</th>
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
              <td>
                <ChangeProductButton>
                  <nav>
                    <NavLink to="/alterarProduto">
                      <Pencil size={16} />
                    </NavLink>
                  </nav>
                </ChangeProductButton>
                <DeleteProductButton>
                  <Trash size={16} />
                </DeleteProductButton>
              </td>
            </tr>
          </tbody>
        </table>
      </RegistredProductsTable>
    </RegistredProductsContainer>
  )
}
