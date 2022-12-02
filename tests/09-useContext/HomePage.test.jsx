import { screen, render } from "@testing-library/react";
import React from "react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Tests on <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Flubber'
    }

    test('It must show the component without user', () => {
        render(
            <UserContext.Provider value={{ user: null}}>
                <HomePage />
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
        // screen.debug()
    });

    test('It must show the component with user', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        // expect( preTag.innerHTML ).toBe(JSON.stringify(user, null, 3));
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() );
    })
})