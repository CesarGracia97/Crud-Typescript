import "./../styles/EmployeeList.style.css"
import { IEmployee } from "../interface/Employee.type";
import EmployeeModal from "./EmployeeModal";
import { useState } from "react"

type Props = {
    list: IEmployee[];
    onDeleteClickHnd: (data: IEmployee) => void
};

const EmployeesList = (props: Props) => {

    const {list, onDeleteClickHnd} = props;
    const [showModal, setShowModal] = useState (false);
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data)
        setShowModal(true)
    };

    const onCloseModal = () => setShowModal(false);
    
    return (
        <div>
            <article>
                <h3 className="list-header">Lista de Empleados</h3>
            </article>
            <table>
                <tr>
                    <th>Nombre y Apellido</th>
                    <th>Email</th>
                    <th>Edad</th>
                    <th>Acciones</th>
                </tr>
                {list.map((employee) => {
                    console.log(employee);
                    return (
                        <tr key={employee.id}>
                            <td>{`${employee.firstName} ${employee.lastName}`}</td>
                            <td>{employee.email}</td>
                            <td>{employee.age}</td>
                            <td>
                                <div>
                                    <input type="button" value="Ver" onClick={() => viewEmployee(employee)} />
                                    <input type="button" value="Editar" />
                                    <input type="button" value="Eliminar" onClick={() => onDeleteClickHnd(employee)} />
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </table>
            {showModal && dataToShow != null && (<EmployeeModal onClose={onCloseModal} data={dataToShow}/>)}
            
        </div>
    );
};

export default EmployeesList;