
import Guestpage from "./guestpage";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./login/login_page";
import Signup from "./login/signin";
import Doctor from "./doctors/doctor";
import Form from "./Entry/form";
function App() {
  return (
    <>
      <Routes>
        <Route path="/HealthDoc_/" element={<Guestpage />} />
        <Route path="/HealthDoc_/login" element={<Login />} />
        <Route path="/HealthDoc_/signup" element={<Signup />} />
        <Route path="/HealthDoc_/doctors" element={<Doctor />} />
        <Route path="/HealthDoc_/guest" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
