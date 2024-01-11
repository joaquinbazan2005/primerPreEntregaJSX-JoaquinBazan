const ItemListContainer = ({mensaje}) => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col text-center">
                <div class="alert alert-danger p-3 display-5" role="alert">{mensaje}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer