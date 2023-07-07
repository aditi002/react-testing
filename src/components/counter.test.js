import {render} from 'react-dom';
import Counter from './counter';
import userEvent from '@testing-library/user-event';
import { logRoles } from '@testing-library/react';
describe ('Counter', ()=>{
    test ('should render correctly', () => {
        render (<Counter/>)
        const h1Elem=screen.getByRole('heading', {
            level:1
        })
        const increaseBtn = screen.getByRole('button', {
            name:"Increase"
        })
        expect(h1Elem).toBeInTheDocument()
        expect(increaseBtn).toBeInTheDocument()
        
    })
    test('should increase count with btn click',async () => {
        render(<Counter/>)
        const increaseBtn = screen.getByRole('button', {
            name:"Increase"
        })

        await act(()=> userEvent.click(increaseBtn))
    
        const h1Elem= screen.getByRole('heading',{
            level:1
        })
        expect(h1Elem).toHaveTextContent(2)
    })
    test('should set the initial value from input field',async()=> {
       const view = render(<Counter />)
       logRoles(view.container)

       const inputElem = screen.getByRole('spinbutton')
       await act(()=> userEvent.type(inputElem,20))
       const setBtn = screen.getByRole('button', {name:"Set"})
       await act(()=> userEvent.click(setBtn))

       const h1Elem = screen.getByRole('heading',{
        level: 1
       })
       expect(h1Elem).toHaveTextContent(20)
       const increaseBtn = screen.getByRole('button', {
        name: "Increase"
       })
       await act(()=> userEvent.click(increaseBtn))
       expect(h1Elem).toHaveTextContent(21)
    })
    test('should have proper order of focus',()=>{
        render(<Counter/>)
        const increaseBtn = screen.getByRole('button', {
            name:"Increase"
        })
        const inputElem = screen.getByRole('spinbutton')
        const setBtn = screen.getByRole('button', {name:"Set"})

        userEvent.tab()
        expect(increaseBtn).toHaveFocus()
        userEvent.tab()
        expect(inputElem).toHaveFocus()
        userEvent.tab()
        expect(setBtn).toHaveFocus()

    })
})