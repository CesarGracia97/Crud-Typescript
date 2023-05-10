import { IEmployee } from "../interface/Employee.type";
import "../styles/AddEmployee.style.css"
import { useState } from "react"

type Props ={
    onBackBtnClickHnd : () => void;
    onSubmitClickHnd : (data: IEmployee) => void;
}

const AddEmployee = (props: Props) => {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[age, setAge] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd} = props

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
        //Data es un objeto de Empleados y este lo desfragmenta en todas sus variables en donde agarra su informacion por medio de un evento
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age
        };
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    };
    
    return(
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
                    <input type="submit" value="Agregar Empleado" />
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;