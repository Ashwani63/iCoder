
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/Home';
import Blogs from './components/Blogs';
import { useState } from 'react';
import BlogContent from './components/BlogContent';
import About from './components/About';
import img1 from './components/Images/1.jpg'
import img2 from './components/Images/2.jpg'
import img3 from './components/Images/3.jpg'
import img4 from './components/Images/download.png'

function App() {

  let [contentId, setContentId] = useState(0);

  let blogContent = (event)=>{
      // console.log(event.target.id);
      let id = event.target.id;
      setContentId(id);
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'><Home blogContent={blogContent}/></Route>
        <Route exact path='/about' component={About}/>
        <Route exact path='/blogs'><Blogs  domain="Javascript" blogContent={blogContent} image={img4} /></Route>
        <Route exact path="/javascript"><Blogs domain="Javascript" blogContent={blogContent} image={img4}/></Route>
        <Route exact path="/python"><Blogs domain="Python" blogContent={blogContent} image={img2} /></Route>
        <Route exact path="/java"><Blogs domain="Java" blogContent={blogContent} image={img3} /></Route>
        <Route exact path="/react"><Blogs domain="React" blogContent={blogContent} image={img1} /></Route>
        <Route exact path="/html"><Blogs domain="Html" blogContent={blogContent} image={img2}/></Route>
        <Route exact path="/css"><Blogs domain="Css" blogContent={blogContent} image={img3}/></Route>
        <Route exact path="/blogContent"><BlogContent contentId={contentId}/></Route>
      </Switch>

    </div>
  );
}

export default App;
