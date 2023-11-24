import { useReducer } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from '../layouts/Main.js'
import BookingForm from '../components/BookingForm.js'
import availableTimesReducer from '../state/availableTimesReducer.js'

const BookingPage = () => {
    const init = [ '17:00','18:00','19:00','20:00', '21:00', '22:00'];
    const [state, dispatch] = useReducer(availableTimesReducer, init);
    const location = useLocation();
    return (
        <MainLayout location={location.pathname}>
            <BookingForm dispatch={dispatch} availableTimes={state}/>
        </MainLayout>
        )
  };

export default BookingPage;
