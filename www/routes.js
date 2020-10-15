import App from './containers/App'
import HomePage from './containers/HomePage'
import DoctorDetailPage from './containers/DoctorDetailPage'
import NurseDetailPage from './containers/NurseDetailPage'

import {
  AppointmentForm,
  ErrorReportForm
} from './containers/FormPages'
import {
  DoctorDirectoryPage,
  NurseDirectoryPage,
  HospitalDirectoryPage,
  IndividualHospitalDirectoryPage,
  PharmacyDirectoryPage
} from './containers/DirectoryPages'

export default([
  {
    path: '/',
    component: App,
    indexRoute: {component: HomePage},
    childRoutes: [
      {path: '/doctors', component: DoctorDirectoryPage},
      {path: '/doctors/:item', component: DoctorDetailPage},
      {path: '/nurses', component: NurseDirectoryPage},
      {path: '/nurses/:item', component: NurseDetailPage},
      {path: '/hospitals', component: HospitalDirectoryPage},
      {path: '/hospitals/:item', component: IndividualHospitalDirectoryPage},
      {path: '/pharmacies', component: PharmacyDirectoryPage}
    ]
  },
  {
    path: '/appointment',
    component: AppointmentForm
  },
  {
    path: '/error/:item',
    component: ErrorReportForm
  }
])
