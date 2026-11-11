import { services,numservice,personels } from "./data";
export default function ListPersonels1() {
    return <div>
        <h1>list des personels de service {numservice} :</h1>
        {personels.filter(e=>e.serviceId==numservice).map(e=><div><input type="checkbox" /></div>)}
    </div>
}