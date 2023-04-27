import "./../styles/EmployeeList.style.css"
import { IEmployee } from "../interface/Employee.type";

type Props = {
    list: IEmployee[]
}

const EmployeesList = (props: Props) => {

    const {list} = props;


    return (
        
        <div>
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
                                    <input type="button" value="View" />
                                    <input type="button" value="View" />
                                    <input type="button" value="View" />
                                </div>
                            </td>
                        </tr>
                    )
                })}

            </table>
        </div>
    );
};

export default EmployeesList;