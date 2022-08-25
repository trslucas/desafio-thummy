import {
  ChangeProductButton,
  DeleteProductButton,
  RegistredProductsContainer,
  RegistredProductsTable,
} from './styles'

import { Pencil, Trash } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../../../../contexts/ProductsContext'

export function RegistredProducts() {
  const { products } = useContext(ProductsContext)
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
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.nomeProduto}</td>
                  <td>{product.codigoProduto}</td>
                  <td>{product.descricaoProduto}</td>
                  <td>{product.quantidadeProduto}</td>
                  <td>R${product.preco}</td>
                  <td>{product.quantidadeVendida}</td>
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
              )
            })}
          </tbody>
        </table>
      </RegistredProductsTable>
    </RegistredProductsContainer>
  )
}
