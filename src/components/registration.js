
import '../App.css';
import { useState } from 'react';
import createUser from '../fauna/createUser';
// import { toast } from 'material-react-toastify';
import { sendMail } from '../services/sendMail';


function Registration() {
  const [alertMessage, setAlertMessage] = useState({
    type: '',
    message: ''
  });
  const [formState, updateFormState] = useState({
    fname: '',
    mname: '',
    lname: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    bank_name: '',
    account_name: '',
    account_number: '',
  });


  const updateForm = e => {
    const { value, name } = e.target;
    updateFormState({
      ...formState,
      [name]: value
    });
  };

  const saveInfo = async () => {

    if (!formState.fname) {
      // toast.error('Please fill all fields')
      alert('Please fill all fields')
      setAlertMessage({
        type: 'danger',
        message: 'Please fill all fields'
      });
      return;
    }

    const data = {
      ...formState,
    }

    const result = await createUser(data);
    const notifyUser = await sendMail(data.email, data.fname + ' ' + data.lname);

    if (result.ts) {
        // updateFormState({ 
        //     fname: '',
        //     mname: '',
        //     lname: '',
        //     dob: '',
        //     email: '',
        //     phone: '',
        //     address: '',
        //     bank_name: '',
        //     account_name: '',
        //     account_number: '',
        // });
      
      setAlertMessage({ type: 'success', message: 'Registration successful' });

      alert('Registration successful')
      // toast.success('Registration successful')

    } else {
      setAlertMessage({ type: 'danger', message: 'Registration failed' });
      alert('Registration failed, please try again')
      // toast.error('Registration failed')
    }

  }


  setTimeout(() => {
    clearAlertMessage();
  }, 20000);

  const clearAlertMessage = () => {
    setAlertMessage({
      type: '',
      message: ''
    });
  }


  // console.log(formState);

  return (
    <div class="container" style={{marginTop: '50px', marginBottom: '50px'}}>
      <img src="https://content.app-sources.com/s/19193257581773851/uploads/Images/Purple_Logo_Trans-1266811.png" alt="logo" style={{width: '100px', display: 'block', margin: 'auto', marginBottom: '10px'}} />

      <div class="col-lg-6 well card mx-auto">
        <div class="row card-body">

          <input type="hidden" name="reference" value="372789" />
          {alertMessage.message && (
            <div class={`alert alert-${alertMessage.type}`} role="alert">
                {alertMessage.message}
            </div>
            )}

          <div class="col-sm-12">
          <h5>Personal Details</h5>
            <div class="row">
              <div class="col-sm-4 form-group">
                <label>First Name:</label>
                <input type="text" name="fname" value={formState.fname} onChange={updateForm} required="required" placeholder="Enter First Name Here.." class="form-control" />
              </div>
              <div class="col-sm-4 form-group">
                <label>Middle Name:</label>
                <input type="text" name="mname" value={formState.mname} onChange={updateForm} placeholder="Enter Middle Name Here.." class="form-control" />
              </div>
              <div class="col-sm-4 form-group">
                <label>Last Name:</label>
                <input type="text" name="lname" value={formState.lname} onChange={updateForm} required="required" placeholder="Enter Last Name Here.." class="form-control" />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6 form-group">
                <label>Gender:</label>
                <select class="form-control" value={formState.gender} onChange={updateForm} name="gender" required="required" >
                  <option value="">Select Gender</option>
                  <option> Male </option>
                  <option> Female </option>
                </select>
              </div>
              <div class="col-sm-6 form-group">
                <label>Date of Birth:</label>
                <input type="text" name="dob" value={formState.dob} onChange={updateForm} placeholder="Enter Date of Birth Here.." class="form-control" required />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6 form-group">
                <label>Email Address:</label>
                <input type="email" name="email" value={formState.email} onChange={updateForm} placeholder="Enter Email Address Here.." class="form-control" required />
              </div>
              <div class="col-sm-6 form-group">
                <label>Whatsapp Number :</label>
                <input type="Number" name="phone" value={formState.phone} onChange={updateForm} placeholder="Enter Whatsapp number Here.." class="form-control" required />
              </div>
            </div>

            <div class="form-group">
              <label>Contact Address:</label>
              <textarea onChange={updateForm} value={formState.address} placeholder="Enter Contact Address Here.." rows="3" class="form-control" name="address" required></textarea>
            </div>


            <h5>Bank Details</h5>

            <div class="form-group">
              <label>Bank Name:</label>
              <input type="text" value={formState.bank_name} onChange={updateForm} placeholder="Enter Bank Name Here.." class="form-control" name="bank_name" required />
            </div>
            <div class="form-group">
              <label>Account Name:</label>
              <input type="text" value={formState.account_name} onChange={updateForm} placeholder="Enter Account Name Here.." class="form-control" name="account_name" required />
            </div>
            <div class="form-group">
              <label>Account Number:</label>
              <input type="text" value={formState.account_number} onChange={updateForm} placeholder="Enter Account Number Here.." class="form-control" name="account_number" required />
            </div>
            <button  onClick={saveInfo} name="register-form" class="btn btn-md btn-purple">Submit</button>


          </div>
          <p>&nbsp;</p>
          <p className=' text-center' style={{ fontWeight: 'bold', color: '#282c3445'}}>Kindly confirm that the phone number you provided is a whatsapp number. You will be added to a whatsapp group with one week of your registration.</p>


        </div>
      </div>

    </div>
  );
}

export default Registration;

