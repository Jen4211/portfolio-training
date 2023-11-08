import './App.css';
import {Header} from './layout/header/Header';
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {AboutMe} from "./layout/sections/about/AboutMe";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";


function App() {
    return (
        <div>
            <Particle />
            <Header/>
            <Main/>
            <AboutMe />
            <Skills />
            <Works />
            <Testimony/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

