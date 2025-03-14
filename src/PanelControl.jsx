import "./PanelControl.css";
import MenuLateral from './MenuLateral'
import Contenido from "./Contenido";


const PanelControl =()=>{
    return (
        <section className="panel-control">
            <MenuLateral/>
            <Contenido/>
        </section>
    )

}
export default PanelControl