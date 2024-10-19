import React from 'react'

function HeaderCTA() {
  return (
    <div className='headerCTA'>
        <div className='width'>
            <div> 
                <a href="mailto:">info@fyzical.com</a>
            </div>
            <div> 
                <span>
                    Love Your Life® 
                </span>
            </div>
            <div> 
                <span>Phone:</span>
                <a href="tel:+(312) 900-0994">(123) 900-9000</a>
                <a className='button-small text-w button-hover ml-2 button-rounded' href="">book apointment</a>
            </div>
        </div>
    </div>
  )
}

export default HeaderCTA