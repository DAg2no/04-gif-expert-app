import { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault(); // para que no se recarge la pagina
        if( inputValue.trim().length <= 1) return; // si se ingresa un mayor a 1, se aprueba

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit } aria-label='form'> {/* capturando el formulario con label */}
            <input 
                type="text" // input de tipo texto
                placeholder="Buscar gifs" // lo que se mostrara en la input
                value={ inputValue } // valor de la input
                onChange={ onInputChange } // para enviar el valor
            />
        </form>
    )
}

// propTypes
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}