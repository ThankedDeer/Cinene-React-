import { Fragment } from 'react';
import './App.css';
import Lalo from './components/salaCine';
import Video from './components/Video';
import Cinene from './components/Cinene';


const App = () => {
    return (
        
        <Fragment>
            <Cinene/>
            <Video/>
            <Lalo/>
            
        </Fragment>
        
        
        );
}
 
export default App;