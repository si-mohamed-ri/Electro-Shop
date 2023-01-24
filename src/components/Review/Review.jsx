import React from "react";
import "./Review.scss";
import { review } from "../../DaynamicData";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Review = () => {
  return (
    <div className="review">
      <h1>Clients Reviews</h1>
      <div className="container">
        <ul className="reviewItems">
          {review.map((item) => (
            <li key={item.id}>
              <img src={item.Img} alt="" />
              <h1>{item.UName}</h1>
              <p>{item.Desc}</p>
              <span>
                <StarBorderPurple500OutlinedIcon className="star" />
                <StarBorderPurple500OutlinedIcon className="star" />
                <StarBorderPurple500OutlinedIcon className="star" />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="delverTop">
        <h1>Dellevry</h1>
        <LocalShippingOutlinedIcon className="icon"/>
        {/* <img
          src="https://cdn-icons-png.flaticon.com/128/709/709790.png"
          alt=""
        /> */}
      </div>
      <span>24/24 All Week, All Moroccan Cities.</span>
      <div className="delve">
        <div className="subscrib">
            <input type="text" placeholder="email@comail.com" />
            <SendOutlinedIcon className="Icon"/>
        </div>
      </div>
    </div>
  );
};

export default Review;
