import {render} from '@testing-library/react'
import {FirstApp} from '../../src/FirstApp'

describe('Pruebas en <FirstApp />', function () {

    /*it('Debe de hacer match con el snapshot', function () {

        const title = 'Hola soy Jesus'
        const { container } = render( <FirstApp title={ title } /> )

        expect( container ).toMatchSnapshot()

    })*/

    it('Debe de mostrar el titulo en un h1', function () {

        const title = 'Hola soy Jesus'
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> )

        expect( getByText( title ) ).toBeTruthy()

        /*const h1 = container.querySelector('h1')
        expect( h1.innerHTML ).toBe( title )*/

        expect( getByTestId( 'test-title' ).innerHTML ).toContain( title )

    })

    it('Debe de mostrar el subtitulo enviado por props', function () {

        const title = 'Hola soy Jesus'
        const subTitle = 'Soy un subtitulo'
        const { getByText } = render(
            <FirstApp title={ title } subtitle={ subTitle } />
        )

        expect( getByText( subTitle ) ).toBeTruthy()

    })

})