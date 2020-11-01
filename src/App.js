import React, {useState} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';

function App() {

  const [monState, setMonState] = useState([
    {tache: 'Promener le chien', txt: 'Une fois à 8h et une fois à 19h'},
    {tache: 'Préparer le repas', txt: 'Acheter du poisson + riz'},
    {tache: 'Créer une app web', txt: 'Apprendre React'}
  ])
  const [tache, setTache] = useState();
  const [txt, setTxt] = useState();

  function creationCard(e) {
    e.preventDefault();

    // console.log(tache, txt);
    const nvTab = [...monState, {tache: tache, txt: txt}]
    setMonState(nvTab);
    console.log(nvTab);
    setTache('');
    setTxt('');
  }

  function supprCard(index) {
    // console.log("Hello Suppr");
    const tabNettoyage = [...monState];

    setMonState(tabNettoyage.filter(item => tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index])))
  }

  return (
    <div>
      <Header />

      <div className="container px-3">
        <h2 className="title mt-5">
          Entrer vos tâches à faire
        </h2>
  
        <form onSubmit={creationCard}>

          <div className="field">
            <div className="control">
              <label htmlFor="tache" className="label">Tâche</label>
              <input value={tache} className="input" type="text" id="tache" placeholder="Une tâche à faire" onChange={e => setTache(e.target.value)} />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label htmlFor="txt" className="label">Contenu de la tache</label>
              <textarea value={txt} className="textarea" type="text" id="txt" placeholder="Une tâche à faire" onChange={e => setTxt(e.target.value)}></textarea>
            </div>
          </div>


          <div className="control">
            <button type="submit" className="button is-link">Créer une tache</button>
          </div>
        </form>

        {
          monState.map((todo, index) => (
            <Card 
            key = {index}
            index = {index}
            tache = {todo.tache}
            txt = {todo.txt}
            supprFunc = {supprCard}
            />
          ))
        }

      </div>

    </div>
  );
}

export default App;
