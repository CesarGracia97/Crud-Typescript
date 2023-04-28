import { IEmployee } from "../interface/Employee.type";
import "../styles/EmployeeModal.style.css"

type Props ={
    onClose: () => void;
    data : IEmployee;
}

const EmployeeModal = (props : Props) => {
    const {onClose, data} = props;
    return(
        <div>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>
                        &times;
                    </span>
                    <div>
                        <h3>Datos del Empleado</h3>
                        <div>
                            <div>
                                <label> Nombres  : {data.firstName}</label>
                            </div>
                            <div>
                                <label> Apellidos: {data.lastName}</label>
                            </div>
                            <div>
                                <label> Email    : {data.email}</label>
                            </div>
                            <div>
                                <label> Edad     : {data.age}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default EmployeeModal;