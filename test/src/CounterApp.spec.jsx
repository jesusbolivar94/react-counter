import {fireEvent, render, screen} from '@testing-library/react'
import {CounterApp} from '../../src/CounterApp'
import {expectedError} from '@babel/core/lib/errors/rewrite-stack-trace.js'

describe('Pruebas en el <CounterApp /', function () {

    const value = 100

    it('Debe de hacer match con el snapshot ', function () {

        const { container } = render( <CounterApp value={ value } /> )
        expect( container ).toMatchSnapshot()

    })

    it('Debe de mostrar el valor inicial de 100', function () {

        render( <CounterApp value={ value } /> )
        expect( screen.getByText(100) ).toBeTruthy()

    })

    it('Debe de incrementar con el boton +1', function () {

        render( <CounterApp value={ 10 } /> )
        fireEvent.click( screen.getByText( '+1' ) )
        expect( screen.getByText( 11 ) ).toBeTruthy()

    })

    it('Debe de decrementar con el boton -1', function () {

        render( <CounterApp value={ 10 } /> )
        fireEvent.click( screen.getByText( '-1' ) )
        expect( screen.getByText( 9 ) ).toBeTruthy()

    })

    it('Debe de resetear con el boton reset', function () {

        render( <CounterApp value={ 10 } /> )
        fireEvent.click( screen.getByText( '-1' ) )
        expect( screen.getByText( 9 ) ).toBeTruthy()

        fireEvent.click( screen.getByRole( 'button', { name: 'btn-reset' } ) )
        expect( screen.getByText( 10 ) ).toBeTruthy()

    })

})