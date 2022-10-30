import { useState } from "react";
export default function Sidebar() {
  const [fontStyle,setFontStyle]=useState("sans-serif")
  // let changeStyleArr=fontStyle.split("','");
  const fontStyleHandler=(e)=>{
   setFontStyle(e.target.value)
  }
    return <div class="col-auto px-0">
      {/* <a href="_" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a> */}
    <div id="sidebar" class="collapse collapse-horizontal show border-end">
        <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
            <div>
              <h4>hello</h4>
            </div>
            <a href="_" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-bricks"></i> <span>Item</span></a>
            <a href="_" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-clock"></i> <span>Item</span></a>
            <a href="_" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-archive"></i> <span>Item</span></a>
            <a href="_" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-gear"></i> <span>Item</span></a>
            <a href="_" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-calendar"></i> <span>Item</span></a>
            <a href="_" class="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i class="bi bi-envelope"></i> <span>Item</span></a>
        </div>
    </div>
</div>;
  }

  /**
   * <aside>
      <h2>Friendly suggestion</h2>
      <div>
          <h2 style={{fontFamily:"Merriweather, serif"}}>{document.title}  Responsive website</h2>
          <p style={{fontFamily: "Open Sans, sans-serif"}}>A responsive web design automatically adjusts for different-sized screens and viewports. With a responsive website, someone can browse your website from any device and it will still look and function perfectly.</p>
      </div>
      <label>Font combinators</label>
      <select onChange={fontStyleHandler}>
        <option value="'Merriweather, serif','Open Sans, sans-serif'">Merriweather-Open Sans</option>
        <option value="'Abril Fatface,serif','Poppins, sans-serif'">serif</option>
        <option value="'Cinzel, serif','Fauna One', serif'">kll</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option> 
        </select>
        <h2>color pallate</h2>
        <select>
          <option value="color">color</option>
        </select>
        <input type="text"value="hello swap"id="copy-text"/>
        <button onClick={()=>navigator.clipboard.writeText(fontStyle)}>copy</button>
      </aside>;
   * 
   */

  