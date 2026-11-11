import { useState } from "react";
import { Etudients } from "./data";
import Header from "./components/Header";
import Table from "./components/Table";
import Ajouter from "./components/Ajouter";
import Modefier from "./components/Modefier";
export default function App() {
  const [L, setL] = useState(Etudients);
 
  const [idM, setIdM] = useState("");
  const [nomM, setNomM] = useState("");
  const [prenomM, setPreomM] = useState("");
function modefier() {let EM = {id: idM,nom: nomM,prenom: prenomM};
setL(L.map((e) => (e.id == idM ? EM : e)));}

  return (
    <div>
      <Header title="Etudients" />

      <Ajouter L={L} setL={setL} />
      
      <br />
      <Table L={L} setL={setL} setIdM={setIdM} setPreomM={setPreomM}setNomM={setNomM}
      />
      <br />
      <Modefier setNomM={setNomM} setPreomM={setPreomM} modefier={modefier} idM={idM} nomM={nomM} prenomM={prenomM}
      />
    </div>
  );
}
