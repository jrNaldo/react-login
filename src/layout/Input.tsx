import { forwardRef, useContext, type InputHTMLAttributes } from "react"
import { ThemeContext } from "../context/ThemeContext"

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({name, type, minLength, maxLength,placeholder, ...rest}, ref) => { // tipagem das props e tipagem da ref
    const {theme} = useContext(ThemeContext)
    
    return <input
                className={`grow px-3 border rounded-2xl p-1 sm:p-2 ${theme==='dark'?'placeholder:text-white':'placeholder:text-black'}`}
                {...rest}
                placeholder={placeholder}
                name={name}
                type={type}
                minLength={minLength}
                maxLength={maxLength}
                ref={ref}
            />
})


export default Input