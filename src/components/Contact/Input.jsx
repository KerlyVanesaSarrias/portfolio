import classNames from 'classnames'
import React, { forwardRef } from 'react'


const Input = forwardRef(({
    name, label, value, onChange, id,
    type = 'text', placeHolder, errorMessage, ...restProps
}, ref) => {

    return (
        <div >
            <label  htmlFor={name}>{label}</label>
            <input ref={ref}  type={type} 
                value={value} onChange={onChange} name={name} 
                id={id}
                placeholder={placeHolder}
                {...restProps} 
            />
            <span >{errorMessage}</span>
        </div>
    )
});

export default Input