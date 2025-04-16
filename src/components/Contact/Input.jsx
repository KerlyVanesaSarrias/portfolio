import { forwardRef } from 'react'


// eslint-disable-next-line react/display-name, react/prop-types
const Input = forwardRef(({name, label, value, onChange, id, type = 'text', placeHolder, errorMessage, ...restProps}, ref) => {

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