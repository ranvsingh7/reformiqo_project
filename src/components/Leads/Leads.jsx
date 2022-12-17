import React from 'react'
import DropdownWithProfile from '../DropdownWithProfile/DropdownWithProfile';
import Page_heading from '../Page_Heading/Page_heading'
import "./Leads.scss";
import logo from "../Customers/images/Email.svg";

function Leads() {
  return (
   <>
    <div className='lead_heading'>
    <Page_heading  parent={"Business Account"} child={"Add New Lead"}/>
    </div>
    <div className='leadform'>
    <div className='leads'>
    <h1 className='box_heading1'>New Lead</h1>
     <div className='lead_details' > 
    <div className='form-left'>
      
                    <label className='leadlabel' style={{marginTop:"5px"}}>Name</label><br/>
                    <div className='leadinput' style={{marginTop:"5px"}}>
                        <img src={logo} className="customerimg"/>
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder" /> 
                    </div>
                    <label className='leadlabel' style={{marginTop:"5px"}}>Mobile No.</label><br/>
                    <div className='leadinput' style={{marginTop:"5px"}}>

                        <img src={logo} className="customerimg"/>
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder" /> 

                    </div>
                    <label className='leadlabel' style={{marginTop:"5px"}}>Email</label><br/>
                    <div className='leadinput' style={{marginTop:"5px"}}>

                        <img src={logo} className="customerimg"/>
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder" /> 

                    </div>
                    <label className='leadlabel' style={{marginTop:"5px"}}>Company Name</label><br/>
                    <div className='leadinput' style={{marginTop:"5px"}}>
                        <img src={logo} className="customerimg"/>
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder" /> 
                    </div>

                    <label className='leadlabel'>Lead Source Type</label><br/>
                    <div style={{display:"flex", marginTop:"5px", marginBottom:"18px"}}>

                      <div>
                    <label class="container">Contact
                    <input type="radio" checked="checked" name="radio"/>
                    <span class="checkmark"></span>
                    </label>
                    </div>

                    <div style={{marginLeft:"18px"}}>
                    <label class="container">Others
                    <input type="radio" name="radio"/>
                    <span class="checkmark"></span>
                    </label>
                    </div>
                    
                    </div>



                    {/* <div style={{display:"flex", width:"155px", heigth:"16px",marginTop:"5px"}}>
                    <div>
                   <input type="radio" id="html" name="fav_language" value="HTML"/>
                   <label className='leadlabel'  style={{marginLeft:"5px", gap:"18px"}}>Contact</label>
                    </div>
                    <div style={{marginLeft:"18px"}}>
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label className='leadlabel' style={{marginLeft:"5px", opacity:"0.5"}}>Others</label>
                    </div>
                    </div> */}

                    <label className='leadlabel' style={{marginTop:"15px"}}>Contacts</label><br/>
                    <DropdownWithProfile/>
                    <label className='leadlabel'>Ownership</label><br/>
                    <DropdownWithProfile/>
        </div>
    </div> 
    </div>
    </div>
   </>
  )
}

export default Leads
