import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import { format } from 'date-fns';
import React from 'react'

const BookingModal = ({date,treatment,setTreatment}) => {
    const {name,slots}=treatment;
    const handlebooking=(event)=>{
      event.preventDefault();
      const slot=event.target.slot.value;
      const date=event.target.date.value;
      const treatmentName=event.target.treatmentName.value;
      const name=event.target.name.value;
      const email=event.target.email.value;
      const phone=event.target.phone.value;
      console.log(treatmentName,date,name,email,phone,slot);
      setTreatment(null);
    }
  return (
     <div>
<input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-middle sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class=" btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handlebooking} class="grid grid-cols-1 gap-3 justify-items-center mt-2">
    <input name="date"type="text" value={format(date, 'PP')} class="input input-bordered input-success w-full max-w-xs" />
    <input name="treatmentName"type="text" value={name} class="input input-bordered input-success w-full max-w-xs" />
    <select name="slot" class="select select-bordered select-success w-full max-w-xs">
    {
        slots.map(s=><option>{s}</option>)
    }
    </select>
    <input name="name" type="text" placeholder="Your Name" class="input input-bordered input-success w-full max-w-xs" />
    <input name="email"type="email" placeholder="Email Address" class="input input-bordered input-success w-full max-w-xs" />
    <input name="phone"type="text" placeholder="Phone Number" class="input input-bordered input-success w-full max-w-xs" />
    <input type="submit" value="submit" class="bold btn w-full max-w-xs btn-secondary" />
    </form>
  </div>
</div>
     </div>
  )
}

export default BookingModal