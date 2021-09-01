
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/Home';
import Blogs from './components/Blogs';
import { useState } from 'react';
import BlogContent from './components/BlogContent';
import About from './components/About';

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
        <Route exact path='/blogs'><Blogs  domain="Javascript" blogContent={blogContent} /></Route>
        <Route exact path="/javascript"><Blogs domain="Javascript" blogContent={blogContent}/></Route>
        <Route exact path="/python"><Blogs domain="Python" blogContent={blogContent}/></Route>
        <Route exact path="/java"><Blogs domain="Java" blogContent={blogContent}/></Route>
        <Route exact path="/react"><Blogs domain="React" blogContent={blogContent}/></Route>
        <Route exact path="/html"><Blogs domain="Html" blogContent={blogContent}/></Route>
        <Route exact path="/css"><Blogs domain="Css" blogContent={blogContent}/></Route>
        <Route exact path="/blogContent"><BlogContent contentId={contentId}/></Route>
      </Switch>

    </div>
  );
}

export default App;
