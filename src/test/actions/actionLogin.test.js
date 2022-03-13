import '@testing-library/jest-dom'
import { loginSincrono, logoutSincrono } from '../../actions/actionLogin'
import { types } from '../../types/types'

describe('Verificar el login', () => {
    test('Login síncrono',() => {
        //Mesa de trabajo
        const id= 1234
        const displayname = 'usuario'
        const login = loginSincrono(id, displayname)
        console.log('login', login);
    
        expect(login).toEqual({
            type: 'login', payload: { id: 1234, displayname: 'usuario' } 
        })
    })

    test('Logout síncrono', ()=> {
        //Mesa de trabajo
        const logout = logoutSincrono()

        expect(logout).toEqual({
            type: types.logout
        })
    })
})

