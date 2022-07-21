import React, { Component } from 'react';
import './heading.css'
import Logo from './bg7.jpg';

class Head extends Component {
    componentDidMount() {
        var togg = document.getElementById("togg");
        var ptogg = document.getElementById("ptogg");
        var menu = document.getElementsByClassName("menu")[0];

        ptogg.onclick = function () {
            if (togg.classList[0] === "tr") {
                togg.classList.add("rt");
                togg.classList.remove("tr");
                menu.style.height = "auto";
                menu.style.display = "flex";
            }
            else {
                togg.classList.add("tr");
                togg.classList.remove("rt");
                menu.style.height = 0;
                menu.style.display = "none";
            }
        }
    }
    render() {

        return (
            <>
                <div className="heading">
                    <div id="h_upper">
                        <div className="logo">
                           <img src={Logo} width="100px" alt='logo' />
                        </div>
                        <div id="ptogg" style={{ width: 30 + 'px', cursor: 'pointer', height: 20 + 'px', margin: 5 + 'px' , marginRight:5+'vw' }}>
                            <div className="tr" id="togg"></div>
                        </div>
                        {/*humburger icon */}
                    </div>
                    <div className="menu">
                        <a className="" href="link.html">Home</a>
                        <a className="" href="link.html">About Us</a>
                        <a className="" href="link.html">Services</a>
                        <a className="" href="link.html">Contact</a>
                    </div>
                </div>
            </>
        );

    }



}

export default Head;