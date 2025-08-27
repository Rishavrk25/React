import UserCard from "./components/UserCard"
import Shivaji from "./assets/shivaji.jpg" 
import Maharana from "./assets/PrithwiRaj.jpg"
import PrithviRaj from "./assets/maharanaPratap.jpg"
function App() {
let cards = [
  { name: "Shivaji", desc: "desc1", image: Shivaji },
  { name: "Maharana Pratap", desc: "desc2", image: Maharana },
  { name: "PrithviRaj Chauhan", desc: "desc3", image: PrithviRaj }
];
  return (
    <div className=" flex gap-6 flex-wrap ">
      {/* Using map to traverse the Array of Objects */}
      {cards.map((item,idx)=><UserCard key={item.name} name={item.name} desc={item.desc} image={item.image}/>)}

      {/* <UserCard name="Shivaji" desc="desc1" image={Shivaji}/>
      <UserCard name="Maharana Pratap" desc="desc2" image={Maharana}/>
      <UserCard name="PrithviRaj Chauhan"  desc="desc3" image={PrithviRaj}/> */}
    </div>
    
  )
}
export default App
