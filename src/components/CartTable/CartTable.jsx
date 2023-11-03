import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';
import { Table } from 'reactstrap'
import DeleteIcon from '@mui/icons-material/Delete';
import "./CartTable.css"
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import FinishModal from '../FinishModal/FinishModal';



const CartTable = () => {
  const [products, addToCart, deleteItem, setProducts ] = useContext(ProductContext);
  let total = 0;

  const calcTotal = () => {
    products.map(product => (
      total = total + Math.floor(product.price) * Math.floor(product.quantity)
    ))
  }
  calcTotal()
 
  const deleteProduct = (id) => {
    const foundId = products.find((element) => element.id === id);

    const newArray = products.filter((element) => {
      return element !== foundId;
    });

    setProducts(newArray);
  };

  return (
    <div>
      <h1>Carrito de compras</h1>
      <Table dark bordered hover>
        <thead>
          <tr className=''>
            <th>
              Eliminar
            </th>
            <th>
              Producto
            </th>
            <th>
              Cantidad
            </th>
            <th>
              Precio Unidad
            </th>
            <th>
              Subtotal
            </th>
          </tr>
          {products.map(product => (
              <tr className="align-self-center" key={product.id}>
                  <td onClick={() => deleteProduct(product.id)}><DeleteIcon /></td>
                  <td>{product.name}</td>
                  <td className='d-flex justify-content-between borderless'>
                      <HorizontalRuleIcon onClick={() => deleteItem(product)}/>
                      ${product.quantity}
                      <AddIcon onClick={() => addToCart(product)}/>
                  </td>
                  <td>${product.price}</td>
                  <td>${product.price * product.quantity}</td>
              </tr>
          ))}
        </thead>    
      </Table>
      <Table dark bordered hover className='tablaTotal'>
        <thead>
          <tr className=''>
            <th className='total'>
              Total
            </th>
            <th className='totalMonto'>
              ${total}
            </th>
          </tr>
        </thead>
      </Table>
      <FinishModal />
    </div>
      
  )
}

export default CartTable