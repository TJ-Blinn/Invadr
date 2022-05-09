import React from "react";



export default function About() {
  return (
    <div className="container">

     <nav class="nav">
        <img class="hamburger" alt="filter button" src="https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900164/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpg" width="100" height="100"/>
       <h1 class="page-name">INVADR</h1>
        <img class="sign-up" alt="Sign Up" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ059ESnk10-TfyyVoKGpAz29cBnwTipRfW6w&usqp=CAU" width="100" height="100"/>
      </nav>

      {/* -------- NAV is the same accross all pages -------- */}

      <div>
        <h1 class="about">About</h1>
        <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam et eum labore! Illo reprehenderit deleniti sed mollitia adipisci? Earum quia nobis corrupti officiis atque nesciunt est alias commodi ex similique.</p>
      </div>






    </div>
  );
}
