import { render, screen, fireEvent } from "@testing-library/react"
import Container from "@/components/Container"

describe("Game integration testing", () => {
    test("The winning message is displayed when the correct square is clicked", () => {
        jest.spyOn(Math, "random").mockReturnValue(0)

        render(<Container />)

        const squares = screen.getAllByRole("button")

        fireEvent.click(squares[0])

        const result = screen.getByText(/you won!/i)

        expect(result).toBeInTheDocument()

        jest.restoreAllMocks()
    })

    test("The losing message is displayed when the incorrect square is clicked", () => {
        jest.spyOn(Math, "random").mockReturnValue(0)

        render(<Container />)

        const squares = screen.getAllByRole("button")

        fireEvent.click(squares[1])

        const result = screen.getByText(/you lost!/i)

        expect(result).toBeInTheDocument()

        jest.restoreAllMocks()
    })

    test("Restart button resets the game", () => {
        jest.spyOn(Math, "random").mockReturnValue(0)

        render(<Container />)

        const squares = screen.getAllByRole("button")

        fireEvent.click(squares[0])

        const result = screen.getByText(/you won!/i)
        const restart = screen.getByRole("button", {
            name: /restart game/i,
        })

        expect(result).toBeInTheDocument()
        expect(restart).toBeInTheDocument()

        fireEvent.click(restart)

        expect(screen.queryByText(/you won!/i)).not.toBeInTheDocument()

        const resetSquares = screen.getAllByRole("button")

        resetSquares.forEach((square) => {
            expect(square).toBeEnabled()
        })

        jest.restoreAllMocks()
    })
})