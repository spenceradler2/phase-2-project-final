import App from "./App"
import NewTravelForm from "./NewTravelForm"
import TravelPlanList from "./TravelPlanList"

export default [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/TravelPlanList",
        element: <TravelPlanList />,
      },
      {
        path: "/NewTravelForm",
        element: <NewTravelForm />
      }
    ]
  }
]