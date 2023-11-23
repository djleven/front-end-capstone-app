

import { useLocation } from "react-router-dom";
import MainLayout from '../layouts/Main.js'

const BookingPage = () => {
    const location = useLocation();
    return (
        <MainLayout location={location.pathname}>
            booking page
        </MainLayout>
        )
  };

export default BookingPage;
