import "./curpContainer.css"
import "./footer.css"
import { Outlet, Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";



const Home = () => {
    const login = async () => {
        
            alert('Mensaje de alerta');
        
        
    }
    const navigate = useNavigate();
    
        const navigateToCita = async () => {
            navigate("/cita/")
        }
   
    
        const { register, formState: { errors }, watch, handleSubmit } = useForm({
            
        });
        const onSubmit = (data) => {
            console.log(data);
        }

    return(
        
        <div className="a"> 
        <div className="a3"></div>
            <div className="a2">
                <div className="b">
                    <div>
                    <h1 className="p1">Campañas activas de vacunación contra Covid-19 (ZMG)</h1>
                    <div className="c">


                        <div className="c1">
                            <div className="imgC"></div>
                            <div className="text1">personas de 18 y más</div>
                            <div className="num">1</div>
                            <div className="text2">Primera dosis</div>
                        </div>


                        <div className="c2">
                            <div className="imgC"></div>
                            <div className="text1">personas de 18 y más</div>
                            <div className="num">2</div>
                            <div className="text2">Segunda dosis</div>
                            <div className="text3">ASTRA ZENCA</div>
                            <div className="text4">Primera dosis aplicada antes del 15 de Agosto</div>
                        </div>

                    

                    </div>
                    <div className="d">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="textD1">Comenzar ahora</div>
                            <div className="textD2">Ingresa tu CURP para agendar una cita o para <button onClick={login} className="buttonD2">cancelar una cita</button> ya registrada</div>
            
                            <div>
                                
                                <input className="curpInput" type="text" {...register('nombre', {
                                    required: true,
                                    maxLength: 10
                                })} />
                                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
                            </div>
                            <input  onClick={navigateToCita} className = 'buttonD3 'type="submit" value="Enviar" />
                            <input type="text" id="uCurp" className="curpInput" placeholder="        introduce tu CURP "></input>
                            <div className="textD3">Si no conoces tu CURP</div>
                            <button onClick={login} className="textD4">consulta aquí</button>
                        </form>
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
            <button className="arrowBlue"></button>
            <button className="point"></button>
            
        </div>
        
       
    )
}
export default Home