import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', () => {
    test('renders posts if request succeeds', async () => {

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post'}]
        });

        render(<Async />);

        const postsElement = await screen.findAllByRole('listitem', {}, {timeout: 10000});
        expect(postsElement).not.toHaveLength(0);
    });
});