import { services } from "./data";
export default function ListServices() {
    return <div>
        <h1>Service :</h1>
        <select >
{services.map(e=><option>{e.Titre}</option>)}
        </select>
    </div>
}