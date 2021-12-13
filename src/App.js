import './App.css';
import Header from "./myComponents/Header"
import Blogs from "./myComponents/blogs"
import showBlog from "./myComponents/showBlog"
import data from "./data.json"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"; 

function App() {
  return (
    <>
    <Router>
    <Header title="BlogToSee"/>
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            <>
            <Blogs blogs={data}/>
            </>
          )
        }}></Route>
        <Route exact path="/showBlog" component={showBlog}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
