import { useState ,useEffect} from "react";
import { toast } from "react-toastify";
export default function Navbar() {
  let defaultUrl="http://localhost:3000/"
    // let defaultUrl="https://socialexplore.netlify.app/"
    const [searchUrl,setSearchUrl]=useState(defaultUrl)
    const searchWebsiteHandler=()=>{
      if(1>2){
        toast("please provide website link")
      }
      }
      useEffect(()=>{
        localStorage.setItem("searchUrl",searchUrl)
        localStorage.getItem(searchUrl)
      },[searchUrl])
    return <div className=" nav-sticky ">
  <nav class="navbar navbar-light bg-light justify-content-betweenpadding-nav">
    <div >
  <a class="navbar-brand"href="_blank">Navbar</a>
    </div>
  <form class="form-inline">
    <input class="form-control mr-sm-2" 
    type="search" placeholder="Search" aria-label="Search"
    placeHolder="website url"
    value={searchUrl}
    onChange={(e)=>setSearchUrl(e.target.value)}
    />
    <button class="btn  my-2 my-sm-0  btn-secondary" type="submit"
    onClick={searchWebsiteHandler()}
    >Search</button>
  </form>
  </nav>
  </div>
  }

  /**
   * <div className="f-row f-wrap">
          <div className="container-resize">
          <div className="device-cover">
            <div>
              <div className="camera"></div>
              <div className="speaker-1">
              </div>
            </div>
          <iframe 
          src={"http://localhost:3000/"}
          className="device-front"
          title='mobile'id="mobile"
          style={{width:"260px",height:"480px"}}
          ></iframe>
          <div className="device-label">
            <div className="finger-scan"></div>
          </div>
          </div>
          </div>
          <div className="container-resize">
          <div className="device-cover">
            <div>
              <div className="camera"></div>
              <div className="speaker-1">
              </div>
            </div>
          <iframe 
          src={"http://localhost:3000/"}
          
          title='mobile'id="mobile"
          style={{width:"700px",height:"480px"}}
          ></iframe>
          <div className="device-label">
            <div className="finger-scan"></div>
          </div>
          </div>
          </div>
          </div>
   */