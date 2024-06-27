
const Button = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={`${className} font-poppins font-semibold py-4 duration-100 rounded-[2.5rem]`}>{children}</button>
  )
}

export default Button