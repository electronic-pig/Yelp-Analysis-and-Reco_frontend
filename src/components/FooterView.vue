<template>
  <div class="footer">
    <div class="info">
      <span>About</span>
      <span>Discover</span>
      <span>Yelp for Business</span>
      <span>Languages</span>
    </div>
    <p class="right">
      Copyright © 2004–2024 Yelp Inc. Yelp,
      <img
        style="vertical-align: bottom"
        src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/7ef71bf77a33/assets/img/brand/logo_desktop.svg"
        alt="Yelp logo"
        width="38"
        height="19"
      />,
      <img
        style="vertical-align: bottom"
        src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/cabcef1daea2/assets/img/brand/burst_red.svg"
        alt="Yelp burst"
        width="14"
        height="16"
      />
      and related marks are registered trademarks of Yelp.
    </p>
  </div>
</template>

<style scoped>
.footer {
  background-color: rgba(247, 247, 247, 1);
  height: 100px;
}

.info {
  margin: 0 15vw;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  color: rgba(110, 112, 114, 1);
  text-align: center;
  justify-content: center;
  align-items: center;
}

span {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
}
</style>
