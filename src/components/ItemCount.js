import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import '../styles.css'

export const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1);

    const incrementar = () => {
        if(stock>counter) {
            setCounter(counter+1); 
        }else {
            alert("No hay mas stock de este Producto")
        }
        

    }

    const decrementar = () => {
        if(counter>1) {
            setCounter(counter-1);
   
        } else {
            alert("no se puede desminuir mas")
        }
        

    }

    const respuesta = () => {
        alert(`Agregaste ${counter}`)
    }

    return (
        <div className="container my-5">
            <h2> {counter} </h2>
            <div className="botodnes text-center">
                <div>
                    <Button variant="primary p-2 m-5" size="lg"  onClick={decrementar}>-</Button>
                    <Button variant="primary p-2 m-5" size="lg" onClick={incrementar}>+</Button>
                </div>
                <div>
                    <Button variant="primary p-2 m-5 "  size="lg" onClick={respuesta}>
                        Agregar al carrito
                    </Button>
            </div>
            </div>
        </div>

    )
}
