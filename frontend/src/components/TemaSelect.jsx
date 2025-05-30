const TemaSelect = ({ temak, handleTemaValasztas }) => {
  return (
    <select onChange={handleTemaValasztas}>
      <option>Válassz témát</option>
      <option value="0">Összes téma</option>
      {temak.map((tema) => (
        <option key={tema.id} value={tema.id}>
          {tema.temanev}
        </option>
      ))}
    </select>
  );
};

export default TemaSelect;
