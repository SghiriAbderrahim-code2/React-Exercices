export default function Table({ produits,fRemove,edit }) {
  return (
    <table border={1}>
      <tr>
        <th>Nome</th>
        <th>Prix</th>
        <th>Action</th>
      </tr>
      {produits.map((e) => (
        <tr>
          <td>{e.nom}</td>
          <td>{e.prix}</td>
          <td>
            <button onClick={()=>{fRemove(e.id)}}>Remove</button>
            <br />
            <button onClick={()=>{edit(e)}}>Edit</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
