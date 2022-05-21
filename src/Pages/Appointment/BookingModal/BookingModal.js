import { format } from 'date-fns';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
const BookingModal = ({date,treatment,setTreatment,refetch}) => {
  const [user] = useAuthState(auth);
    const {name,slots,_id}=treatment;
    const formatDate=format(date,'PPPP')
    const handlebooking=(event)=>{
      event.preventDefault();
      const slot=event.target.slot.value;
      const phone=event.target.phone.value;
      const booking={
        treatment:_id,
        treatment:name,
        date:formatDate,
        slot,
        PatientName:user.displayName,
        PatientEmail:user.email,
        phone

      }
      fetch("http://localhost:5000/booking",
         {
           method:"POST",
           headers:{
             'content-type':'application/json'
           },
           body:JSON.stringify(booking)
         })
         .then(res=>res.json())
         .then(data=>{
           if(data.success)
            {
                toast(`Appontment set on ${formatDate} at ${slot}`);
            }
            else{
              toast.error(`You already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
         })
         setTreatment(null);
         refetch();
    }
  return (
     <div>
<input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-middle sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class=" btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handlebooking} class="grid grid-cols-1 gap-3 justify-items-center mt-2">
    <input name="date"type="text" value={format(date, 'PPPP')} class="input input-bordered input-success w-full max-w-xs" />
    <input name="treatmentName"type="text" value={name} class="input input-bordered input-success w-full max-w-xs" />
    <select name="slot" class="select select-bordered select-success w-full max-w-xs">
    {
        slots.map(s=><option>{s}</option>)
    }
    </select>
    <input name="name" type="text" value={user?.displayName} class="input input-bordered input-success w-full max-w-xs" />
    <input name="email"type="email" value={user?.email} class="input input-bordered input-success w-full max-w-xs" />
    <input name="phone"type="text" placeholder="Phone Number" class="input input-bordered input-success w-full max-w-xs" />
    <input type="submit" value="submit" class="bold btn w-full max-w-xs btn-secondary" />
    </form>
  </div>
</div>
     </div>
  )
}

export default BookingModal