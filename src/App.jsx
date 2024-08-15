import { Routes, Route, Link } from "react-router-dom";
import Login from "./login/login_page";
import Signup from "./login/signin";
import Form from "./Entry/form";
import Guestdoc from "./doctors/guest_D0c";
import Navbar from "./Home/navbar";
import Cover from "./Home/cover";
import Log_navbar from "./Home/log_nav";
import Doctor from "./doctors/doctor";
import Book from "./appointment/appoint";
import Calendar from "./appointment/calendar";
import Time_table from "./appointment/timetable";
import Reviews_table from "./appointment/reviews_table";
import Payment from "./payment/payment_page";

function App() {
  return (
    <>
      <Routes basename="/HealthDoc_/">
        <Route path="/HealthDoc_/" element={<Navbar />}>
          <Route index element={<Cover />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="guest_Form" element={<Form />} />
          <Route path="guest_vist" element={<Guestdoc />} />
        </Route>

        <Route path="/HealthDoc_/doctor/" element={<Log_navbar />}>
          <Route index element={<Doctor />} />
          <Route path="bookappointment/:id" element={<Book />}>
            <Route index element={<Calendar />} />
            <Route path="time_table" element={<Time_table />} />
            <Route path="reviews" element={<Reviews_table />} />
          </Route>
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
