import React,{useEffect, useState} from 'react';
// import Footer from '../Footer/Footer';
import Page_heading from '../Page_Heading/Page_heading';
import "./AddNewCustomer.scss";
import logo from "./images/Email.svg";


const initialFieldValues = {
    lgnm: "",
    gstin: "",
  };

function AddNewCustomer(props) {
     const [values, setValues] = useState(initialFieldValues);
     const [customer, setCustomer] = useState([]);

     let gstinparams =values.gstin;

    const getData = () => {
        fetch  (`https://commonapi.mastersindia.co/commonapis/searchgstin?gstin=${gstinparams}`,{ mode: 'no-cors'},
        {
            headers: {
            'Authorization': 'Bearer 0ab31ef7392227173c6e8d34195e86d5eb0da1e9',
            'client_id' : 'JarZChUcsytSBbnkpt',
            'Accept-Control-Allow-Origin': '*',
        },
        })
            .then((response) => {
            return response.json();
            })
      .then((data) => {
        setCustomer(data);
       console.log("data",data.lgnm);
      });
}

useEffect(() => {
  getData()
  console.log("Getting Data");
 // console.log(customer);
}, [gstinparams]);



const onChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(value);
    console.log(name);
  };

  return (
    <>
    <Page_heading parent={"Business Account"} child={"Add New Customer"}/>
    <div style={{height:"550px", overflow:"scroll"}}>
    {/* <table border="2px" className = "table table-striped table-bordered">

<thead>
    <tr>
        <th>User Id</th>
        <th>ID</th>
        <th>Title</th>
        <th>Completed</th>
    </tr>
</thead>
<tbody>

{customer.map(cu =>
<tr>
<td>{cu.lgnm}</td>

</tr>
)
}
</tbody>
</table> */}

    <div className='newcustomer'>
        <h1 className='box_heading1'>New Customer</h1>
              <div className='container_details1' >
                <div className='form-left'>

                    <label className='label'>GST Treatment</label><br/>
                    <select className='customerinput' style={{marginBottom:"18px",color:"#697A8D", outline:"none"}} placeholder='select value' name="values" id="values" >
                    <option value="" >Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>
                    <label className='label' style={{marginTop:"5px"}}>GST No.</label><br/>
                    <div className='customerdropdown' style={{marginTop:"5px"}}>
                        <img src={logo} className="customerimg"/>
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder"   name="gstin"
                  value={values.gstin}
                  onChange={onChange}/> 
                    </div>
                    <label className='label' style={{marginTop:"5px"}}>Business Name</label><br/>
                    <div className='customerdropdown' style={{marginTop:"5px"}}>
                        <img src={logo} className="customerimg" />
                        <input type="text" style={{border:"none", outline:"none"}} placeholder="Placeholder"/> 
                    </div>
                    <label className='label'>Type Category</label><br/>
                    <select  className='customerinput' style={{marginBottom:"18px",  color:"#697A8D", outline:"none"}} placeholder='select value' name="values" id="values" >
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
                    <select className='customerinput1' style={{marginBottom:"18px",color:"#697A8D", outline:"none"}} placeholder='select value' name="values" id="values" >
                    <option value="">Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>
                        </div>
                        <div style={{width:"50%"}}>
                        <label className='label'>Payment</label><br/>
                    <select className='customerinput1' style={{marginBottom:"18px",color:"#697A8D", outline:"none"}} placeholder='select value' name="values" id="values" >
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
                    <select className='customerinput' style={{marginBottom:"18px",color:"#697A8D", outline:"none"}} placeholder='select value' name="values" id="values" >
                    <option value="">Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>
                    <label className='label'>Contacts</label><br/>
                    <select className='customerinput' style={{marginBottom:"18px",color:"#697A8D", outline:"none"}} placeholder='select value' name="values" id="values" >
                    <option value="">Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select>
                    <label className='label'>Ownership</label><br/>
                 <select className='customerinput' style={{marginBottom:"18px",color:"#697A8D", outline:"none"}} placeholder='select value' name="values" id="values" >
                    <option value="">Select value</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                    </select> 
                    {/* <div class="dropdown">
  <button onclick={() => myFunction} class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <input type="text" placeholder="Search.." id="myInput" onkeyup={() => filterFunction}/>
    <a href="#about">About</a>
    <a href="#base">Base</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact</a>
    <a href="#custom">Custom</a>
    <a href="#support">Support</a>
    <a href="#tools">Tools</a>
  </div> 
</div>*/}

                    <div className='customerbutton_bottom'>
            <button type='button' className='cancelbutton'>Cancel</button>
            <button type='button' className='savebutton'>Save</button>
            </div>
                  
          </div>
            </div>
            </div>
            </div>
            {/* <Footer/>  */}
    </>
  )
}

export default AddNewCustomer
