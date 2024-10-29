import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Profile from "./profile_/profile";
import OnlinePayment from "./payment/online_pay";
import Pay from "./payment/pay_options";
import Upi from "./payment/methods/upi_pay";
import Gpay from "./payment/methods/gpay";
import Amazon from "./payment/methods/amazon";
import Phone from "./payment/methods/phonepay";
import Myappointments from "./profile_/my_appointemnts";
import Reports from "./profile_/my_labreports";
import Records from "./profile_/records";
import Consultation from "./profile_/consultation";
import Orders from "./profile_/Orders";
import Articles from "./profile_/articles";
import Feedback from "./profile_/feedback";
import Your_pay from "./profile_/your_pay";
import Contact from "./profile_/contact";
import Lab_test from "./nav_paths/labtest";
import Emergency from "./emergency/emergency";
import Blood from "./lab_tests/bloodtest/Bloodtest";
import MainTest from "./lab_tests/Main";
import Lab_Payment from "./lab_tests/bloodtest/lab_payment";
import Medicine from "./medicine_orders/medicine";
import list from "./medicine_orders/order_data";
function App() {
  const [cart_data, setCart_data] = useState(list);
  const [booked, setBook] = useState([]);

  useEffect(() => {
    console.log("Updated booked items:", booked);
  }, [booked]);

  const handleUpdateCart = (item) => {
    setBook((prevBooked) => [...prevBooked, item]);
  };

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
          <Route path="labtest" element={<Lab_test />} />
          <Route path=":town/:test" element={<MainTest />}></Route>
          <Route path=":town/:test/:id" element={<Lab_Payment />} />
          <Route index element={<Doctor />} />
          <Route path="bookappointment/:id" element={<Book />}>
            <Route index element={<Calendar />} />
            <Route path="time_table" element={<Time_table />} />
            <Route path="reviews" element={<Reviews_table />} />
          </Route>
          <Route path="emergency" element={<Emergency />} />
          <Route path="Myprofile" element={<Profile />}>
            <Route index element={<Myappointments />} />
            <Route path="appointments" element={<Myappointments />} />
            <Route path="labreports" element={<Reports />} />
            <Route path="medicalrecords" element={<Records />} />
            <Route path="consultation" element={<Consultation />} />
            <Route path="medicines" element={<Orders order={booked} />} />
            <Route path="articles" element={<Articles />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="mypayments" element={<Your_pay />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="bookappointment/:id/payment" element={<Payment />} />
          <Route path="OnlinePayment/:id" element={<OnlinePayment />}>
            <Route index element={<Pay />} />
            <Route path="upi" element={<Upi />} />
            <Route path="gpay" element={<Gpay />} />
            <Route path="amazon" element={<Amazon />} />
            <Route path="phone" element={<Phone />} />
          </Route>
          <Route
            path="medicines"
            element={
              <Medicine cart_data={cart_data} updateCart={handleUpdateCart} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
