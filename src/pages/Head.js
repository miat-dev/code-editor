import React, { Component } from 'react';
import './heading.css'
//import Logo from './logo.png';

class Head extends Component {
    componentDidMount() {
        var togg = document.getElementById("togg");
        var ptogg = document.getElementById("ptogg");
        var menu = document.getElementsByClassName("menu")[0];

        ptogg.onclick = function () {
            if (togg.classList[0] === "tr") {
                togg.classList.add("rt");
                togg.classList.remove("tr");
                menu.style.display = "flex";
            }
            else {
                togg.classList.add("tr");
                togg.classList.remove("rt");
                menu.style.display = "none";
            }
        }
        document.addEventListener("click", (e)=>{
            if(!(e.target===ptogg || e.target===togg) &&togg.classList[0] === "rt" ){
                console.log(e.target,ptogg)
                togg.classList.add("tr");
                togg.classList.remove("rt");
                menu.style.display = "none";
            }
        });
    }
    render() {
        return (
            <>
                <div className="heading">
                    <div id="h_upper">
                        <div className="logo">
                            <div>
                                <img src={window.location.origin + '/logo.png'} width="100px" alt='logo' />
                                <span style={{ fontFamily: "Superclarendon" }}></span> Fruit Code
                            </div>
                        </div>
                        <div className='btn_ham'>
                            <div className="menu">
                                <a className="" href="link.html">Home</a>
                                <a className="" href="link.html">About Us</a>
                                <a className="" href="link.html">Services</a>
                                <a className="" href="link.html">Contact</a>
                            </div>
                            <div id="ptogg" style={{ width: 30 + 'px', cursor: 'pointer', height: 20 + 'px', margin: 5 + 'px', marginRight: 5 + 'vw' }}>
                                <div className="tr" id="togg"></div>
                            </div>
                        </div>
                        {/*humburger icon */}
                    </div>

                </div>
            </>
        );

    }



}

export default Head;