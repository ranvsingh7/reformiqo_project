import Select  from 'react-select';
import React from 'react'
import "./DropdownWithProfile.scss";

function DropdownWithProfile() {
    const option=[
        {
          value:'one' , label: <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style ={{ display :"flex"}}>
                <div> <img src="./images/searchbar_icons/User - Avtar.svg" alt="" /></div>
                <div><p className='drpName'>Parth Goswami</p><p1 className="drpEmail">Parth.goswami@reformiqo.com</p1></div>
                </div>
                <div style={{display:"flex" ,alignItems: "center"}}>
                <p3 className="drpContact">Assigned</p3>
                <div>
                <p4 className="drpDate">19</p4>
                </div>
                </div>
                </div>
         
        },


        //   <div style={{display:"flex", justifyContent:"space-between"}}>
        //     <div>
        //     <img src="./images/searchbar_icons/User - Avtar.svg" alt="" />
        //     </div>
        //      <div>
        //   <div className='drpName'>Parth Goswami</div>
        //   <div className='drpEmail'>Parth.goswami@reformiqo.com</div>
        //   </div>
        //  <div>
        //   <div className='drpContact'>Contact Added</div>
        //   <div className='drpDate'>10 Dec 2022</div>
        //   </div>
        //   </div>
    
        {
          value:'two' , label:  <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style ={{ display :"flex"}}>
          <div> <img src="./images/searchbar_icons/User - Avtar.svg" alt="" /></div>
          <div><p className='drpName'>Parth Goswami</p><p1 className="drpEmail">Parth.goswami@reformiqo.com</p1></div>
          </div>
          <div style={{display:"flex" ,alignItems: "center"}}>
          <p3 className="drpContact">Assigned</p3>
          <div>
          <p4 className="drpDate">19</p4>
          </div>
          </div>
          </div>
        },
        {
          value:'three' , label:  <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style ={{ display :"flex"}}>
          <div> <img src="./images/searchbar_icons/User - Avtar.svg" alt="" /></div>
          <div><p className='drpName'>Parth Goswami</p><p1 className="drpEmail">Parth.goswami@reformiqo.com</p1></div>
          </div>
          <div style={{display:"flex" ,alignItems: "center"}}>
          <p3 className="drpContact">Assigned</p3>
          <div>
          <p4 className="drpDate">19</p4>
          </div>
          </div>
          </div>
        },
        {
          value:'four' , label:   <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style ={{ display :"flex"}}>
          <div> <img src="./images/searchbar_icons/User - Avtar.svg" alt="" /></div>
          <div><p className='drpName'>Parth Goswami</p><p1 className="drpEmail">Parth.goswami@reformiqo.com</p1></div>
          </div>
          <div style={{display:"flex" ,alignItems: "center"}}>
          <p3 className="drpContact">Assigned</p3>
          <div>
          <p4 className="drpDate">19</p4>
          </div>
          </div>
          </div>
        },
        {
          value:'five' , label:  <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style ={{ display :"flex"}}>
          <div> <img src="./images/searchbar_icons/User - Avtar.svg" alt="" /></div>
          <div><p className='drpName'>Parth Goswami</p><p1 className="drpEmail">Parth.goswami@reformiqo.com</p1></div>
          </div>
          <div style={{display:"flex" ,alignItems: "center"}}>
          <p3 className="drpContact">Assigned</p3>
          <div>
          <p4 className="drpDate">19</p4>
          </div>
          </div>
          </div>
        }
      ]
      
  return (
    <div className='drpprofile'>
        <Select  placeholder="Select value" options={option}/>
    </div>
  )
}

export default DropdownWithProfile
