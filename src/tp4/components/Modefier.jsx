export default function Modefier({
  setNomM,
  setPreomM,
  modefier,
  idM,
  nomM,
  prenomM,
}) {

    
  return (
    <>
      id: <span>{idM}</span> <br />
      nom :{" "}
      <input
        type="text"
        value={nomM}
        onChange={(e) => {
          setNomM(e.target.value);
        }}
      />
      <br />
      prenom :{" "}
      <input
        type="text"
        value={prenomM}
        onChange={(e) => {
          setPreomM(e.target.value);
        }}
      />
      <br />
      <button onClick={modefier}>Modefier</button>
    </>
  );
}
