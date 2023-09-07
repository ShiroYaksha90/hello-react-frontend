import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Greeting from './greeting';
function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Greeting />}></Route>
        </Routes>
    )
}

export default App;
