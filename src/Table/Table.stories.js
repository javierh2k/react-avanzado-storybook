import React, { useState } from "react";
// import { storiesOf } from "@storybook/react";
// import readme from "./readme.md";
// import { math } from 'shared/libs';
import { TableForm } from "../../src";


// console.log( math.sum(9,9) )
// const ReactModalAnimate = ({children, position}) => {
//   const [modalIsOpen , setModalIsOpen] = useState(false);
//   const handleClose = () =>setModalIsOpen(false);

//   return (
//       <React.Fragment>
//         <button onClick={()=>setModalIsOpen(true)}>Open Modal</button>
//         <Modal
//             isOpen={modalIsOpen}
//             handleClose={handleClose}
//             title="Example Modal"
//         >
//           {children}
//         </Modal>
//       </React.Fragment>    
//   );
// }
const headers = { name :'Nombre', lastname: 'Apellido', email: 'Correo'};
const rows = [
  {
    name: 'Alex', lastname: 'Left', email: 'asd@asd.com'
  },  {
    name: 'Alex', lastname: 'Left', email: 'asd@asd.com'
  },  {
    name: 'Alex', lastname: 'Left', email: 'asd@asd.com'
  },
]
export function TableFormView(){
    return (
      <React.Fragment>
        <TableForm
        headers = {headers}
        rows={rows}
        title="Table de prueba storybook"
        />
      </React.Fragment>
    );
  };

    
export default {
    title: 'General/TableForm',
    parameters: {
        component: TableForm,
    },
};
