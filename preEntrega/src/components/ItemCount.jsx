import { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if(counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    const onAdd = () => {
        if(counter <= itemStock){
            setItemStock(itemStock - counter);
            setCounter(1);
            console.log("Agregaste " + counter + " Productos al carrito. Quedan " + (itemStock - counter) + " Productos disponibles");
        }
    }

    return(
        <>
            <div className="row my-1">
                <div className="col-md-2">
                    <div className="btn-group">
                        <button type="button" className="btn btn-light" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-light">{counter}</button>
                        <button type="button" className="btn btn-light" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-2">
                    <button type="button" className="btn btn-light" onClick={onAdd}>Agregar Al Carrito</button>
                </div>
            </div>
        </>
    )
}


export default ItemCount