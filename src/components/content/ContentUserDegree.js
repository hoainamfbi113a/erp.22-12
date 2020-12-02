import React, { Component } from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import {Link}  from 'react-router-dom'
const { Search } = Input;
import TableUserDegree from "../Table/TableUserDegree"
import "./Content.css"
 
export default class ContentUserDegree extends Component {
    render() {
        return (
             <div>
                        <div className="content-top">
                            <div className="content-top-left">
                                <div className="content-top-left-sum-item">
                                    600 nhân viên
                                </div>
                                <Search
                                    placeholder="Tìm kiếm"
                                    allowClear
                                    onSearch={this.onSearch}
                                    style={{ width: 200 }}
                                    className="table-btn-search"
                                />
                            </div>
                            <div className="content-top-right">
                            <Link to="/crm/adduser"> <Button className="btn-add-user">Thêm nhân viên</Button></Link>
                            </div>
                        </div>
                        <TableUserDegree/>
               
         </div>
        // <div>aaaa</div>
        )
    }
}
// const mapStateToProps = (state) => ({
//     userBase: state.userBaseReducer,
//     userDepartment: state.userDepartmentReducer
//   });
//   const mapDispatchToProps = (dispatch) => ({
//     userBaseActionCreators: bindActionCreators(userBaseActions, dispatch),
//     userDepartmentActionCreators: bindActionCreators(userDepartmentActions,dispatch)
//   });
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(ContentUserDepartment);
