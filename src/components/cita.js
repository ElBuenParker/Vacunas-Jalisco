import "./footer.css"
import { Outlet, Link, useNavigate } from "react-router-dom"
import "./cita.css"




const Cita = () => {

    const login = async () => {
        
    }
    const navigate = useNavigate();
    
        const navigateToCita = async () => {
            navigate("/cita/")
        }
    return(
        <div className="aa"> 
        <div className="aa3"></div>
            <div className="aa2">
                <div className="bb">
                    <div>
                    <button className="check"></button>
                    <div className="pp1">Registro concluido</div>
                    <button onClick= {login} className="cancelar">Quiero cancelar mi cita </button>
                    <div className="cc">


                        <div className="cc1">
                            <div className="imgCc"></div>
                            <div className="textt1">personas de 18 y más</div>
                            <div className="numm">2</div>
                            <div className="textt2">Segunda dosis</div>
                            <div className="textt3">ASTRA ZENCA</div>
                            <div className="textt4">Zapopan</div>
                            <div className="CurpName">CURP: </div>
                        </div>


                        <div className="cc2">
                            <div className="modulo">Módulo </div>
                            <div className="lugar">Auditorio Benito Juarez</div>
                            <div className="direccion">Dirección </div>
                            <div className="dir">Av. Mariano Barcenas s/n Col Auditorio, 45910 Zapopan, Jalisco</div>
                            <div className="dir2"></div>
                            <div className="dir3"></div>
                            <div className="fecha">Fecha y Hora </div>
                            <div className="fechaHora">        .</div>
                        </div>

                        <div className="aviso">Ya tienes asegurado el lugar y hora para tu vacunación, ahora, para asegurar tu dosis es muy importante que tambien te registres en la plataforma federal. Ingresa a https://mivacuna.salud.gob.mx/ para obtener tu expediente de vacuanción. Recomendaciones de vacunacion:</div>
                            

                    </div>
                            
                    </div>
                        
                </div>



            </div>
            <button className="foot1"></button>
            <button className="foot2"></button>
            <button className="foot3"></button>
            <button className="foot4"></button>
            <button className="foot5"></button>
            <button className="foot6"></button>
            <button className="foot7"></button>
        
            
        </div>
    )
}
export default Cita