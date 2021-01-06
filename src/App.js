import NavBar from './screens/home/components/navBar';
import HomeScreen from './screens/home/home';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieTypeScreen from './screens/typeScreen/moviesTypeScreen';
// import MovieScreen from './screens/typeScreen/MovieScreen';
import { GlobalProvider } from './GlobalStates';
// import "./index.css";
import { movieType,routeConstants } from "./defaultConstants";


function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/home' component={HomeScreen} />
            <Route path= {routeConstants.POPULAR_ROUTE} render={() => <MovieTypeScreen movieType={movieType.POPULAR_NOW} />} />
            <Route path={routeConstants.TOP_RATED_ROUTE} render={() => <MovieTypeScreen movieType={movieType.TOP_RATED} />} />
            <Route path={routeConstants.UPCOMMING_ROUTE} render={() => <MovieTypeScreen movieType={movieType.UPCOMMING_MOVIES} />} />
            <Route path={routeConstants.UPCOMMING_ROUTE} render={() => <MovieTypeScreen movieType={movieType.UPCOMMING_MOVIES} />} />
            {/* <Route path='/movie/:id' component={MovieScreen} /> */}
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
