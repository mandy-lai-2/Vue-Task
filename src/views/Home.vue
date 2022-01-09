<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    },
};
</script>

<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="leftContent">
      <div class="main">
        <div class="mainImg"><img src="https://source.unsplash.com/850x300/"></div>
        <div class="mainTxt">
          <div class="PersonalPhoto"><img src="https://source.unsplash.com/170x170/"></div>
          <div class="PersonalTxt">
          <h3>Mandy Corn</h3>
          Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.
          </div>
          </div>
      </div>
      <div class="tabs">
        <ul>
          <li><router-link to="/Profile" >PROFILE</router-link></li>
          <li><router-link to="/Activity">ACTIVITY&INTERESTS</router-link></li>
          <li><router-link to="/Articles">ARTICLES</router-link></li>
        </ul>
      </div>
      <div class="tabsContent">
        <router-view />
        </div>
      <div class="education">
        <h3>Education</h3>
        <div class="eduBox">
          <div class="boxImage">
            <img src="https://source.unsplash.com/50x50/?school">
          </div>
          <div class="boxCon">
            <div class="boxTit">Moscow State Linguistic University</div>
            <div class="boxTxt">Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance</div>
          </div>
        </div>
      </div>
    </div>
    <div class="rightContent">
      <div class="rightAbility rightbg">
        <div class="rightTit">Your Ability</div>
        <div class="rightTxt">
          Photoshop <span>100%</span><br>
          Illustrator <span>100%</span><br>
          UI&UX <span>90%</span><br>
          Html <span>100%</span><br>
          Css <span>90%</span><br>
          JavaScript <span>70%</span><br>
          Vue <span>80%</span>
        </div>
      </div>
      <div class="rightNews rightbg"><div class="rightTit">News</div>
        <div class="rightTxt">
          <a href="javascript:;" class="rightTxtItem">
            <div class="ItemImg"><img src="https://source.unsplash.com/300x200/"></div>
            <div class="ItemTxt">UX:Prototyping</div>
          </a>
          <a href="javascript:;" class="rightTxtItem">
            <div class="ItemImg"><img src="https://source.unsplash.com/300x200/?nature"></div>
            <div class="ItemTxt">Designing with Adobe XD</div>
          </a>
          <a href="javascript:;" class="rightTxtItem">
            <div class="ItemImg"><img src="https://source.unsplash.com/300x200/?water"></div>
            <div class="ItemTxt">UX:Prototyping</div>
          </a>
        </div></div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.home{
  display: flex;
  @media (max-width:768px){
    flex-direction: column;
        }
  .leftContent{
    margin-right: 15px;
    flex: 1 0 76%;
    @media (max-width:768px){
            margin-right: 0;
        }
    .main{
          border: 1px solid #eee;
          box-shadow: 0px 1px 2px #efefef;
          margin-bottom: 30px;
      .mainTxt{
        display: flex;
        .PersonalPhoto {
          margin-right: 28px;
          img{
            border-radius: 100%;
            margin-top: -30px;
            border: 5px solid #fff;
          }

        }
      }
    }
    .tabs ul{
      display: flex;
      margin-bottom: 0;
      border-bottom: 1px solid #aaa;
      @media (max-width:768px){
            flex-wrap: wrap;
            padding-left: 0;
        }
      li{
        display: contents;
        a{
        padding: 10px;
        border: 1px solid #aaa;
        border-bottom: 0px;
        border-radius: 5px 5px 0 0;
        margin: 0 5px;
        &.router-link-exact-active{
          background-color: #0a79b3;
          color: #fff;
        }
      }
      }
      
    }
    .tabsContent{
    }
    .education{
      margin-top: 50px;
      box-shadow: 0 0 4px #c3c3c3;
      padding: 1px 15px 15px;
      .eduBox{
        display: flex;
        .boxImage img{
          margin-right: 15px;
          border-radius: 100%;
        }
      }
      
    }
  }
  .rightContent{
    
    .rightbg{
      background-color: #f5f5f5;
      padding: 10px;
      margin-bottom: 30px;
      box-shadow: 2px 3px 4px 0px #d8d8d8;
      @media (max-width:768px){
        margin: 30px 15px;
        }
    }
    .rightTit{
      font-size: 1.1rem;
      font-weight: bolder;
      border-bottom: 1px solid #aaa;
      padding: 10px 0;
    }
    .rightTxt{
      padding: 10px 5px;
      line-height: 36px;
      span{
        font-size: 1.6rem;
        color: #0a79b3;
      }
      .rightTxtItem{
        display: flex;
        line-height: 22px;
        .ItemImg{
          max-width: 80px;
        }
        .ItemTxt{

        }
      }
    }
  }
}
</style>

