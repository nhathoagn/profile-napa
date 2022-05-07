import React, { useEffect, useState } from "react";
import { Layout, Menu, Switch } from "antd";
import {
  DashboardTwoTone,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Contents from "./Contents";
import { Link } from "react-router-dom";
import { Footer } from "antd/lib/layout/layout";
import { getUserById } from "../../api/api";

const Dashboard = (props) => {
  const { Header, Sider, Content } = Layout;
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // option 1 == todoList ; option 2 == list users; option 3 == view account; option4 == edit account; 
  // option5 == create user ; option 6 == userDetails ; option 7 == userTodo
  const [option, setOption] = useState(1);

  // get id user
  const id = JSON.parse(localStorage.getItem("id"));
  if (id == undefined) {
    localStorage.clear();
    navigate(`/`);
  }
  useEffect(() => {
    getInforUser();
    setOption(props.option);
  }, [props.option]);

  const getInforUser = async () => {
    const response = await getUserById(id);
    setUser(response.data);
  };

  let switchText = "switchText";
  let switcher = "";
  let dashboardName = "";

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  if (collapsed) {
    console.log(collapsed);
    switchText += " collapsed";
    switcher += " collapsed";
    dashboardName += " collapsed";
  } else {
    switchText -= " collapsed";
    switcher -= " collapsed";
    dashboardName -= " collapsed";
  }

  const [theme, setTheme] = useState("dark");

  if (theme == "dark") {
    switchText += " dark";
  } else {
    switchText -= " dark";
  }

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  console.log(option);
  return (
    <Layout className="layout">
      <Sider collapsed={collapsed} theme={theme}>
        <div className="logo">
          <DashboardTwoTone />
          <h2 className={dashboardName}>DASHBOARD</h2>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme={theme}
          className="menu-sidebar"
        >
          <Menu.Item key="1" onClick={() => setOption(1)}>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <UnorderedListOutlined />
              <span>TodoList</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => setOption(2)}
            disabled={user && user.role === "user"}
          >
            <Link to="/users" style={{ textDecoration: "none" }}>
              <UserOutlined />
              <span>Users</span>
            </Link>
          </Menu.Item>
        </Menu>
        <div className="switch-theme">
          <span className={switchText}>Switch theme</span>
          <div className={switcher}>
            <Switch
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </div>
      </Sider>
      <div className="right-side">
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {collapsed ? (
              <MenuUnfoldOutlined className="trigger" onClick={toggle} />
            ) : (
              <MenuFoldOutlined className="trigger" onClick={toggle} />
            )}
            <div className="account">
              <h2>
                Hi, {user && user.first_name} {user && user.last_name}
              </h2>
              <div className="ava">
                <div className="ava-img">
                  <img
                    onClick={() => {
                      setOption(3);
                      navigate(`/account`, { option: 4 });
                    }}
                    src={user && user.avatar}
                  />
                  <button
                    className="logout"
                    onClick={() => {
                      props.logout();
                      navigate(`/`);
                    }}
                  >
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </Header>

          <Content
            className="site-layout-background"
            style={{
              padding: "20px",
              backgroundColor: "#FAFAFA",
              minHeight: 280,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Contents option={option} />
          </Content>
        </Layout>
        <Footer className="ft">
          <div className="copyright">
            <p>Copyright &copy; 2022</p>
          </div>
        </Footer>
      </div>
    </Layout>
  );
};

export default Dashboard;
