import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ( { value } ) => {

    const [ counter , setCounter ] = useState( value )

    const handleAdd = () =>  setCounter( counter + 1 )
    const handleSubtract = () => setCounter( counter - 1 )
    const handleReset = () => setCounter( value )

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <div className="gap-2">
                <button type="button"
                        onClick={ handleAdd }
                        className="text-green-700 hover:text-white border border-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                    +1
                </button>
                <button type="button"
                        onClick={ handleSubtract }
                        className="text-red-700 hover:text-white border border-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800">
                    -1
                </button>
                <button type="button"
                        aria-label="btn-reset"
                        onClick={ handleReset }
                        className="text-stone-700 hover:text-white border border-stone-600 hover:bg-stone-500 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2 dark:border-stone-500 dark:text-stone-500 dark:hover:text-white dark:hover:bg-stone-600 dark:focus:ring-stone-800">
                    Reset
                </button>
            </div>
        </>
    )

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}