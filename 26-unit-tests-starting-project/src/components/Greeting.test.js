import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        render(<Greeting />);

        const helloWorldElement = screen.getByText('Hello World!');

        expect(helloWorldElement).toBeInTheDocument();

    });

    test('renders "good to see you" if the button was NOT clicked', () => {
        render(<Greeting />);

        const goodToSeeElement = screen.getByText('good to see you', { exact: false });

        expect(goodToSeeElement).toBeInTheDocument();

    });

    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Asserts
        const changedTextElement = screen.getByText('Changed!');
        expect(changedTextElement).toBeInTheDocument();

    });

    test('does NOT renders "good to see you" if the button was clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByText('Change Text');
        userEvent.click(buttonElement);

        const outputText = screen.queryByText('good to see you', {exact: false});
        
        expect(outputText).toBeNull();
    });

    test('does NOT renders "Changed!" if the button was NOT clicked', () => {
        render(<Greeting />);

        const outputText = screen.queryByText('Changed!');
        
        expect(outputText).toBeNull();
    });
});