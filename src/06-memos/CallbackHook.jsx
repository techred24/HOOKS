import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const increment = useCallback(
        // This is the function 'increment'
        (value) => {
            if (value === undefined) return
            setCounter( (c) => c + value );
        },
        []
    );
    // This is now working because 'increment' is always the same
    useEffect(() => {
        increment();
    }, [increment]);


    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

  return (
    <>
        <h1>useCallback Hook: { counter } </h1>
        <hr />

        <ShowIncrement increment={increment} />
    </>
  )
}
