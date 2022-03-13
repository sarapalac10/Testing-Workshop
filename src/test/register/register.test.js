import '@testing-library/jest-dom'
import { registerSincrono } from '../../actions/actionRegister'
import { types } from '../../types/types'

describe('Verificar registro', () => {
    test('Se envía payload y se espera registro correcto', () =>{
        //Mesa de trabajo
        let email = 'mail@mail.com'
        let password = '12345'
        let name = 'usuario666'
        let register = registerSincrono(email,password,name)

        expect(register).toEqual({
            type: types.register,
            payload: {
                email,
                password,
                name
            }
        })
    })


})
