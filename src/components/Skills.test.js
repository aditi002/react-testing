import '@testing-library/jest-dom';
import { logRoles, render, screen } from '@testing-library/react';

import { Skills } from "./Skills";

describe("Skills",()=>{
    const skills =[
        {id:1, name:'plumbing'},
        {id:2,name:"carpentry"},
        {id:3,name:"electrical"}
    ]
    test('renders correctly',()=>{
        const view = render(<Skills skills={skills}/>)
        logRoles(view.container)
        const h2Elem = screen.getByRole('heading',{
            level: 2
        })
        expect(h2Elem).toBeInTheDocument()

        const listElem = screen.getByRole('list')
        expect(listElem).toBeInTheDocument()
    })
    test('renders all list items', ()=>{
        render(<Skills skills={skills} />)
        const itemsElem = screen.getAllByRole('listitem')
        expect(itemsElem).toHaveLength(3)
    })
    test('renders all list items in a order', () => {
        render(<Skills skills={skills} />)
        const itemsElem = screen.getAllByRole('listitem')
        expect (itemsElem[0]).toHaveTextContent('plumbing')
    })
    test('login button is rendered', ()=>{
        render (<Skills skills={skills}/>)
        const loginBtn=screen.getByRole('button',{
            name: "login"
        },{timeout: 2000})
        expect (loginBtn).toBeInTheDocument()
    })
    test ('start working is not rendered',()=>{
        render(<Skills skills={skills}/>)
        const startWorkingBtn=screen.queryByRole('button',{
            name : 'start working'
        })
        expect(startWorkingBtn).not.toBeInTheDocument();
    })
    test('start working is rendered later', async () => {
        render(<Skills skills={skills}/>)
        const startWorkingBtn=await screen.findByRole('button',{
            name : 'start working'
        })
        expect(startWorkingBtn).toBeInTheDocument()
    })
})