import UserCard from "./components/UserCard"
import Shivaji from "./assets/shivaji.jpg" 
import Maharana from "./assets/PrithwiRaj.jpg"
import PrithviRaj from "./assets/maharanaPratap.jpg"
function App() {
  return (
    <div class=" flex gap-6 flex-wrap ">
      <UserCard name="Shivaji" desc="desc1" image={Shivaji}/>
      <UserCard name="Maharana Pratap" desc="desc2" image={Maharana}/>
      <UserCard name="PrithviRaj Chauhan"  desc="desc3" image={PrithviRaj}/>
    </div>
    
  )
}
export default App
