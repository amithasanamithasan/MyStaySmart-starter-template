

import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Room from "../../components/Room/Room"

const Home = () => {

  return (
    <div>
   <Helmet>
    <title>MyStaySmart| Vacation Homes & Condo Rentals</title>
    </Helmet>
      <Categories></Categories>
      <Room></Room>
    </div>
  )
}

export default Home
