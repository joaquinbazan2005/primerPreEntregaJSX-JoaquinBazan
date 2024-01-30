import { useEffect, useState } from "react"
import productos from "./json/productos.json"
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let producto = productos.find(item => item.id === 1);
                resolve(producto);
            }, 2000)
        })
        promesa.then(data => {
            setItem(data);
            console.log(data)
        })

    }, []);

    return(
        <>
            <ItemDetail item={item} />
            <ItemCount stock={10} />
            <ItemDetailContainer item={productos} />
        </>
    )
}

export default ItemDetailContainer