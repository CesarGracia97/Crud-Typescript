import "./../styles/Home.style.css";
import "./../interface/Employee.type";
import './EmployeeList'
import { useState } from "react";
import { IEmployee, dummyEmployeeList } from "./../interface/Employee.type";
import EmployeesList from "./EmployeeList";

const Home = () => {

    const [employeeList, setEmployeeList] = useState(
        dummyEmployeeList as  IEmployee[]);

    return (
        <>
            <article className="article-header">
                <header>
                    <h1> Aplicacion Simple CRUD de Empleados React-TS</h1>
                </header>
            </article>
            <section className="section-content">
                <EmployeesList />
            </section>
        </>
    );
};
export default Home;