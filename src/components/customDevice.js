import { useState} from "react";
export default function CustomDevice({searchUrl}) {
      const [screenSizes,setScreenSizes]=useState({
        width:"320",
        height:"480",
      })
      const [customOption,setCustomOption]=useState("");
      
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
          label:"Tablet",
          value:[400,600]
        },
        {
          label:"Iphone",
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
      <div className="f-row f-wrap">
          <div className="container-resize">
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
          src={searchUrl}
          className="device-front"
          title='mobile'
          style={{width:"700px",height:"480px"}}
          ></iframe>
          <div className="device-label">
            <div className="finger-scan"></div>
          </div>
          </div>
          </div>
          </div>
          <div>
        <div class="page-header pt-3 t-center">
        <h2>Responsive Test of Website based on Custom Sizes</h2>
        <p class="lead">Add custom screen sizes below input feilds,See changes...
        <br/>
      </p>
        </div>
        <form class="form-inline flex-center">
    <select class="form-control mb-2 mr-sm-2"onChange={selectOptionHandler}>
      {options.map(({value,label})=><option value={value}>{label}</option>)}
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
    <p className="t-center">Note:width*height are in pixel</p>
    <hr/>
    <div 
        className={`container container-resize flex-center ${screenSizes.width>"580"?"mobile":""}`}>
      <div className="device-cover device-cover-pd-md">
        <div>
          <div className="speaker-1">
          </div>
        </div>
      <iframe 
      src={searchUrl}
      className="device-front"
      title='mobile'id="mobile"
      style={{width:`${screenSizes.width}px`,height:`${screenSizes.height}px`}}
      ></iframe>
       </div>
    </div>
      </div>
      <hr/>
</main>;
  }
  /**
   *
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