import { listetudiants } from "../data"
export default function GestionEtudiant() {
    return <div>
        <h1>List des Etudiant</h1>
        <table>
            <tr>
                <th>nom</th>
                <th>prenom</th>
                <th>note</th>
                <th>filiere</th>
                <th>action</th>
            </tr>
            {listetudiants.map(e=><tr>
                <th>{e.nom}</th>
                <th>{e.prenom}</th>
                <th>{e.note}</th>
                <th>{e.filiere}</th>
                <th><button>Supprimer</button></th>
            </tr>)}
        </table>
    </div>
}