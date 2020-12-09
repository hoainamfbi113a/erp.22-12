import React, { Component } from "react";
import {Link}  from 'react-router-dom'
import logo from "../../assets/images/logo.png";
import logomall from "../../assets/images/logomall.jpeg";
import { Menu,Layout } from "antd"
import { withRouter } from 'react-router'
import { UserOutlined,PieChartOutlined,TeamOutlined,DesktopOutlined,FileOutlined } from '@ant-design/icons';

import "./Menu.css"
const { SubMenu } = Menu;
const { Sider } = Layout;
class MenuLayout extends Component {
  handleOnclick = () => {
    this.props.history.push('/crm/usersix');
  }
  render() {
    return (
      <div className="bbbb">
        <Sider collapsed={this.props.collapsed}>
        <Link to="/crm" className="logo">
          <div className="logo">
            <img 
              className="logo-img"
              style={{ objectFit: "cover" }}
              src={this.props.collapsed == true ? logomall : logo}
            ></img>
          </div>
          </Link>
          <Menu mode="inline" className="menulayout-main" >
         <SubMenu  title="Thông tin cá nhân" icon={<UserOutlined />}>
              <Menu.Item key="1">
              <Link to="/crm/notification">Thông báo chungs</Link>
              </Menu.Item>
              <Menu.Item key="2"><Link to="/crm/mynotification">Thông báo của tôi</Link></Menu.Item>
              <Menu.Item key="3"><Link to="#">Tạo</Link></Menu.Item>
          </SubMenu>
          {/* <Menu.Item key="4" icon={<TeamOutlined />}>
         
          </Menu.Item> */}
          <SubMenu key="sub2" icon={<UserOutlined />} title="Nghiệp vụ" icon={<TeamOutlined />}>
            { localStorage.getItem("per") ==="hr" ?
              <Menu.Item key="4" onClick ={this.handleOnclick} >
              <Link to="/crm/usersix"> Nhân sự </Link>
              </Menu.Item>:null
            }
            { localStorage.getItem("per")  == "hr" ?
            <Menu.Item key="6">
                {/* <Link to="/crm/user/department"> */}
                
                <Link to="/crm/addUserSix">Tạo user</Link>
                {/* </Link> */}
              </Menu.Item>: null
            }
               <Menu.Item key="9">
               <Link to="/crm/employee/edit">Cập nhật thông tin</Link>
               </Menu.Item>
              
           
              <Menu.Item key="5">
                {/* <Link to="/crm/user/department"> */}
                
                <Link to="/crm/usersix">Bình bầu</Link>
                {/* </Link> */}
              </Menu.Item>
         
              {/* <Menu.Item key="3">
                <Link to="/crm/user/personal-history">
                Lịch sử cá nhân
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/crm/user/degree">
                Trình độ nhân viên
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/crm/user/work-object">
                Hình thứ làm việc
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/crm/user/journalist-card">
                 Thẻ Nhà báo
                </Link>
              </Menu.Item> */}
          </SubMenu>
          </Menu>
        </Sider>
       </div>
    );
  }
}
export default withRouter(MenuLayout);