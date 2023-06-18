import { ServicePreview } from "../../components"

import { butikData, klinikData, vandrarhemData } from "./servicesPreviewData"

import prev1 from "../../assets/prev1.JPG"
import prev2 from "../../assets/prev2.JPG"
import prev3 from "../../assets/prev3.JPG"

const ServicesPreview = () => {
  return (
    <div className="section services-container">
      <ServicePreview data={butikData} img={prev1}/>
      <ServicePreview data={klinikData} img={prev2}/>
      <ServicePreview data={vandrarhemData} img={prev3}/>
    </div>
  )
}

export default ServicesPreview