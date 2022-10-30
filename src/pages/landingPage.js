import { CustomDevice, Footer, Navbar, Sidebar } from "../components"
import "./style.css"
export default function LandingPage(){
    return <div >
        <Navbar/>
        <div class="container-fluid">
          <div class="row flex-nowrap">
             <Sidebar/>
             <CustomDevice/>
            </div>
          </div>
        <Footer/>
    </div>
}
// ref={snapShotRef} import { getSnapshotOfImage } from "../helpers/snapshot";
// const snapShotRef=useRef(null)