import Titre from "./components/Titre"
import Menu from "./components/Menu"
import Table from "./components/Table"
import * as data from "./components/data";
function App() {
  

  return (
    <>
     <Titre text='Catalog' />

     <Menu titre='Produit' list={data.menuProduit} />

     <Table titre='Produit' list={data.produits} />

     <Table titre='Panier' list={data.panier} />

     <Menu titre='Panier' list={data.menuPanie} />

     <Titre text='Site E-commerce' />
    </>
  )
}

export default App
