import App from "./App"
import Home from "./Home"
import NewTravelForm from "./NewTravelForm"
import TravelPlanList from "./TravelPlanList"


export default [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/TravelPlanList",
        element: <TravelPlanList />
      },
      {
        path: "/NewTravelForm",
        element: <NewTravelForm />
      }
    ]
  }
]