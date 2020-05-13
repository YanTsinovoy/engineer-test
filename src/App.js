
import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainInfo from './components/mainInfo/MainInfo';
import AsteroidInfo from './components/asteroidInfo/AsteroidInfo';
import {getAsteroid, getInfo} from './services/apiService';

const  App =() => {

  const [asteroidData, setData] = useState({
    result: null,
    error: false,
    pending: false,
  })

  const getAsteroidInfo = async (id) => {
    try {
      setData({
        ...asteroidData,
        pending: true,
        error: false,
      })
      const response = await getAsteroid(id)
      setData({
        error: false,
        result: response,
        pending: false,
      })
    } catch (err){
      setData({
        pending: false,
        result: null,
        error: true
      })
    }
  }

  const getRandomAsteroid = async () => {
    try {
      setData({
        ...asteroidData,
        pending: true,
        error: false,
      })
      const allAsteroids = await getInfo();
      const valueOffAllPages = allAsteroids.page.total_pages;
      const randomPage = Math.round(Math.random() *valueOffAllPages );
      const randoPageInfo = await getInfo(randomPage);
      const pageIds = randoPageInfo.near_earth_objects.map((el) => el.id);
      const randomId = pageIds[Math.floor(Math.random() * pageIds.length)];
      const response = await getAsteroid(randomId)
      setData({
        error: false,
        result: response,
        pending: false,
      })
    } catch (err){
      console.log(err)
      setData({
        pending: false,
        ...asteroidData,
        error: false
      })
    }
  }
  const onChange = () => {
    setData({...asteroidData, error: false})
  }

  const onReturn =()=> {
    setData({
      pending: false,
      result: null,
      error: false
    })
  }

  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/">
          <MainInfo onSubmit={getAsteroidInfo} error={asteroidData.error} pending={asteroidData.pending} data={asteroidData.result} onChange={onChange} onRandom={getRandomAsteroid}/>
        </Route>
        <Route path="/asteroid-info">
          <AsteroidInfo data={asteroidData.result} onReturn={onReturn}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
