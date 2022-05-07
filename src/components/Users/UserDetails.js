import { useEffect, useState } from "react";
import { editUser, getUserById } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
 
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await getUserById(id);
    setUser(response.data);
  };

  if (user.address === "") {
    user.address = "-";
  }

  if (user.address === "") user.address = "-";

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const gender = user.gender;
  if (gender === "Male") {
    user.avatar =
      "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png";
  }
  if (gender === "Female") {
    user.avatar =
      "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269619/ProfileProject/female_foayqk.png";
  }
  const update = async (e) => {
    e.preventDefault();
    editUser(id, user).then(() => {
      navigate(`/users`);
    });
  };

  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Edit user</h2>
            <form onSubmit={update}>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">First Name</label>
                    <input
                      required
                      className="input--style-4"
                      type="text"
                      name="first_name"
                      value={user.first_name}
                      onChange={(e) => onValueChange(e)}
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
                      value={user.last_name}
                      onChange={(e) => onValueChange(e)}
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
                      value={user.age}
                      onChange={(e) => onValueChange(e)}
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
                      value={user.address}
                      onChange={(e) => onValueChange(e)}
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
                      value={user.email}
                      onChange={(e) => onValueChange(e)}
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
                      value={user.phone_number}
                      onChange={(e) => onValueChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="input-group">
                <label className="label">Gender</label>
                <div className="select">
                  <select
                    name="gender"
                    value={user.gender}
                    onChange={(e) => onValueChange(e)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div className="select-dropdown"></div>
                </div>
              </div>
              <div className="input-group">
                <label
                  className="label"
                  value={user.role}
                  onChange={(e) => onValueChange(e)}
                >
                  Role
                </label>
                <div className="select">
                  <select name="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                  </select>
                  <div className="select-dropdown"></div>
                </div>
              </div>
              <div className="p-t-15">
                <button className="btn-edit" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
