import React, { useState } from "react";
import "./Headphones.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { headphones } from "../../DaynamicData";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ReactPaginate from "react-paginate";

const Headphones = () => {
  const All = headphones.length;
  const [headphone, setHeadphone] = useState(headphones.slice(0, All));
  const [pageNum, setPageNum] = useState(0);
  console.log(setHeadphone);

  const PerPage = 6;
  const PageViseted = pageNum * PerPage;

  const ShiftHeadPhone = headphone.slice(
    PageViseted,
    PageViseted + PerPage).map((item) => 
    <li key={item.id}>
        <img src={item.Img} alt="" />
        <h1>{item.Name}</h1>
        <div className="info">
          <span>{item.price} $</span>
          <div className="right">
            <AddShoppingCartOutlinedIcon />
          </div>
        </div>
    </li>)
  ;

  const pageCount = Math.ceil(headphones.length / PerPage);
  const onChangePage = (selected) => {
        setPageNum(selected);
  }

  return (
    <>
      <div className="headphone">
        <Sidebar />
        <div className="headphone-container">
          <Navbar />
          <h1>
            HeadPhones Category
            <img
              src="https://cdn-icons-png.flaticon.com/512/3591/3591933.png"
              alt=""
            />
          </h1>
          <div className="headItems">
            <ul>{ShiftHeadPhone}</ul>
          </div>
          <div className="prev-nex">
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={onChangePage}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"prevBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisb"}
              activeClassName={"paginAct"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Headphones;
