import { useNavigate } from "react-router-dom";
import {
  validateAge,
  validateEmail,
  validateGender,
  validatePassword,
  validatePhone,
} from "../Register/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../api/api";

const CreateUser = () => {
  const navigate = useNavigate();

  const create = async (e) => {
    e.preventDefault();
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;
    const phone = e.target.phone_number.value;
    const role = e.target.role.value;
    let avatar = "";
    const address = "";
    if (gender == "Male")
      avatar =
        "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png";
    if (gender == "Female")
      avatar =
        "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269619/ProfileProject/female_foayqk.png";

    if (
      validatePassword(password, confirm_password) &&
      validateAge(age) &&
      validateGender(gender) &&
      (await validateEmail(email)) &&
      validatePhone(phone)
    ) {
      let account = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        age: age,
        gender: gender,
        password: password,
        avatar: avatar,
        phone_number: phone,
        address: address,
        role: role,
      };
      register(account)
        .then(() => {
          navigate(`/users`);
        })
        .catch(() => toast("Server die"));
    }
  };

  return (

    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Create user</h2>
            <form onSubmit={create}>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">First Name</label>
                    <input
                      required
                      className="input--style-4"
                      type="text"
                      name="first_name"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div class="input-group">
                    <label className="label">Last Name</label>
                    <input
                      required
                      className="input--style-4"
                      type="text"
                      name="last_name"
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Age</label>
                    <input
                      required
                      className="input--style-4"
                      type="number"
                      max={90}
                      min={1}
                      name="age"
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Address</label>
                    <input
                      required
                      className="input--style-4"
                      type="text"
                      name="address"
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Email</label>
                    <input
                      className="input--style-4"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Phone Number</label>
                    <input
                      required
                      className="input--style-4"
                      type="text"
                      maxLength={12}
                      minLength={9}
                      name="phone_number"
                    />
                  </div>
                </div>
              </div>
              <div className="input-group">
                <label className="label">Gender</label>
                <div className="select">
                  <select name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div className="select-dropdown"></div>
                </div>
              </div>
              <div className="input-group">
                <label className="label">Role</label>
                <div className="select">
                  <select name="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                  </select>
                  <div className="select-dropdown"></div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Password</label>
                    <input
                      required
                      className="input--style-4"
                      type="password"
                      name="password"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div class="input-group">
                    <label className="label">Confirm Password</label>
                    <input
                      required
                      className="input--style-4"
                      type="password"
                      name="confirm_password"
                    />
                  </div>
                </div>
              </div>
              <div className="p-t-15">
                <button className="btn-edit" type="submit">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;