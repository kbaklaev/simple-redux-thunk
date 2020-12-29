import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { getPersonsWithThunk } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state);

  const clickHandler = () => {
    dispatch(getPersonsWithThunk())
  };

  return (
    <div className="App">
      <main>
        <section>
          <button type="button" onClick={clickHandler}>
            start
          </button>
        </section>
        <section>
          <ul>
            {persons?.map((person) => (
              <li key={person.id}>{person.name} as {person.username}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
