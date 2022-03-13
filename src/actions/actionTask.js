import { addDoc, collection, getDocs, query, where } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export const TaskAsincrono = (tarea,uid) => {
    
    return async() => {
        const newTask = {
            tarea,
            usuario: uid
        }
        await addDoc(collection(db,"task"),newTask)
    }
}



export const TaskBuscar = (uid) => {
    
    return async() => {

             const taskCollections = collection(db,"task");
             const q = query(taskCollections,where("usuario","==",uid))
             const datos = await getDocs(q);
             const tareas = [];
             datos.forEach((docu) => {
                 tareas.push(docu.data())
             })

             console.log(tareas);
    }
}




