import "./Register.css";
import { register } from "../../api/api";
import { useNavigate } from "react-router-dom";
import {
  validateAge,
  validateEmail,
  validateGender,
  validatePassword,
  validatePhone,
} from "./validation";
import { Form, Input, InputNumber, Button, Select } from "antd";
import {
  FacebookFilled,
  YoutubeFilled,
  TwitterCircleFilled,
  AppstoreFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Footer } from "antd/lib/layout/layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Register = () => {
  toast.configure();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    },
  };

  const navigate = useNavigate();

  const handleSubmitForm = async (value) => {
    // const handleSubmitForm = async (e) => {

    // e.preventDefault();

    // const first_name = value.first_name;
    // const last_name = value.last_name;
    // const email = value.email;
    // const age = value.age;
    // const gender = value.gender;
    // const password = value.password;
    // const confirm_password = value.confirm_password;
    // const phone = value.phone;
    // let avatar = "";
    // const address = "";
    // if (gender == "Male")
    //   avatar =
    //     "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269617/ProfileProject/male_huq2ca.png";
    // if (gender == "Female")
    //   avatar =
    //     "https://res.cloudinary.com/dn1b78bjj/image/upload/v1650269619/ProfileProject/female_foayqk.png";

    // if (
    //   validatePassword(password, confirm_password) &&
    //   validateAge(age) &&
    //   validateGender(gender) &&
    //   (await validateEmail(email)) &&
    //   validatePhone(phone)
    // ) {
    //   let account = {
    //     first_name: first_name,
    //     last_name: last_name,
    //     email: email,
    //     age: age,
    //     gender: gender,
    //     password: password,
    //     avatar: avatar,
    //     phone_number: phone,
    //     address: address,
    //   };
    //   register(account).then(() => navigate("/"));
    // }
    const first_name = value.first_name;
    const last_name = value.last_name;
    const email = value.email;
    const age = value.age;
    const gender = value.gender;
    const password = value.password;
    const confirm_password = value.confirm_password;
    const phone = value.phone_number;
    const role = "user";
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
        .then(() => navigate("/"))
        .catch(() => toast("Server die"));
    }
  };
  const { Option } = Select;
  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        <div className="form-register">
          <Form
            {...layout}
            className="nest-messages"
            onFinish={handleSubmitForm}
          >
            <Form.Item
              className="name"
              name={"first_name"}
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="name"
              name={"last_name"}
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"email"}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select gender" allowClear>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={"age"}
              label="Age"
              rules={[
                {
                  type: "number",
                  min: 1,
                  max: 150,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name={"phone_number"}
              label="Phone number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input maxLength={12} minLength={9} />
            </Form.Item>
            <Form.Item
              name={"password"}
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name={"confirm_password"}
              label="Confirm Password"
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              className="submit"
              wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer>
        <div className="copyright">
          <div className="media">
            <FacebookFilled />
            <YoutubeFilled />
            <TwitterCircleFilled />
            <AppstoreFilled />
          </div>
          <p>Copyright &copy; 2022. Allrights</p>
        </div>
      </Footer>
    </div>
  );
};

export default Register;
