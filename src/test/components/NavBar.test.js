import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { Navbar } from '../../components/Navbar'

describe('Pruebas en componente NavBar', () => {
    test('Validación de render de NavBar', () => {
        //Crear la mesa de trabajo
        const wrapper = shallow(<Navbar />)

        expect(wrapper).toMatchSnapshot()

    })
})