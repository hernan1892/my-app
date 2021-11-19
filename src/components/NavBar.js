import '../styles.css'
import { CartWidget } from './CartWidget'

export const NavBar = () => {

    return (
    
    <header className="header">
        
           
               <h1>HJBWEB</h1>
           
           
               <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contactos</li>
                </ul>
               </nav>
               <CartWidget/>
           
    </header>
    )

}