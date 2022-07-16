import "./Content.css";
import React, { Component } from "react";
import Categories from "../../Mockdata/Categories.json";
import showHomepage from "../../Mockdata/showHomepage.json";
export default class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="viewallcat">
          <a className="titel">Sửa Điện Thoại</a>
          <br />
          {Categories &&
            Categories.map((item, index) => (
              <>
                <a key={index}>{item}</a>
                <br />
              </>
            ))}
        </div>

        <div className="container">
          {showHomepage &&
            showHomepage.map((item, index) => (
              <>
                <div className="prd">
                  <img src={item.image} key={index} />
                  <div className="title-wrapper">
                    <p key={index}>{item.name}</p>
                  </div>
                  <div className="price-wrapper">
                    <p key={index}>{item.price}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
        <div className="viewallcat-tabled">
          <a className="titel">Sửa Máy Tính Bảng</a>
          <br />
          {Categories &&
            Categories.map((item, index) => (
              <>
                <a key={index}>{item}</a>
                <br />
              </>
            ))}
        </div>
        <div className="container">
          {showHomepage &&
            showHomepage.map((item, index) => (
              <>
                <div className="prd">
                  <img src={item.image} key={index} />
                  <div className="title-wrapper">
                    <p key={index}>{item.name}</p>
                  </div>
                  <div className="price-wrapper">
                    <p key={index}>{item.price}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    );
  }
}
