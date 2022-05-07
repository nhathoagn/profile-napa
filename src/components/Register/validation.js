import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllAccount } from "../../api/api";

toast.configure();
var phone_regex = /0[1-9]\d{8}/;
var email_regex =   
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const validatePassword = (password, confirmPassword) => {
  if (password.length < 8) toast("Password must be at least 8 characters");
  if (password !== confirmPassword)
    toast("Password and confirm password does not match");
  if (password.length >= 8 && password === confirmPassword) return true;
};

export const validatePhone = (phone) => {
  if (phone_regex.test(phone) == false) toast("Please check your phone");
  else return true;
};

export const validateEmail = async (email) => {
  if (email_regex.test(email) == false) toast("Please check your email");
  if (
    email_regex.test(email) == true &&
    (await checkEmailExist(email)) == false
  )
    return true;
};

export const validateAge = (age) => {
  if (age <= 0) toast("Please check your age");
  else return true;
};

export const validateGender = (gender) => {
  if (gender === "") toast("Please choose your gender");
  else return true;
};

// Find record by properties
async function getOneBy(filters) {
  const records = await getAllAccount();
  for (let record of records.data) {
    let found = true;
    for (let key in filters) {
      if (record[key] !== filters[key]) {
        found = false;
      }
    }
    if (found) return record;
  }
}
export const checkEmailExist = async (email) => {
  if ((await getOneBy({ email })) == undefined) {
    return false;
  } else return toast("Email already in use");
};
