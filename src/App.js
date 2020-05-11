//import React, { useState } from 'react';
import React from 'react';
import './App.css';
import { posts } from './data'
//import axios from 'axios';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Blogs from './pages/Blogs';

// 1.step

// bunu baska yerde kullanacagim icin export ediyorum
export const BlogContext = React.createContext()


function App() {

  //const [posts, setPosts] = useState()

  // useEffect(() => {
  //   axios
  //     .get('/posts')
  //     .then(res => setPosts(res.data))
  //     .catch(err => console.log(err))
  // }, [])


  return (
    //<BlogContext.Provider value={'yavuz'}>
    <BlogContext.Provider value={posts}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/*<Route path="/:id" component={Blogs} /> {/** : koydugumuz icin id degisebilir. hangi id olursa ona gore sayfa degisecek. id : ile degisken haline donustu */}
          <Route path="/:id" component={Blogs} /> {/** : koydugumuz icin id degisebilir. hangi id olursa ona gore sayfa degisecek. id : ile degisken haline donustu */}
        </Switch>
      </div>
    </BlogContext.Provider>
  );
}

export default App;
