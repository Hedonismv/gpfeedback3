import './App.css';
import {useEffect, useState} from "react";
import {Routes, Route} from "react-router";
import Main from "./Pages/Main/Main";
import FeedBack from "./Pages/FeedBack/FeedBack";
import {filtyTest, generateLink} from "./helpers/helpers";
import {fetchDiet, fetchTestGuest, setLocalData, setNoneEaters} from "./store/action-creators/guests";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const [isLocalEmpty, setIsLocalEmpty] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
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
      setIsLoaded(true)
    }
  }

  const checkLocalStorage = () => {
    if(localStorage.getItem('localGuests')){
      const localGuests = JSON.parse(localStorage.getItem('localGuests'))
      const localNoneEaters = JSON.parse(localStorage.getItem('localNoneEaters'))
      const localDiets = JSON.parse(localStorage.getItem('localDiets'))
      const allData = {
        diets: localDiets,
        guests: localGuests,
        noneEaters: localNoneEaters
      }
      dispatch(setLocalData(allData))
      setIsLoaded(true)
    }else{
      setIsLocalEmpty(true)
      setIsLoaded(false)
      dispatch(fetchTestGuest())
    }
  }


  useEffect(() => {
    if(isLocalEmpty){
      generateLinkAndFetchDietBook()
    }
  }, [guests])


  useEffect(() => {
    checkLocalStorage()
  },[dispatch, isLocalEmpty])

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Main clear={setIsLocalEmpty} isLoaded={isLoaded} diet={diets} noneEaters={noneEaters}/>}/>
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
