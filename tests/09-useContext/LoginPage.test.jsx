import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Tests on <LoginPage />', () => {
    test('It must show the component without user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    })

    test('It must call setUser when clicking on the button', () => {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith({ id:123, name: 'Rafael', email:'rafael@temich.com' })
    });
})