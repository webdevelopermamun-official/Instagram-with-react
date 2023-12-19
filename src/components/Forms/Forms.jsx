import "./Forms.scss"

const Forms = ({action, children}) => {
  return (
    <>
        <div className="input_form">
            <form action={action}>
                {children}
            </form>
        </div>
    </>
  )
}

export default Forms