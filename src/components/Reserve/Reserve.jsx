import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reserve = () => {

    const initialValue = {
        name: "",
        quantity: "",
    };

    const [data, setData] = useState(initialValue);

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);//mostramos por consola la información del formulario(data)
        const stringData = JSON.stringify(data);
        localStorage.setItem("InfoReserva", stringData)
        setData(initialValue);//limpiamos el formulario
        navigate("/")// redireccionamos a home
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Introduce tu nombre"
                    onChange={handleOnChange}
                />
                <input
                    type="text"
                    name="quantity"
                    placeholder="Introduce cuantos sois"
                    onChange={handleOnChange}
                />
                <button onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    )
}

export default Reserve