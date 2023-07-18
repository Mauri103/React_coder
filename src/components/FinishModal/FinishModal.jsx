import React, { useContext, useState } from 'react'
import { ProductContext } from '../../context/ProductContext';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import TextField from "@mui/material/TextField";
import PropTypes from 'prop-types';
import "./FinishModal.css"
import { db } from '../../firebase/firebaseConfig.js';
import { collection, addDoc} from "firebase/firestore";
import SuccessMessage from '../SuccessMessage/SuccessMessage';

function getDate(){
    let today = new Date();
    let date = today.toLocaleString();
    return date;
}

const initialState = {
  name: "",
  lastName: "",
  telephone: "",
  date: getDate(),
};

const FinishPage = (props) => {

  const [products] = useContext(ProductContext);
  const [data, setData] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null)


  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  

  const onSubmit = async (e) => {
    e.preventDefault();
    getDate();
    const docRef = await addDoc(collection(db, "ordersCollection"), {
      data,
      products
    });
    setPurchaseID(docRef.id);
    setData(initialState);
    console.log(data)
  };


  const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className='finalizarCompra'>
      <Button sx={{mt: 5}} onClick={toggle}>
        Finalizar compra
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} >
          Ingrese sus datos
        </ModalHeader>
        <ModalBody>
          <form action="" onSubmit={onSubmit}>
            <TextField
              placeholder="Nombre"
              style={{ margin: 10, width: 400 }}
              name="name"
              value={data.name}
              onChange={handleOnChange}
            />
            <TextField
              placeholder="Apellido"
              style={{ margin: 10, width: 400 }}
              name="lastName"
              value={data.lastName}
              onChange={handleOnChange}
            />
            <TextField
              placeholder="Telefono de contacto"
              style={{ margin: 10, width: 400 }}
              name="telephone"
              value={data.telephone}
              onChange={handleOnChange}
            />
            <div className='input'>
              <button className="btnASendAction">Send</button>
            </div>
          </form>
          {purchaseID ? <SuccessMessage id={purchaseID} /> : null}
        </ModalBody>
      </Modal>
    
    </div>

  );
}

FinishPage.propTypes = {
  className: PropTypes.string,
};

export default FinishPage;


