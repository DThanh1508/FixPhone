import React,{ Component} from "react";
export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <br></br>
                <div className="Footer-middle">
                    <div className="Footer-content">
                        <b>Thông tin liên hệ</b>
                        <p>Địca chỉ: 399 Tây Thạnh, phường Tây Thạnh, quận Tân Phú, TPHCM.<br></br>Giờ làm việc: 8:30 - 18:30 - Không nghỉ trưa
                        <br></br>Ngày làm việc: Thứ 2 - Thứ 7<br></br>Mail: online@dcenter.vn</p>
                        <b>Giấy ĐKDN: 0315271645 - 14/09/2018</b>
                    </div>
                    <div className="Footer-content">
                        <b>Liên hệ</b>
                        <p>Số điện thoại:  0985161718</p>
                        <div className="logo">
                            <a class ='link' href ='#'>
                                <p><img className="footer-icon" src="image/facebook.PNG"/>Facebook</p>
                            </a>
                            <a  class ='link' href ='#'>                               
                                <p><img className="footer-icon" src="image/youtobe.PNG"/>Youtube</p>
                            </a>
                            <a class ='link' href ='#'>
                                
                                <p><img className="footer-icon" src="image/logo.PNG"/>Dienthoai24.com</p>
                            </a>
                        </div>
                    </div>
                    <div className="Footer-content">
                        <b>Thông tin hỗ trợ</b>
                        <p>Tin tức<br></br>Thủ thuật<br></br>Bảo hành</p>                 
                    </div>      
                </div>    
                <div className="Footer-buttom">
                        <p>@ Bản quyền của Passerelles numériques Vietnam</p>
                </div>
            </div>
        );
    }
}
 
