export default function Menu(params) {
    return <>
    <h3>Menu {params.titre}</h3>
    <ul>
        {params.list.map(e=><li>{e}</li>)}
    </ul>
    </>
}