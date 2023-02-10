import { useState } from "react";
import ReactDom from "react-dom/client";

function Fav(){
    const[color,setColor] = useState("brown");

    return <h1>My puppy color is{color}</h1>
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Fav />);
export default Fav;
