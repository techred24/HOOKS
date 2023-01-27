import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Tests on <MainApp />', () => {
    test('It should show HomePage', () => {
        render(
        <MemoryRouter>
            <MainApp/>
        </MemoryRouter>
        )

        // screen.debug();
        expect( screen.getByText('HomePage') ).toBeTruthy();
    });

    test('It should show LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
    })
});