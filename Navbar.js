import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import $ from 'jquery';
import './Navbar.css';
import logo from './logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const navbarRef = useRef(null);
  const horiSelectorRef = useRef(null);

  const test = () => {
    const tabsNewAnim = $(navbarRef.current);
    const activeItemNewAnim = tabsNewAnim.find('.active');
    const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    const itemPosNewAnimTop = activeItemNewAnim.position();
    const itemPosNewAnimLeft = activeItemNewAnim.position();

    $(horiSelectorRef.current).css({
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    });

    tabsNewAnim.on('click', 'li', function () {
      $('#navbarSupportedContent ul li').removeClass('active');
      $(this).addClass('active');
      const activeHeight = $(this).innerHeight();
      const activeWidth = $(this).innerWidth();
      const itemPosTop = $(this).position();
      const itemPosLeft = $(this).position();
      $(horiSelectorRef.current).css({
        top: itemPosTop.top + 'px',
        left: itemPosLeft.left + 'px',
        height: activeHeight + 'px',
        width: activeWidth + 'px',
      });
    });
  };

  useEffect(() => {
    setTimeout(() => {
      test();
    });

    $(window).on('resize', function () {
      setTimeout(() => {
        test();
      }, 500);
    });

    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").slideToggle(300);
      setTimeout(() => {
        test();
      });
    });
  }, []);

  useEffect(() => {
    const path = window.location.pathname.split('/').pop();
    const currentPath = path === '' ? 'index.html' : path;
    const target = $(`#navbarSupportedContent ul li a[href="${currentPath}"]`);
    target.parent().addClass('active');
  }, []);

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
    <Link className="navbar-brand navbar-logo" to="/">
      <img src={logo} alt="Logo" className="navbar-logo-img" />
    </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarRef}>
      <ul className="navbar-nav ml-auto">
        <div className="hori-selector" ref={horiSelectorRef}>
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <li className="nav-item active">
          <Link className="nav-link" to="/"><i className="far fa-address-book"></i>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard"><i className="fas fa-tachometer-alt"></i>Dashboard</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
