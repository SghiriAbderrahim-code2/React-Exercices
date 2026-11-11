import { useState } from "react"

export default function Form({formFunction,produit={id:"",nom:"",prix:""}}) {
const [id,setId]= useState(produit.id);
const [nom,setNom]= useState(produit.nom);
const [prix,setPrix]= useState(produit.prix);
function action() {
    let p ={id:id,nom:nom,prix:prix};
    formFunction(p);
}
    return <div>
        
            <label >
                Id : <input value={produit.id} type="number" min={0} onChange={()=>{setId(event.target.value)}}/>
            </label>
            <br />
            <label >
                Nom : <input value={produit.nom} type="text" onChange={()=>{setNom(event.target.value)}} />
            </label>
            <br />
            <label >
                Prix : <input value={produit.prix} type="number" min={0} onChange={()=>{setPrix(event.target.value)}}/>
            </label>
            <br />
            <button onClick={action}>Ajouter</button>
        
    </div>
}