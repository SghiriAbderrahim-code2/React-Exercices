export default function Table({L,setL,setIdM,setPreomM,setNomM}){
    function supp(id) {
    setL(L.filter((e) => e.id != id));
  }
    return <>
    <table border={1} width="100%">
        <tr>
          <th>id</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Action</th>
        </tr>
        {L.map((e) => (
          <tr>
            <td>{e.id}</td>
            <td>{e.nom}</td>
            <td>{e.prenom}</td>
            <td><button onClick={()=>supp(e.id)}>Supprimer</button>
            <br />
            <button onClick={()=>{setIdM(e.id);setNomM(e.nom);setPreomM(e.prenom)}}>Modefier</button>
            </td>
          </tr>
        ))}
      </table>
    </>
}