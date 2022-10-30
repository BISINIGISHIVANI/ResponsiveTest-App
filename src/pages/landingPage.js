import { CustomDevice, Footer, Navbar} from "../components";
import { useState } from "react";
import "./style.css"
export default function LandingPage(){
  let defaultUrl="https://responsivenesstest-website.netlify.app/"
  const [getWebsiteByUrl,setWebsiteByUrl]=useState(defaultUrl)
    return <div >
        <Navbar searchUrl={getWebsiteByUrl}setSearchUrl={setWebsiteByUrl}/>
        <div class="container-fluid">
          <div class="row flex-nowrap">
             <CustomDevice searchUrl={getWebsiteByUrl}/>
            </div>
          </div>
        <Footer/>
    </div>
}
// ref={snapShotRef} import { getSnapshotOfImage } from "../helpers/snapshot";
// const snapShotRef=useRef(null)