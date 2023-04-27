export interface IEmployee{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}
export const dummyEmployeeList : IEmployee[] = [{
    id: new Date().toJSON().toString(),
    firstName: "Nombre_1",
    lastName: "Apellido_1",
    email: "email_1@gmail.com",
    age: 1,
}]