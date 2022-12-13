import React from 'react';
// import Footer from '../Footer/Footer';
import Page_heading from '../Page_Heading/Page_heading';
import "./AddNewCustomer.scss";
import logo from "./images/Email.svg";
//import '../Page_Heading/Page_heading.scss'

function AddNewCustomer() {
  return (
    <>
    <Page_heading parent={"Business Account"} child={"Add New Customer"}/>
    <div className='newcustomer'>
        <h1 className='box_heading1'>New Customer</h1>
              <div className='container_details1' >
                <div className='form-left'>

                    <label className='label'>GST Treatment</label><br/>
                    <select className='customerinput' style={{marginBottom:"18px"}} placeholder='select value' name="values" id="values" >
                    <option value="" >Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>
                    <label className='label' style={{marginTop:"5px"}}>GST No.</label><br/>
                    <div className='customerdropdown' style={{marginTop:"5px"}}>
                        <img src={logo} className="customerimg" />
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder"/> 
                    </div>
                    <label className='label' style={{marginTop:"5px"}}>Business Name</label><br/>
                    <div className='customerdropdown' style={{marginTop:"5px"}}>
                        <img src={logo} className="customerimg" />
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder"/> 
                    </div>
                    <label className='label'>Type Category</label><br/>
                    <select className='customerinput' style={{marginBottom:"18px"}} placeholder='select value' name="values" id="values" >
                    <option value="">Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>
                    <label className='label' style={{marginTop:"5px"}}>Pancard</label><br/>
                    <div className='customerdropdown'>
                        <img src={logo} className="customerimg" />
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder"/> 
                    </div>
                    <div style={{display:"flex"}}>
                        <div style={{width:"50%"}}>
                        <label className='label' style={{marginTop:"5px"}}>Currency</label><br/>
                    <select className='customerinput1' style={{marginBottom:"18px"}} placeholder='select value' name="values" id="values" >
                    <option value="">Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>
                        </div>
                        <div style={{width:"50%"}}>
                        <label className='label'>Payment</label><br/>
                    <select className='customerinput1' style={{marginBottom:"18px"}} placeholder='select value' name="values" id="values" >
                    <option value="">Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>
                        </div>
                    </div>
                    <label className='label' style={{marginTop:"5px"}}>Credit Limit</label><br/>
                    <div className='customerdropdown'>
                        <img src={logo} className="customerimg" />
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder"/> 
                    </div>
                </div>

          <div className='form-right'>

          <label className='label' style={{marginTop:"5px"}}>Email</label><br/>
                    <div className='customerdropdown'>
                        <img src={logo} className="customerimg" />
                        <input type="email" style={{border:"none", outline:"none"}} placeholder="Placeholder"/> 
                    </div>
                    <label className='label' style={{marginTop:"5px"}}>Pincode</label><br/>
                    <div className='customerdropdown'>
                        <img src={logo} className="customerimg" />
                        <input type="number" style={{border:"none", outline:"none"}} placeholder="Placeholder"/> 
                    </div>
                    <label className='label' style={{marginTop:"5px"}}>Address</label>
                        <input type="text" className='customeraddress' placeholder="Placeholder"/> 
                      
                    <label className='label'>Default Place of Supply</label><br/>
                    <select className='customerinput' style={{marginBottom:"18px"}} placeholder='select value' name="values" id="values" >
                    <option value="">Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>
                    <label className='label'>Contacts</label><br/>
                    <select className='customerinput' style={{marginBottom:"18px"}} placeholder='select value' name="values" id="values" >
                    <option value="">Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>
                    <label className='label'>Ownership</label><br/>
                    <select className='customerinput' style={{marginBottom:"18px"}} placeholder='select value' name="values" id="values" >
                    <option value="">Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>

                    <div className='customerbutton_bottom'>
            <button type='button' className='cancelbutton'>Cancel</button>
            <button type='button' className='savebutton'>Save</button>
            </div>
                  
          </div>
            </div>
            </div>
            {/* <Footer/>  */}
    </>
  )
}

export default AddNewCustomer
