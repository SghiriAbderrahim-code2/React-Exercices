import { produits } from "./data";
import Table from "./components/Table";
import { useState } from "react";
import Form from "./components/Form";
export default function App() {
    const [listProduits,setListProduits]=useState(produits);
    const [editProduit,setEditProduit] = useState({id:"",nom:"",prix:""});
    function remove(id) {
        setListProduits(listProduits.filter(e=>e.id!=id))
    }
    function Ajouter(p) {
        setListProduits([...listProduits,p])
    }
    function Modifier(p) {
        setListProduits(listProduits.map(e=>e.id==editProduit.id?p:e))
    }
    return <>
    <Form formFunction={Ajouter} />
    <div>
        <Form formFunction={Modifier} produit={editProduit} />
    </div>
    <Table produits={listProduits} fRemove={remove} edit={setEditProduit} />
    </>
}