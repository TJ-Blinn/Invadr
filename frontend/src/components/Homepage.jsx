import React from "react";

export default function Homepage() {
  return (
    <div>

      <nav class="nav">
        <img class="hamburger" alt="filter button" src="https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900164/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpg" width="100" height="100"/>
       <h1 class="page-name">INVADR</h1>
        <img class="sign-up" alt="Sign Up" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ059ESnk10-TfyyVoKGpAz29cBnwTipRfW6w&usqp=CAU" width="100" height="100"/>
      </nav>

      <div class="banner">
        <h1 class="banner-text">
          BEWARE THE INVASION
        </h1>
        <h2 class="banner-pick">Pick A Genre:</h2>
        <select class="select-genre" name="genre"></select>
      </div>

      <h2 class="featured">
          Featured Games:
        </h2>

      <div class="game-container">
        <article class="game-card card-1">
          <h3 class="game-title">Title</h3>
          <img class="game-image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOhB0ycekzm4Fthfo7mgtBuXUdz1Nw6Wv2w&usqp=CAU" alt="game image" />
          <p class="game-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione impedit, accusamus ad ipsam vel velit? A quis et cum veniam? Illo, beatae tempore error doloribus recusandae iure repellendus quos quidem.</p>
          <img class="game-rating" src="https://www.pngitem.com/pimgs/m/66-660111_star-review-business-vans-book-review-5-stars.png" alt="rating" width="100" height="50"/>
        </article>
        <article class="game-card card-2">
          <h3 class="game-title">Title</h3>
          <img class="game-image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOhB0ycekzm4Fthfo7mgtBuXUdz1Nw6Wv2w&usqp=CAU" alt="game image" />
          <p class="game-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione impedit, accusamus ad ipsam vel velit? A quis et cum veniam? Illo, beatae tempore error doloribus recusandae iure repellendus quos quidem.</p>
          <img class="game-rating" src="https://www.pngitem.com/pimgs/m/66-660111_star-review-business-vans-book-review-5-stars.png" alt="rating" width="100" height="50"/>
        </article>
        <article class="game-card card-3">
          <h3 class="game-title">Title</h3>
          <img class="game-image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOhB0ycekzm4Fthfo7mgtBuXUdz1Nw6Wv2w&usqp=CAU" alt="game image" />
          <p class="game-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione impedit, accusamus ad ipsam vel velit? A quis et cum veniam? Illo, beatae tempore error doloribus recusandae iure repellendus quos quidem.</p>
          <img class="game-rating" src="https://www.pngitem.com/pimgs/m/66-660111_star-review-business-vans-book-review-5-stars.png" alt="rating" width="100" height="50"/>
        </article>
      </div>
    </div>
  );
};
