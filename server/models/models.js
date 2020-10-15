import Mongoose from 'mongoose'
const db = Mongoose.createConnection('mongodb://localhost:27017/clearview')

const DoctorSchema = new Mongoose.Schema({
  LastName: String,
  FirstName: String,
  FullName: String,
  PhoneNumber: String,
  FaxNumber: String,
  PracticeName: String,
  Specialty: String,
  Address: String,
  City: String,
  State: String,
  Zip: String,
  County: String
})
const DoctorModel = db.model('Doctor', DoctorSchema)

const NurseSchema = new Mongoose.Schema({
  LastName: String,
  FirstName: String,
  FullName: String,
  Certification: String,
  PhoneNumber: String,
  Type: String,
  FaxNumber: String,
  PracticeName: String,
  Address: String,
  City: String,
  State: String,
  Zip: String,
  County: String
})
const NurseModel = db.model('Nurse', NurseSchema)

const HospitalSchema = new Mongoose.Schema({
  Name: String,
  Address: String,
  City: String,
  State: String,
  Zip: String,
  County: String,
  PhoneNumber: String,
  Directory: Mongoose.Schema.Types.Mixed
})
const HospitalModel = db.model('Hospital', HospitalSchema)

const PharmacySchema = new Mongoose.Schema({
  City: String,
  Name: String,
  FaxNumber: String,
  PhoneNumber: String,
  State: String
})
const PharmacyModel = db.model('Pharmacy', PharmacySchema)

export {
  DoctorModel,
  NurseModel,
  HospitalModel,
  PharmacyModel
}
