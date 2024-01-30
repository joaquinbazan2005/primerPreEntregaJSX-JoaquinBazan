import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import productos from "./json/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams(); // Para capturar los parametros de la url

    useEffect(() => {
        const promesa = new Promise(resolve => {
            resolve(id ? productos.filter(item => item.categoria === id) : productos);
        })
        promesa.then(data => {
            setItems(data)
            console.log(data)
        })
    }, [id])

    return (
        <div className="alert alert-danger container my-3">
            <div className="row">
                <div className="col text-center">
                    <ItemList items={items}/>
                    <ItemCount stock={10}/>
                </div>
            </div>
        </div>
    )
}


export default ItemListContainer