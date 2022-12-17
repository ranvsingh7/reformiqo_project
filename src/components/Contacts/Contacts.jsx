import React from 'react'
import Page_heading from '../Page_Heading/Page_heading';
import logo from "../Customers/images/Email.svg";
import "./Contacts.scss";
import DropdownWithProfile from '../DropdownWithProfile/DropdownWithProfile';

function Contacts() {
  return (
  <>
   <div className='contact_heading'>
    <Page_heading  parent={"Business Account"} child={"Add New Contact"}/>
    </div>
    <div className='contactform'>
    <div className='contacts'>
    <h1 className='box_heading1'>New Contact</h1>
     <div className='contact_details' > 
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
                
                    <label className='leadlabel' style={{marginTop:"15px"}}>Type</label><br/>
                    <select className='contactinput' style={{marginBottom:"18px",color:"#697A8D", outline:"none", border:"1px solid #697A8D", opacity:0.5}} placeholder='select value' name="values" id="values" >
                    <option value="" selected hidden>Select value</option>
                    <option value="1">Owner</option>
                    <option value="2">Accountant</option>
                    <option value="3">Sales Person</option>
                    <option value="4">Key Person</option>
                    <option value="5">Technician</option>
                    <option value="6">Manger</option>
                    </select>

                    <label className='leadlabel'>Lead Source</label><br/>
                    <DropdownWithProfile/>

                    <label className='leadlabel' style={{marginTop:"5px"}}>Date of Birth</label><br/>
                    <div className='leadinput' style={{marginTop:"5px"}}>

                        <img src={logo} className="customerimg"/>
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder" /> 

                    </div>

                    <div className='contactbutton_bottom'>
            <button type='button' className='cancelbutton'>Cancel</button>
            <button type='button' className='savebutton'>Save</button>
            </div>
        </div>
    </div> 
    </div>
    </div>
  </>
  )
}

export default Contacts
