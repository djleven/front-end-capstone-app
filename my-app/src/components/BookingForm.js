import { useState } from "react"

const BookingForm = () => {
 const [date, setDate] = useState("")
 const [time, setTime] = useState("")
 const [guestNumber, setGuestNumber] = useState("")
 const [occasion, setOccasion] = useState("")

 const getIsFormValid = () => {
   return (
     date && time && guestNumber
   )
 }
 
 const clearForm = () => {
   setDate("")
   setTime("")
   setGuestNumber("")
   setOccasion("")
 }

 const handleSubmit = (e) => {
   e.preventDefault()
   alert("Booking created!")
   clearForm()
 }

 return (
   <div className="BookingForm">
     <form onSubmit={handleSubmit}>
       <fieldset>
         <h1>Reserve a Table</h1>
         <div className="Field">
           <label>Date <sup>*</sup> </label>
           <input
             type="date"
             value={date}
             onChange={(e) => {
               setDate(e.target.value)
             }}
             placeholder="Date"
           />
         </div>
         <div className="Field">
           <label>Time</label>
           <select value={time} onChange={(e) => setTime(e.target.value)}>
             <option value="17">17:00</option>
             <option value="18">18:00</option>
             <option value="19">19:00</option>
             <option value="20">20:00</option>
             <option value="21">21:00</option>
             <option value="22">22:00</option>
           </select>
         </div>
         <div className="Field">
           <label>Number of guests<sup>*</sup> </label>
           <input
             value={guestNumber}
             onChange={(e) => {
               setGuestNumber(e.target.value)
             }}
             placeholder="Number of guests"
           />
         </div>
         <div className="Field">
           <label>Occasion <sup>*</sup> </label>
           <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
             <option value="Birthday">Birthday</option>
             <option value="Anniversary">Anniversary</option>
           </select>
         </div>
         <button type="submit" class="button" disabled={!getIsFormValid()}>
            Make your reservation
         </button>
       </fieldset>
     </form>
   </div>
 )
}

export default BookingForm