import React from 'react'
import './clientdetails.css';
export default function ClientDetails() {
  return (
    <>
        <div className='container ClientAccount'>
            <div className='row '>
                <div className='col-12'>
                <div className=''>
                <div className='create pt-3'>
                    <h4>Create Client</h4>
                    <p>Create an account for the client!</p>
                </div>
                <div>
                <label>Company Name</label> <br/>
                    <input type='text' style={{width:'505px',borderRadius:'25px'}} />
                </div>
                </div>
                <div className='row pt-3'>
                    <div className='col-6'>
                    <label>Username</label> <br/>
                    <input type='text' style={{width:'250px',borderRadius:'25px'}} />
                    </div>
                    <div className='col-6'>
                    <label>Password</label> <br/>
                    <input type='text' style={{width:'250px',borderRadius:'25px'}} />
                    </div>
                </div>
                <div className='row p-5'>
                    <div className='col-6'>
                    <button type='button'>Cancel</button>
                    </div>
                    <div className='col-6'>
                    <button type='button'>Save</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
