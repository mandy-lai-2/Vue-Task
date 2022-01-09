<script>
import { ref } from '@vue/reactivity'
export default {
  setup(){
    const isOpen = ref(false);
    const handisOpen = () => {
      isOpen.value = !isOpen.value;
    }

    return{
      isOpen,
      handisOpen
    }
  }
}
</script>

<template>
  <header>
    <!-- <router-link to="/about">About</router-link> -->
    <div class="logo"><router-link to="/" class="navLink"><img src="../assets/images/Logo.jpg"></router-link></div>
    <nav>
      <router-link to="/" class="navLink">
        <img src="../assets/images/nav_icon6.jpg"><div class="navTxt">HOME</div>
        </router-link>
      <router-link to="/about" class="navLink">
        <img src="../assets/images/nav_icon3.jpg"><div class="navTxt">ABOUT</div>
        </router-link>
      <router-link to="/job" class="navLink">
        <img src="../assets/images/nav_icon2.jpg"><div class="navTxt">JOB</div>
       </router-link>
      <router-link to="/connection" class="navLink">
        <img src="../assets/images/nav_icon1.jpg"><div class="navTxt">CONNECTION</div>
        </router-link>
      <router-link to="/qa" class="navLink">
        <img src="../assets/images/nav_icon4.jpg"><div class="navTxt">QA</div>
        </router-link>
      
    </nav>
    <form class="search">
        <label for="searchTxt"><img src="../assets/images/nav_search.jpg"></label>
        <input type="text" id="searchTxt" name="searchTxt"
              placeholder="請搜尋">
    </form>
    <div class="user"><img src="../assets/images/user_img.png"> Mandy</div>
    <div class="rightNavBtn" @click="handisOpen"><i class="fas fa-bars fa-2x"></i></div>

  </header>
  <transition name="fade">
    <div class="rightNavBg" v-if="isOpen">
    <div id="rightNav">
      <div class="close"  @click="handisOpen"><i class="fas fa-times"></i> close</div>
      <div class="content">
        <router-link to="/" class="navLink">
          <img src="../assets/images/nav_icon6.jpg">　HOME</router-link>
        <router-link to="/about" class="navLink">
          <img src="../assets/images/nav_icon2.jpg">　ABOUT</router-link>
        <router-link to="/job" class="navLink">
          <img src="../assets/images/nav_icon1.jpg">　JOB</router-link>
        <router-link to="/connection" class="navLink">
          <img src="../assets/images/nav_icon4.jpg">　CONNECTION</router-link>
        <router-link to="/qa" class="navLink">
          <img src="../assets/images/nav_icon5.jpg">　QA</router-link>
      </div>
      <a href="javascript:;" class="banner"><img src="../assets/images/banner.jpg"></a>
    </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
$color-gray: gray;
$color-blue: steelblue;
$color-purple: #8a2be2;
// @mixin將程式碼帶入到對應的地方去，同時可帶入變數
@mixin navLink{
      text-align: center;
      img{
        max-width: 36px;
        vertical-align: middle;
      }
      &:link, &:visited{
        color: $color-blue;
      }
      &:hover{
        color: #000;
      }
}
// @extend繼承，會被往前統一整理
%hover-pointer {
  cursor: pointer;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  
  nav{
    flex-basis: 40%;
    display: flex;
    justify-content: space-around;
    .navLink{
      @include navLink;
    }
    @media (max-width:768px){
            display: none;
        }
  }
  .search{
    img{
      max-width: 36px;
      vertical-align: middle;
    }
    @media (max-width:768px){
            display: none;
        }
  }
  .user{
    img{
      vertical-align: middle;
    }
  }
  .rightNavBtn{
    @extend %hover-pointer;
  }
}
#rightNav{
  position:fixed;
  z-index: 100;
  right: 0;
  top: 0;
  width: 40vw;
  height: 100vh;
  border-left: #d8d8d8 solid 2px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width:768px){
            width: 80vw;
        }
  .close{
    align-self: flex-end;
    margin: 10px;
    @extend %hover-pointer;
    
  }
  .content{
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    justify-content: space-around;
    padding: 5px 10px;
    margin-top: -100px;
    .navLink{
      @include navLink;
      border-bottom: 1px solid #eee;
      text-align: left;
      &:hover{
        background-color: #d2ebff
      }
    }
  }
  .banner{
    width: 90%;
    margin: 10px auto;
  }
}
.rightNavBg{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.5);

}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  right: -500px;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  right: 0;
}
</style>