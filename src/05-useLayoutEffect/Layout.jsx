import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples'
export const Layout = () => {
  const { increment, counter } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log({ data, isLoading, hasError });
    // if variable data contains no data yields undefinied and is equivalent to false, that's why the second condition doesn't take place
    // but if variable data contains data yields an array and is equivalent to true, so the second condition take place and return data in position 0
    // const { author, quote } = !!data && data.length && data[0];
    
    const quoteData = !!data && data.length && data[0];
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
          (isLoading)
                ? 
                  <LoadingQuote />
                : 
                  <Quote { ...quoteData } />
        }

        <button
            className='btn btn-primary'
            onClick={ () => increment() }
            disabled={isLoading}
            >
          Next quote
        </button>
    </>
  )
}
