import Guestpage from "./guestpage";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./login/login_page";
import Signup from "./login/signin";
import Form from "./Entry/form";
import Guestdoc from "./doctors/guest_D0c";
import Doctor_login from "./doctors/login_doctor";
function App() {
  return (
    <>
      <Routes basename="/HealthDoc_/">
        <Route path="/HealthDoc_/" element={<Guestpage />} />
        <Route path="/HealthDoc_/login" element={<Login />} />
        <Route path="/HealthDoc_/signup" element={<Signup />} />
        <Route path="HealthDoc_/doctor" element={<Doctor_login />} />
        <Route path="/HealthDoc_/guest_Form" element={<Form />} />
        <Route path="/HealthDoc_/guest_vist" element={<Guestdoc />} />
      </Routes>
    </>
  );

}

export default App;
