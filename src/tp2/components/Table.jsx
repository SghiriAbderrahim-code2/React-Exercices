export default function Table(params) {
    return <>
    <h3>List {params.titre}</h3>
    <table border="1">
        <tr>
        <td>id</td>
        <td>nom</td>
        <td>prix</td>
        </tr>
        {params.list.map(e=><tr>
        <td>{e.id}</td>
        <td>{e.nom}</td>
        <td>{e.prix}</td>
        </tr>)}
    </table>
    
        

    </>
}