

import { AiFillEdit, AiFillDelete, AiOutlineMail } from 'react-icons/ai';
import { BiSolidMap, BiSolidPhone } from 'react-icons/bi';

const Card = () => {
  return (
    <>
      <div className=" card container d-flex border rounded  tarjeta">
          <div className="row g-0">
            <div className="col-md-4 p-3 center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/330px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg"
                className="img-fluid foto"
                alt="Imagen-perfil"
              />
            </div>
            <div className="col-md-4 border">
              <div className="card-body">
                <h5 className="card-title">nombre</h5>
                <p className="card-text"><BiSolidMap /> Direcctión</p>
                <p className="card-text"><BiSolidPhone /> Telefono</p>
                <p className="card-text"><AiOutlineMail />  Email</p>
              </div>
            </div>
            <div className="editar-eliminar col-md-4  d-flex justify-content-evenly p-4">
              <div><AiFillEdit /></div> 
              <div><AiFillDelete /></div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Card;
