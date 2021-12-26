
<script>
export default {
  
  }
</script>
<template>
  <h3>Articles</h3>
  <div class="articlesBox">
    <div class="boxImage">
      <span class="fa-stack fa-2x" style="color:orange;">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-globe fa-stack-1x fa-inverse"></i>
      </span>
    </div>
    <div class="boxCon">
      <div class="boxTit">Freelance UX/UI designer</div>
      <div class="boxTxt">Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.</div>
    </div>
  </div>
  <div class="articlesBox">
    <div class="boxImage">
      <span class="fa-stack fa-2x" style="color:mediumseagreen;">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-paint-brush fa-stack-1x fa-inverse"></i>
      </span>
    </div>
    <div class="boxCon">
      <div class="boxTit">UX/UI designer</div>
      <div class="boxTxt">New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.articlesBox{
  display: flex;
  margin-top: 15px;
  margin-bottom: 25px;

  .boxImage{
    margin-right: 15px;
  }
  .boxCon{
    .boxTit{
      margin-top: 5px;
      margin-bottom: 10px;
      font-weight: bolder;
    }
    .boxTxt{
      line-height: 22px;
    }
  }
}

</style>