import './App.css';
import {useEffect} from "react";
import {Routes, Route} from "react-router";
import Main from "./Pages/Main/Main";
import FeedBack from "./Pages/FeedBack/FeedBack";
import {filtyTest, generateLink} from "./helpers/helpers";
import {fetchDiet, fetchTestGuest, setNoneEaters} from "./store/action-creators/guests";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const {guests, noneEaters, diets} = useSelector(state => state.guest)


  const generateLinkAndFetchDietBook = () => {
    const {eaters, noneEaters} = filtyTest(guests)
    dispatch(setNoneEaters(noneEaters))
    if(eaters.length){
      const names = eaters.map((eater) => {
        return eater.name.split(" ");
      });
      const dietLink = generateLink(names)
      dispatch(fetchDiet(dietLink))
    }
  }


  useEffect(() => {
    generateLinkAndFetchDietBook()
  }, [guests])


  useEffect(() => {
    dispatch(fetchTestGuest())
  },[dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Main diet={diets} noneEaters={noneEaters}/>}/>
        <Route path={'/:id'} element={<FeedBack/>}/>
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
        />
      </Routes>
    </div>
  );
}

export default App;
