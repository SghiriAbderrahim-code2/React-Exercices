import Header from "./components/Header";
import ListCarte from "./components/ListCarte";
import { useState } from "react";
export default function App() {
    const [affiche,setAffiche]=useState(false);
    return <div>
<Header titre="Fiche des plat" />
<button onClick={()=>{setAffiche(!affiche)}}>
{(affiche)?"Masque les ingredients":"Affiche les ingredients"}
</button>
<ListCarte afficheI={affiche} />
    </div>
}