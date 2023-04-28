import "../styles/Home.style.css";
import "../interface/Employee.type";
import './EmployeeList'
import { useState } from "react";
import { IEmployee, PageEnum, dummyEmployeeList } from "../interface/Employee.type";
import EmployeesList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {

    const [employeeList, setEmployeeList] = useState(
        dummyEmployeeList as  IEmployee[]);
    
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

    const onAddEmployeeClickHnd = () =>{
        setShownPage(PageEnum.add);
    };
    
    const showListPage = () => {
        setShownPage(PageEnum.list);
    };

    const addEmployeeHnd = (data : IEmployee) => {
        setEmployeeList([...employeeList, data]); 
    };

    const deleteEmployee = (data: IEmployee)=> {
        //Para Index, actulizara el nuevo record
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [ ...employeeList];

        tempList.splice(indexToDelete, 1);
        setEmployeeList(tempList);
    }

    const editEmployeeData = (data: IEmployee) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data)
    }

    const updateData = (data : IEmployee) => {
        const filteredData =  employeeList.filter(x => x.id === data.id)[0];
        const indexOfRecord =employeeList.indexOf(filteredData);
        const tempData = [...employeeList];
        tempData [indexOfRecord] = data;
        setEmployeeList(tempData)
    }

    return (
        <>
            <article className="article-header">
                <header>
                    <h1> Aplicacion Simple CRUD de Empleados React-TS</h1>
                </header>
            </article>
            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <>
                        <input 
                        className="add-employee-btn"
                        type="button" 
                        value="Agregar Empleado" 
                        onClick={onAddEmployeeClickHnd} />
                        <EmployeesList 
                        list= {employeeList} 
                        onDeleteClickHnd={deleteEmployee}
                        onEdit={editEmployeeData}/>
                    </>)
                }

                {shownPage === PageEnum.add && (
                    <AddEmployee onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployeeHnd}/>)
                }
                {shownPage === PageEnum.edit && <EditEmployee data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData}/>}
            </section>
        </>
    );
};
export default Home;