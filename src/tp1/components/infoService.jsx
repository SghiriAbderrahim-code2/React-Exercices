import * as data from "./data";
export default function InfoServices() {
    const s = data.services.find(e=>e.Numero==data.numservice);
    const n = data.personels.filter(e=>e.serviceId==data.numservice).length;
    return <div>
        <h1> Info Service :</h1>
        <div>Numero : {s.Numero}</div>
        <div>titre : {s.Titre}</div>
        <div>description : {s.Description}</div>
        <div>Nomber de personels : {n}</div>
    </div>
}