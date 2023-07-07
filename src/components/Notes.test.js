import { render } from "@testing-library/react"
import Notes from "./Notes"
import { server } from "../mocks/server"

describe('Notes',()=>{
    test('should render correctly', async ()=> {
        render(<Notes/>)
        const h1Elem = screen.getByRole('heading', {
            level: 1
        })
        expect(h1Elem).toBeInTheDocument()

        const listElem = screen.getByRole('list')
        expect(listElem).toBeInTheDocument()

        const itemElem = await screen.findAllByRole('listitem')
        expect(itemElem).toHaveLength(2)

    })
    test('should render error message',()=> {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/todos'),
            (req, res, ctx) => {
                return res(ctx.status(500))
            }
        )
        render(<Notes/>)
        const errElem = screen.findByText('error fetching data')
        expect(errElem).toBeInTheDocument()
    })
    test('should call the delete function'), async () => {
        const mockFn = 
    }
})