import "./modal.css"

const Modal = ({children, handleToggle}) => {


  return (
    <div className="modal">
        <div className="overlay" onClick={handleToggle}></div>
        <div className="modalContent">
            <p className="closeModal" onClick={handleToggle}>X</p>
            {children}
        </div>
    </div>
  )
}

export default Modal