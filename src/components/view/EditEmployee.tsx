import "../styles/EditEmployee.style.css"
import { useState} from "react"
import { IEmployee } from "../interface/Employee.type";

 type Props ={
    data: IEmployee;
    onBackBtnClickHnd : () => void;
    onUpdateClickHnd : (data: IEmployee) => void;
    
 }
const EditEmployee = (props : Props) => {

    const {data, onBackBtnClickHnd, onUpdateClickHnd} = props;
    const[firstName, setFirstName] = useState(data.firstName);
    const[lastName, setLastName] = useState(data.lastName);
    const[email, setEmail] = useState(data.email);
    const[age, setAge] = useState(data.age);


    const onFirstNameChangeHnd = (e : any) => {
        setFirstName(e.target.value)
    }
    const onLastNameChangeHnd = (e : any) => {
        setLastName(e.target.value)
    }
    const onEmailChangeHnd = (e : any) => {
        setEmail(e.target.value)
    }
    const onAgeChangeHnd = (e : any) => {
        setAge(e.target.value)
    }

    const onSubmitBtnClickHnd = (e : any) => {
        e.preventDefault();
        const updateedData: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age
        };
        onUpdateClickHnd(updateedData);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Agregar Empleados</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" value={firstName} onChange={onFirstNameChangeHnd}/>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" value={lastName} onChange={onLastNameChangeHnd}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} onChange={onEmailChangeHnd}/>
                </div>
                <div>
                    <label>Edad</label>
                    <input type="text" value={age}onChange={onAgeChangeHnd}/>
                </div>
                <div>
                    <input type="button" value="Atras" onClick={onBackBtnClickHnd}/>
                    <input type="submit" value="Editar Empleado" />
                </div>
            </form>
        </div>
    );

};

export default EditEmployee;