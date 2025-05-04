import React from 'react'

import {fireEvent, render, screen} from '@testing-library/react'
import Greeting from '../Greeting'
import '@testing-library/jest-dom'

describe('greeting tests', () => {

    test('renders the initial greeting', () => {
        render(<Greeting />)
        const greetingElement = screen.getByText(/Hello, user!/i)
        expect(greetingElement).toBeInTheDocument();
    })

    test('changes greeting message when button clicked',  () => {
        render(<Greeting />)
        const greetingElement = screen.getByText(/Change Greeting/i)
        fireEvent.click(greetingElement)
        const updatedMsg =  screen.getByText(/Welcome, Guest!/i)

        expect(updatedMsg).toBeInTheDocument();
    })

})

