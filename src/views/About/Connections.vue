<script>
export default {};
</script>
<template>
  <div>
    <h4><span> you have 4 new connections</span></h4>
    <div class="connectionsBox">
      <div class="boxImg"><img src="https://source.unsplash.com/250x250/?man"></div>
      <div class="boxTit">Brandon Wilson</div>
      <div class="boxTxt">Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?</div>
      <div class="boxBtn">Accept</div>
    </div>
    <div class="connectionsBox">
      <div class="boxImg"><img src="https://source.unsplash.com/250x250/?woman"></div>
      <div class="boxTit">Theresa Steward</div>
      <div class="boxTxt">Hey, I saw your works. I like it! Can we do something together? </div>
      <div class="boxBtn">Accept</div>
    </div>
    <div class="connectionsBox">
      <div class="boxImg"><img src="https://source.unsplash.com/250x250/?boy"></div>
      <div class="boxTit">Andy Wilson</div>
      <div class="boxTxt">Can we do something together? Or maybe you have project for UX at the moment?</div>
      <div class="boxBtn">Accept</div>
    </div>
    <div class="connectionsBox">
      <div class="boxImg"><img src="https://source.unsplash.com/250x250/?man"></div>
      <div class="boxTit">Dick</div>
      <div class="boxTxt">Can we do something together? Or maybe you have project for UX at the moment?</div>
      <div class="boxBtn">Accept</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h4{
  border-bottom: 1px solid #ddd;
  span{
    background-color: #fff;
    width: fit-content;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: -10px;
    display: block;
    padding: 0 15px;
  }
}
.connectionsBox{
  display: flex;
  padding: 20px 15px;
  background-color: #efefef;
  box-shadow: 1px 1px 3px #dedede;
  font-size: 0.9rem;
  margin-bottom: 15px;
  .boxImg{
    margin-right: 10px;
    img{
     width: 40px;
     border-radius: 100%;
   }
  }
  .boxTit{
    font-weight: bolder;
    max-width: 60px;
  }
  .boxTxt{
    // flex: 1 0 50%;
    border-left: 2px solid #0c7ab3;
    padding: 0 10px;
    margin-left: 10px;
  }
  .boxBtn{
    background-color: #0c7ab3;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
    height: fit-content;
    cursor: pointer;
    box-shadow: 1px 1px 3px #aaa;
    margin-left: auto;
  }
}

</style>
