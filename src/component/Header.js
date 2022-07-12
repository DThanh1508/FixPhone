import React,{ Component} from "react";
import '../assets/css/headerStyles.css';
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header_top">
                    <div className="header_top_left">
                    <h5>399 Tây Thạch, Phường Tây Thạch, Quận Tân Phú, TP.HCM</h5>
                    </div>
                    <div className="header_top_right">
                    <h5>Thời gian làm việc: 08:00 - 18:00</h5>
                    </div>
                </div>
                <div className="header_center">
                    <div className="topnav">
                        <div className="image_logo">
                            <img src="https://huydungmobile.com/wp-content/uploads/2019/02/LogoHuyDungMobile4.png" alt="logo" />
                        </div>
                        <div className="centerDiv">
                            <div className="all">
                                <div class="dropdown">
                                    <button type="submit" className="dropbtn">All<i className="fa fa-caret-down" /></button>
                                    <div class="dropdown-content">
                                        <a href="#">Thay màn hình-ép kính</a>
                                        <a href="#">Thay vỏ</a>
                                        <a href="#">Thay pin</a>
                                        <a href="#">Phần cứng</a>
                                    </div>
                                </div>
                            
                                <div className="search">
                                        <form action>
                                            <input id="h_inputSearch"type="text" placeholder="Tìm kiếm.." name="search" />
                                            <button type="submit"><i className="fa fa-search" /></button>
                                        </form>
                                </div>
                            </div>
                            <div className="menu_center">
                                <p><a href="#">Giới thiệu</a>|</p>
                                <p><a href="#">Hỏi Đáp</a></p>
                                
                               
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                    <div id="menu_bottom">
                        <ul>
                            <div className="suachua">
                                <li><h3>Dịch vụ sữa chữa:</h3></li>
                            </div>
                            <div className="dichvu">
                                <li className="h_navItem ">
                                    <a className="h_nav_navLink" href="#">
                                        <div className="h_navImage">
                                        <img src="https://cdn.iconscout.com/icon/free/png-256/phone-2513365-2104689.png" alt="" /> 
                                        <p>Thay màn hình-ép kính</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="h_navItem ">
                                    <a className="h_nav_navLink" href="#">
                                        <div className="h_navImage">
                                        <img src="https://phatlocmobile.vn/image/cache/catalog/a-iphone/thay-vo-iphone-6-lay-ngay-800x800.png" alt="" /> 
                                        <p>Thay vỏ</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="h_navItem ">
                                    <a className="h_nav_navLink" href="#">
                                        <div className="h_navImage">
                                        <img src="https://www.9mobile.vn/sites/default/files/2019-01/bang_gia-thay-pin.png" alt="" /> 
                                        <p>Thay pin</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="h_navItem ">
                                    <a className="h_nav_navLink" href="#">
                                        <div className="h_navImage">
                                        <img src="https://phatlocmobile.vn/image/cache/catalog/a-iphone/thay-vo-iphone-6-lay-ngay-800x800.png" alt="" /> 
                                        <p>Phần cứng</p>
                                        </div>
                                    </a>
                                </li>
                                
                                
                            </div>
                        </ul>
                    </div>
            </div>
        );
    }
}