import  {typesEmpleoyees} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where,doc,deleteDoc} from "@firebase/firestore";

//SEARCH

export const searchAsyn = (employee) => {

    return async(dispatch) => {
       
        const employeeCollections = collection(db,"employees");
        const q = query(employeeCollections,where("nombre","==",employee))
        const datos = await getDocs(q);
        //console.log(datos)
        const empleado = [];
        datos.forEach((docu) => {
            empleado.push(docu.data())
        }) 
        console.log(empleado)
        dispatch(searchSync(empleado))
    }
}


export const searchSync = (employee) => {
    return{
        type: typesEmpleoyees.search,
        payload: employee
    }
}

//DELETE

export const deleteEmployeeAsync = (email) =>{
    return async(dispatch) => {

        const estCollection = collection(db,"employees");
        const q = query(estCollection,where("correo","==",email))
       
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db,"employees",docu.id));
        })
        dispatch(deleteSync(email));
    }
}

export const deleteSync = (email) => {
    return{
        type: typesEmpleoyees.delete,
        payload: email
    }
}


//READ

export const listEmployeeAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "employees"));
        const empleados = [];
        querySnapshot.forEach((doc) => {
            empleados.push({
                ...doc.data()
            })
        });
        dispatch(listSync(empleados));
    }
}

export const listSync = (employees) => {
    return {
        type: typesEmpleoyees.list,
        payload: employees
    }
}


//CREATE

export const registerEmployeeAsync = (newEmployee) => {

    return(dispatch) => {

        addDoc(collection(db,"employees"),newEmployee)
        .then(resp => {
            dispatch(registerEmployeeSync(newEmployee))
            dispatch(listEmployeeAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
 }

export const registerEmployeeSync = (employee) => {
    return{
        type: typesEmpleoyees.register,
        payload: employee
    }

}