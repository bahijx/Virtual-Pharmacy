import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/all.css';

import Chat from './components/chat';
import ChatPharmacistOptions from './pages/chatPharmacistOptions' ;
import Login from './pages/login';
import NavBar from './components/NavBar';
import RegisterPatient from './pages/registerPatient';
import RegisterPharmacist from './pages/registerPharmacist';
import AdministratorView from './pages/administratorView'; 
import DoctorView from './pages/doctorView';
import PatientView from './pages/patientView'; 
import PharmacistView from './pages/pharmacistView'; 
import MedicineList from './components/medicineList';
import MedicineView from './pages/medicineView';
import AddAdministrator from './pages/addAdministrator';
import PatientInfo from './pages/patientInfo';
import PharmacistInfo from './pages/pharmacistInfo';
import RequestInfo from './pages/requestInfo';
import AddMedicine from './pages/addMedicine';
import EditMedicine from './pages/editMedicine';
import ForgotPassword from './pages/forgot_password';
import ChangePassword from './pages/change_password';
import ResetPassword from './pages/reset_passowrd';
import CartInfo from './pages/cartInfo';
import Checkout from './pages/checkout';
import OrderDetails from './pages/orderDetails';
import SalesReportInfo from './pages/salesReportInfo';
import NotificationsPharmacist from './pages/notificationsPharmacist';
import Pharmacists from './pages/pharmacists';
import Patients from './pages/patients';
import PrescriptionsList from './components/PrescriptionsList'
import PrescriptionInfo from './pages/prescriptionInfo';
import ChatWithPharmacist from './pages/chatWithPharmacist';

// const socket = io.connect("http://localhost:8000");

function App() {
  return (
    <div className='main'>
      {/* <NavBar /> */}
      <main>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/changePassword/:username/:type" element={<ChangePassword />} />
          <Route exact path="/resetPassword" element={<ResetPassword />} />
          <Route exact path="/registerPatient" element={<RegisterPatient />} />
          <Route exact path="/registerPharmacist" element={<RegisterPharmacist />} />
          <Route exact path="/patientView/:username" element={<PatientView />} />
          <Route exact path="/pharmacistView/:username" element={<PharmacistView />} />
          <Route exact path="/administratorView/:username" element={<AdministratorView />} />
          <Route exact path="/medicineView/:name" element={<MedicineView />} />
          <Route exact path="/medicineList/:username" element={<MedicineList />} />
          <Route exact path="/addAdministrator/:username" element={<AddAdministrator />} />
          <Route exact path="/addMedicine/:username" element={<AddMedicine />} />
          <Route exact path="/editMedicine/:name/:username" element={<EditMedicine />} />
          <Route exact path="/patientInfo/:username/:usernameAdmin" element={<PatientInfo />} />
          <Route exact path="/pharmacistInfo/:username/:usernameAdmin" element={<PharmacistInfo />} />
          <Route exact path="/requestInfo/:username/:usernameAdmin" element={<RequestInfo />} />
          <Route exact path="/cartInfo/:username" element={<CartInfo />} />
          <Route exact path="/checkout/:username" element={<Checkout />} />
          <Route exact path="/orderDetails/:username" element={<OrderDetails />} />
          <Route exact path="/salesReportInfo/:username/:type" element={<SalesReportInfo />} />
          <Route exact path="/notificationsPharmacist/:username" element={<NotificationsPharmacist />} />
          <Route exact path="/Pharmacists/:username" element={<Pharmacists />} />
          <Route exact path="/patients/:username" element={<Patients />} />
          <Route exact path="/prescriptionsList/:username" element={<PrescriptionsList />} />
          <Route exact path="/prescriptionInfo/:username/:id" element={<PrescriptionInfo />} />


          <Route exact path="/chat/:username" element={<Chat />} />
          <Route exact path="/chatPharmacistOptions/:username" element={<ChatPharmacistOptions />} />
          <Route exact path="/chatWithPharmacist/:username" element={<ChatWithPharmacist />} />
          <Route exact path="/doctorView/:username" element={<DoctorView />} />

          
        </Routes>
      </main>
    </div>
  );
}

export default App;
