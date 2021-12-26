
<script>
export default {
  
  }
</script>
<template>
  <h3>Activity Projects</h3>
  <div class="Content">
    <div class="projectBox">
      <div class="boxImage"><img src="https://source.unsplash.com/250x160/"></div>
      <div class="boxTxt">Zara redesign concept</div>
      <div class="boxYears">15.07.2019</div>
    </div>
    <div class="projectBox">
      <div class="boxImage"><img src="https://source.unsplash.com/250x160/?nature"></div>
      <div class="boxTxt">SCTHON event brand identity</div>
      <div class="boxYears">15.07.2019</div>
    </div>
    <div class="projectBox">
      <div class="boxImage"><img src="https://source.unsplash.com/250x160/?sea"></div>
      <div class="boxTxt">Zara redesign concept</div>
      <div class="boxYears">15.07.2019</div>
    </div>

  </div>
  <a href="javascript:;"><i class="fas fa-caret-right"></i> SHOW MORE</a>
</template>

<style lang="scss" scoped>
.Content{
  display: flex;
  margin-bottom: 15px;
  .projectBox{
    padding: 10px;
    margin: 5px;
    box-shadow: 0px 0px 2px 0px #dadada;
    .boxTxt{
      margin-top: 10px;
      margin-bottom: 10px;
      font-weight: bolder;
    }
    .boxYears{
      color: #aaa;
    }
  }
}

</style>