import "./../styles/Home.style.css";
import "./../interface/Employee.type";
import './EmployeeList'
import { useState } from "react";
import { IEmployee, PageEnum, dummyEmployeeList } from "./../interface/Employee.type";
import EmployeesList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const Home = () => {

    const [employeeList, setEmployeeList] = useState(
        dummyEmployeeList as  IEmployee[]);
    
    const [shownPage, setShownPage] = useState(PageEnum.list);

    const onAddEmployeeClickHnd = () =>{
        setShownPage(PageEnum.add);
    }
    
    const showListPage = () => {
        setShownPage(PageEnum.list);
    }

    const addEmployeeHnd = (data : IEmployee) =>{
        setEmployeeList([...employeeList, data]); 
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
                        <input type="button" 
                        value="Agregar Empleado" 
                        onClick={onAddEmployeeClickHnd} />
                        <EmployeesList list= {employeeList}/>
                    </>)
                }

                {shownPage === PageEnum.add && (
                    <AddEmployee onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployeeHnd}/>)
                }

            </section>
        </>
    );
};
export default Home;