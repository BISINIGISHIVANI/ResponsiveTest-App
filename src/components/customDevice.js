import { useState} from "react";
export default function CustomDevice() {
      const [screenSizes,setScreenSizes]=useState({
        width:"320",
        height:"480",
      })
      const [customOption,setCustomOption]=useState("")
      const selectOptionHandler=(e)=>{
        setCustomOption(e.target.value)
        let getCustomOption=customOption.split(",");
        setScreenSizes({...screenSizes,width:getCustomOption[0],height:getCustomOption[1]})
      }
      const options=[
        {
          label:"Default",
          value:[320,480]
        },
        {
          label:"Mobile",
          value:[600,300],
        },{
          label:"Mobile2",
          value:[400,600]
        }
      ]
      const resetHandler=()=>{
        setScreenSizes({...screenSizes,width:"320",height:"480"})
      }
      const rotateDeviceHandler=()=>{
        setScreenSizes({...screenSizes,width:screenSizes.height,height:screenSizes.width})
      }
    return <main class="col ps-2md-2 pt  padding-top ">
    <div class="row">
        <div class="col-12">
       
         {/* <div class="embed-responsive embed-responsive-4by3">
                <iframe title="sample"class="embed-responsive-item" src="http://localhost:3000/" allowfullscreen></iframe>
            </div> */}
        </div>
    </div>
    <div class="page-header pt-3">
        <h2>Bootstrap 5 Sidebar Menu - Simple</h2>
    </div>
    <p class="lead">input with pixel units</p>
    <form class="form-inline">
    <select class="form-control mb-2 mr-sm-2"onChange={selectOptionHandler}>
      <option selected>Default select</option>
      {options.map(({value,label})=><option value={value}>{label}</option>)}
      {/* <option value1="400"value2="600">Tablet</option>
      <option value1="600"value2="500">Laptop</option>
      <option  value1="600"value2="400">IPhone</option> */}
      </select>
        <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
                <div class="input-group-text">width</div>
            </div>
            <input type="number" class="form-control" id="inlineFormInputGroupUsername2" placeholder="width" 
             value={screenSizes.width}
             onChange={(e)=>setScreenSizes({...screenSizes,width:e.target.value})}
            />
            <span>{""}</span>
            <div class="input-group-prepend">
                <div class="input-group-text">height</div>
            </div>
            <input type="number" class="form-control" id="inlineFormInputGroupUsername2" placeholder="height" 
             value={screenSizes.height}
             onChange={(e)=>setScreenSizes({...screenSizes,height:e.target.value})}
            />
        </div>
        <div class="btn-group mb-2 mr-sm-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary"
            onClick={rotateDeviceHandler}
            >rotate</button>
            <button type="button" class="btn btn-secondary"
            onClick={resetHandler}
            >reset</button>
        </div>
    </form>
    <hr />
    <div class="row">
        <div class="col-12">
        <div 
        className={`container container-resize ${screenSizes.width>"580"?"mobile":""}`}>
      <div className="device-cover device-cover-pd-md">
        <div>
          <div className="speaker-1">
          </div>
        </div>
      <iframe 
      src={"http://localhost:3000/"}
      className="device-front"
      title='mobile'id="mobile"
      style={{width:`${screenSizes.width}px`,height:`${screenSizes.height}px`}}
      ></iframe>
       </div>
    </div>
        </div>
    </div>
</main>;
  }
  /**
   * <section>
      <div>
}
        </div>
         <div>
      <input 
    type="search"
    placeHolder="website url"
    value={searchUrl}
    onChange={(e)=>setSearchUrl(e.target.value)}
    />
    <button onClick={searchWebsiteHandler}>Go</button>
         </div>
      </div>
      <section>

    <select value={customOption}onChange={selectOptionHandler}>
    {options.map(({value,label})=>(
      <option value={value}>{label}</option>
    ) 
    )}
  </select>

  {customOption.edit &&
  <div>
    <h2>new custom sizes</h2>
    <input 
    type="text"
    placeholder="name of the dimension"
    />
    <input/>
    <input/>
    <button>add</button>
  </div>}
  <div>
    <input
    type="number"
    placeholder='width'
    value={screenSizes.width}
    onChange={(e)=>setScreenSizes({...screenSizes,width:e.target.value})}
    />
    <span>*</span>
    <input
     type="number"
     placeholder='height'
     value={screenSizes.height}
    onChange={(e)=>setScreenSizes({...screenSizes,height:e.target.value})}
    />
  </div>
    <button onClick={resetHandler}>reset</button>
    <button onClick={rotateDeviceHandler}>rotate</button>
    <div className={` container container-resize`}>
      <div className="device-cover">
        <div>
          <div className="camera"></div>
          <div className="speaker-1">
          </div>
        </div>
      <iframe 
      src={searchUrl}
      className="device-front"
      title='mobile'id="mobile"
      style={{width:`${screenSizes.width}px`,height:`${screenSizes.height}px`}}
      ></iframe>
      <div className="device-label">
        hi
      </div>
       </div>
    </div>
    <div>
    <iframe 
      src={searchUrl}
      className="device-front"
      title='mobile'id="mobile"
      scrolling="no"
      style={{width:`${screenSizes.width}px`,height:`${screenSizes.height}px`
       }}
      ></iframe>
    </div>
   </section>
   </section>;
   */