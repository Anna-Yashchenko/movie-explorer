import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {MoviePage} from "./pages/MoviePage";
import {Layout} from "./components/Layout";
import {FavoritesPage} from "./pages/FavoritesPage";


function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/movie/:id' element={<MoviePage/>}/>
                <Route path='/favorites' element={<FavoritesPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;