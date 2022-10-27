import React from "react"
import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"


describe('Tests on <MultipleCustomHooks />', () => {
    test('It must show the default component', () => {
        render(<MultipleCustomHooks/>);
        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();
        screen.debug();
    });
});