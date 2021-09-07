import Carousal from './Carousal';
import Section from './Section';
import Footer from './Footer';
import img1 from './Images/1.jpg'
import img2 from './Images/2.jpg'
import img3 from './Images/3.jpg'
import img4 from './Images/download.png'

function Home(props) {
  return (
    <>
      <div className="App">
        <Carousal />
        <div className="container my-4">
          <div className="row md-2 my-2">
            <div className="col md-4 my-4">
              <Section id='30' domain="Javascript" title="Introduction to JS" date="24 Aug" description="This blog is for the begginers of the Javascript  which will give you intro of it." blogContent={props.blogContent} image={img4}/>
            </div>
            <div className="col md-4 my-4">
              <Section id='31' domain="Python" title="Introduction to Python" date="23 Aug" description="This blog is for the begginers of the Python  which will give you intro of it." blogContent={props.blogContent} image={img2}/>
            </div>
            <div className="col md-4 my-4">
              <Section id='32' domain="Java" title="Introduction to Java" date="22 Aug" description="This blog is for the begginers of the Java  which will give you intro of it." blogContent={props.blogContent} image={img3}/>
            </div>
            <div className="col md-4 my-4">
              <Section id='33' domain="React" title="Introduction to React" date="21 Aug" description="This blog is for the begginers of the React  which will give you intro of it." blogContent={props.blogContent} image={img4}/>
            </div>
            <div className="col md-4 my-4">
              <Section id='34' domain="Html" title="Introduction to Html" date="21 Aug" description="This blog is for the begginers of the Html  which will give you intro of it." blogContent={props.blogContent} image={img2}/>
            </div>
            <div className="col md-4 my-4">
              <Section id='35' domain="Css" title="Introduction to Css" date="21 Aug" description="This blog is for the begginers of the Css  which will give you intro of it." blogContent={props.blogContent} image={img1}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
