import Home from "./src/Views/home";
import results from "./src/Views/results";

const routes = [
  {
    Path:'/',
    Element: Home
  },{
    Path:'/page:id',
    Element: results
  }
]
export default routes