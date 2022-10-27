import { act, render, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";


describe('Tests on useCounter', () => {
    test('It must return default values', () => {
        const { result } = renderHook(() => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe( 10 );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('It must generate the counter with value equals to 100', () => {
        const { result } = renderHook(() => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
    });
    
    test('It must increment counter', () => {
        const { result } = renderHook(() => useCounter() );
        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment(2);
        });
        expect( result.current.counter ).toBe(13);
    });
    test('It must decrement counter', () => {
        const { result } = renderHook(() => useCounter() );
        const { counter, decrement } = result.current;
        act(() => {
            decrement();
        });
        expect( result.current.counter ).toBe(9);
    });
    test('It must reset counter', () => {
        const { result } = renderHook(() => useCounter() );
        const { decrement, reset } = result.current;
        act(() => {
            decrement();
            decrement();
            reset();
        });
        expect( result.current.counter ).toBe(10);
    });
});