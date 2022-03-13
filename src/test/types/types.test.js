import '@testing-library/jest-dom'
import { types, typesEmpleoyees } from '../../types/types'

describe('Verificar types', ()=>{
    test('comprobar la estructura de types', () =>{
        //Creo mesa de trabajo
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register'
        })
    })

    test('comprobar la estructura de typesEmployes', ()=>{
        //Creo mesa de trabajo
        expect(typesEmpleoyees).toEqual({
            register: 'Register',
            list: 'List',
            delete: 'Delete',
            search: 'search'
        })
    })
})

