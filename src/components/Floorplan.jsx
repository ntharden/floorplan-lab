import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const Floorplan = () => {
  return (
    <div>
      <Bedroom />
      <Bedroom />
      <Bedroom />
      <Bath />
      <Bath />
      <Kitchen />
      <LivingRoom />
    </div>
  )
}

export default Floorplan