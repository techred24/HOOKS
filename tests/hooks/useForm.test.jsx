import { act, renderHook } from "@testing-library/react";
import React from "react";
import { useForm } from '../../src/hooks/useForm'

describe('Tests on useForm', () => {
    const initialForm = {
        name: 'Rafael',
        email: 'flubber@gmail.com'
    }
    test('It must return default information', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
          });
    });

    test('It must change the name in the form', () => {
        const newValue = 'Flavio';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('It must reset the form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: 'Flavio' } });
            onResetForm();
        });
        expect(result.current.formState).toEqual(initialForm);
    });
})