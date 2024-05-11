import casas from "../../assets/img/casas.jpg"
import terrenos from "../../assets/img/terrenos.jpg"
import navesIndustriales from "../../assets/img/nave-industrial.jpg"
import ranchos from "../../assets/img/rancho.jpg"
import departamento from "../../assets/img/departamento.jpg"

const Categoríes = () => {
    return (
        <div className="px-[15%]">
            <h1 className="text-2xl font-bold text-center text-gray-800">¿Qué es lo que buscas?</h1>
            <div className="flex justify-between items-center flex-wrap my-6">
                <img className="w-[16vw]  xs:w-[80vw] min-w-[200px] h-[36vh] object-cover rounded-3xl" src={casas} alt="casas" />
                <img className="w-[16vw] min-w-[200px] h-[36vh] object-cover rounded-3xl" src={terrenos} alt="terrenos" />
                <img className="w-[16vw] min-w-[200px] h-[36vh] object-cover rounded-3xl" src={navesIndustriales} alt="navesIndustriales" />
            </div>
            <div className="flex justify-between items-center flex-wrap my-6">
                <img className="w-[32vw] min-w-[200px] h-[36vh] object-cover rounded-3xl" src={ranchos} alt="ranchos" />
                <img className="w-[32vw] min-w-[200px] h-[36vh] object-cover rounded-3xl" src={departamento} alt="departamento" />
            </div>
        </div>
    )
}

export default Categoríes
