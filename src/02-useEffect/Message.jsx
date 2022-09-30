import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({ x:0, y:0 });
    useEffect(() => {
        const onMouseMove = ({x, y}) => {
            // const coords = { x, y };
            // console.log(coords);
            // If removeEventListener not removed, onMouseEvent still executes and tries to change the state but the component doesnt exist anymore
            setCoords({ x, y });
        }
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    })
    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify( coords ) }
        </>
    )
}