import React, { useState } from 'react'
import "./Leads.scss";
import logo from "../Customers/images/Email.svg";
import DropdownAddButton from './DropdownAddButton/DropdownAddButton';
import DropdownAddButtonOthers from './DropdownAddButtonOthers.jsx/DropdownAddButtonOthers';

function Leads() {

const [checked, setChecked] = useState("Contacts")

  return (
   <>
    <div className='lead_heading'>
    {/* <Page_heading  parent={"Business Account / Leads"} child={"Add New Lead"}/> */}
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

                    <label className='leadlabel' >Lead Source Type</label><br/>
                    <div className='radio-group'>
                    <label className='radio'>
                        <input type="radio" value="Contacts" name="lead"  checked={checked == "contacts" ? true : false} onClick={e=>setChecked("contacts")} />Contacts
                         <span></span> 
                    </label>
                    <label className='radio'>
                        <input type="radio" value="Others" name="lead" onClick={e=>setChecked("Others")}  checked={checked == "Others" ? true : false}/>Others
                        <span></span>
                    </label>
                    </div> 
                    <label className='leadlabel' style={{marginTop:"15px"}}>{checked == "contacts" ? "Contacts" : "Others"}</label><br/>
                    {checked =="contacts" ?  <DropdownAddButton/> :<DropdownAddButtonOthers/> }
                    <label className='leadlabel' style={{marginTop:"15px"}}>Ownership</label><br/>
                  <DropdownAddButton/> 

                    <div className="leadbutton_bottom">
                <button type="button" className="leadsavebutton">
                  Save
                </button>
                <button type="button" className="leadcancelbutton">
                Cancel
                </button>
              </div>
        </div>

        <div className="leadform-right">
        <label className='leadlabel' >Lead Source Type</label><br/>
                    <div className='radio-group'>
                    <label className='radio'>
                        <input type="radio" value="Contacts" name="lead"   onClick={e=>setChecked("Contacts")} checked={checked == "Contacts" ? "true" : "false"}/>Contacts
                         <span></span> 
                    </label>
                    <label className='radio'>
                        <input type="radio" value="Others" name="lead" onClick={e=>setChecked("Others")}  checked={checked == "Others" ? "true" : "false"}/>Others
                        <span></span>
                    </label>
                    </div> 
                    <label className='leadlabel' style={{marginTop:"15px"}}>{checked == "Contacts" ? "Contacts" : "Others"}</label><br/>
                    {checked =="Contacts" ?  <DropdownAddButton/> :<DropdownAddButtonOthers/> }
                    <label className='leadlabel' style={{marginTop:"15px"}}>Ownership</label><br/>
                  <DropdownAddButton/> 
            </div>
    </div> 
    </div>
    </div>
   </>
  )
}

export default Leads
