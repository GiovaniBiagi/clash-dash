import React,{ useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField'
import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return (
        <>
            <TextField inputRef={inputRef} {...rest} />
            { error && <span>{error}</span>}
        </>
    )
}