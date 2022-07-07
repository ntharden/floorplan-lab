import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const Floorplan = (props) => {
  return (
    <div>
      <Bedroom bedNum={1}/>
      <Bedroom bedNum={2}/>
      <Bedroom bedNum={3}/>
      <Bath bathSize="Full"/>
      <Bath bathSize="Half"/>
      <Kitchen />
      <LivingRoom />
    </div>
  )
}

export default Floorplan