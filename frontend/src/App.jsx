import { useEffect, useState } from "react";
import { Szo } from "./components/Szo";
import { httpClient } from "./api/axios";
import TemaSelect from "./components/TemaSelect";

const App = () => {
  const [szavak, setSzavak] = useState([]);
  const [temak, setTemak] = useState([]);
  const [toltes, setToltes] = useState(false);
  const [pontok, setPontok] = useState({ min: 0, max: 10 });

  const fetchAdatok = async (utvonal, set, szamolando) => {
    setToltes(true);
    try {
      const { data } = await httpClient.get(utvonal);
      set(data);
      if (szamolando) {
        setPontok({ min: 0, max: data.length });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setToltes(false);
    }
  };

  const fetchAdatokTema = async (id) => {
    setToltes(true);
    try {
      const { data } = await httpClient.get("szavak/" + id);
      setSzavak(data);
      setPontok({ min: 0, max: data.length });
    } catch (error) {
      console.error(error);
    } finally {
      setToltes(false);
    }
  };

  const handleTemaValasztas = (e) => {
    if (e.target.value == 0) {
      fetchAdatok("/szavak", setSzavak, true);
    } else {
      fetchAdatokTema(e.target.value);
    }
  };

  useEffect(() => {
    fetchAdatok("/szavak", setSzavak, true);
    fetchAdatok("/tema", setTemak, false);
  }, []);

  if (toltes) return <div>Töltés...</div>;

  return (
    <div className="app">
      <h1>Szavak</h1>
      <TemaSelect temak={temak} handleTemaValasztas={handleTemaValasztas} />
      <div>
        <div className="cimek">
          <h4>ANGOL</h4>
          <h4>MAGYAR</h4>
          <h4>Visszajelzés</h4>
        </div>
        {szavak?.map((szo) => (
          <Szo key={szo.id} szo={szo} setPontok={setPontok} />
        ))}
      </div>
      <div>
        <h2>
          Pontok: {pontok.min}/{pontok.max}
        </h2>
      </div>
    </div>
  );
};

export default App;
