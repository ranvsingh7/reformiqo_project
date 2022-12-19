import React from 'react'
import Page_heading from '../Page_Heading/Page_heading';
import logo from "../Customers/images/Email.svg";
import "./Contacts.scss";
import DropdownSimple from './DropdownSimple/DropdownSimple';
// import Select from "react-select";

function Contacts() {

    // const option = [
    //     {
    //       value: "Owner",
    //       label:(<div className='contdetails' >Owner</div>),
    //     },
    //     {
    //       value: "Accountant",
    //       label: (<div className='contdetails'>Accountant</div>),
    //     },
    //     {
    //       value: "Sales Person",
    //       label: (<div className='contdetails' >Sales Person</div>),
    //     },
    //     {
    //       value: "Key Person",
    //       label: (<div className='contdetails'>Key Person</div>),
    //     },
    //     {
    //       value: "Technician",
    //       label: (<div className='contdetails'>Technician</div>),
    //     },
    //     {
    //         value: "Manager",
    //         label: (<div className='contdetails'>Manager</div>),
    //       },
    //   ];

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
                    <DropdownSimple/>

                    <label className='leadlabel'>Lead Source</label><br/>
                    <DropdownSimple/>

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
