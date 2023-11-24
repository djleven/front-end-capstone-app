import { useState } from "react"
import { SET } from '../state/availableTimesReducer.js'

const BookingForm = (props) => {
    const currentdate = new Date().toISOString().substr(0, 10);
    const [date, setDate] = useState(currentdate)
    const [time, setTime] = useState(props.availableTimes[0])
    const [guestNumber, setGuestNumber] = useState("2")
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
        props.dispatch({ type: SET, value: time })
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
           <select data-testid="availableTimes" value={time} onChange={(e) => setTime(e.target.value)}>
            {props.availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
            ))}
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
             <option value="">No Occasion</option>
             <option value="Birthday">Birthday</option>
             <option value="Anniversary">Anniversary</option>
           </select>
         </div>
         <button type="submit" className="button" disabled={!getIsFormValid()}>
            Make your reservation
         </button>
       </fieldset>
     </form>
   </div>
 )
}

export default BookingForm