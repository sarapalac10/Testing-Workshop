import React, {useEffect} from 'react';
import { TaskAsincrono,TaskBuscar } from '../actions/actionTask';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';

export const Task = ({uid}) => {

    console.log(uid)

    const dispatch = useDispatch()

    const [ values, handleInputChange ] = useForm({
        tarea: ""
    })

    const {tarea} = values;

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(tarea,uid);
       dispatch(TaskAsincrono(tarea,uid))
    }

    useEffect(() => {
        dispatch(TaskBuscar(uid))
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Adicione Tarea</label>
                <input 
                name="tarea"
                value={tarea}
                onChange={handleInputChange}
                />
                <button>Guardar</button>
            </form>
            <h1>Tareas por usuario</h1>
            <table>
                 
            </table>
        </div>
    )
}
