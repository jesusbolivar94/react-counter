import {render, screen} from '@testing-library/react'
import {FirstApp} from '../../src/FirstApp'

describe('Pruebas en <FirstApp />', function () {

    const title = 'Hola, soy Jesus'
    const subTitle = 'Soy un subtitulo'

    it('Debe de hacer match con el snapshot', function () {

        const { container } = render( <FirstApp title={ title } /> )
        expect( container ).toMatchSnapshot()

    })

    it('Debe de mostrar el mensaje, "Hola, soy Jesus"', function () {

        render( <FirstApp title={ title } /> )
        expect( screen.getByText(title) ).toBeTruthy()

    })

    it('Debe de mostrar el titulo en un h1', function () {

        render( <FirstApp title={ title } /> )
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title )

    })

    it('Debe de mostrar el subtitulo enviado por props', function () {

        render( <FirstApp title={ title } subtitle={ subTitle } /> )
        expect( screen.getByText( subTitle ) ).toBeTruthy()

    })

})