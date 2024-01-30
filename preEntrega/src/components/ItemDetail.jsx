const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h2>{item.title}</h2>
                    <p><span>{item.descripcion}</span></p>
                    <p><b>${item.precio}</b></p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail