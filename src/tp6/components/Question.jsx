export default function Carte({recette,affiche}) {
    return <div>
    <h2>{recette.nom}</h2>
    <p>{recette.categorie}</p>
    {(affiche)?<ul>{recette.ingredients.map(e=><li>{e}</li>)}</ul>:""}
    </div>
}