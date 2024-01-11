import iconCart from "../assets/cart4.svg"

const CartWidget = () => {
    return(
    <button type="button" className="btn btn-danger position-relative">
            <img src={iconCart} alt="Carrito" width={22}/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-dark">2</span>
    </button>

    )
}

export default CartWidget