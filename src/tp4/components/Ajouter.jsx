import { useState } from "react";
export default function Ajouter({setL,L}){
     const [nom, setNom] = useState("");
      const [prenom, setPreom] = useState("");
      function ajouter() {
    let i = Math.max(...L.map((e) => e.id)) + 1;
    console.log(i);

    var E = {
      id: i,
      nom: nom,
      prenom: prenom,
    };

    setL([...L, E]);
  }
    return <>
    nom : <input type="text" onChange={(e)=>{setNom(e.target.value)}} />
      <br />
      prenom : <input type="text" onChange={(e)=>{setPreom(e.target.value)}} />
      <br />
     
      <button onClick={ajouter}>Ajouter</button>
    </>
}