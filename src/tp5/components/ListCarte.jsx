import { list_recettes } from "../data";
import Carte from "./Carte";
export default function ListCarte({afficheI}) {
    return <div className="listCartes">
        {list_recettes.map(e=> <Carte recette={e} affiche={afficheI}  />)}
    </div>
}