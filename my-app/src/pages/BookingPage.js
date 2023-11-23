import { useLocation } from "react-router-dom";
import MainLayout from '../layouts/Main.js'
import BookingForm from '../components/BookingForm.js'

const BookingPage = () => {
    const location = useLocation();
    return (
        <MainLayout location={location.pathname}>
            <BookingForm />
        </MainLayout>
        )
  };

export default BookingPage;
