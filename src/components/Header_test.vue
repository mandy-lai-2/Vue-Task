<script>
export default {

}
</script>

<template>
  <header>
    <div class="logo"><img src="../assets/images/Logo.jpg"></div>
    <nav>
      <a href="javascript:;" class="navLink">
        <img src="../assets/images/nav_icon3.jpg"><div class="navTxt">ABOUT</div>
        </a>
      <a href="javascript:;" class="navLink">
        <img src="../assets/images/nav_icon2.jpg"><div class="navTxt">JOB</div>
        </a>
      <a href="javascript:;" class="navLink">
        <img src="../assets/images/nav_icon1.jpg"><div class="navTxt">CONNECTION</div>
        </a>
      <a href="javascript:;" class="navLink">
        <img src="../assets/images/nav_icon4.jpg"><div class="navTxt">QA</div>
        </a>
      <a href="javascript:;" class="navLink">
        <img src="../assets/images/nav_icon5.jpg"><div class="navTxt">NOTICES</div>
        </a>
    </nav>
    <form class="search">
        <label for="searchTxt"><img src="../assets/images/nav_search.jpg"></label>
        <input type="text" id="searchTxt" name="searchTxt"
              placeholder="請搜尋">
    </form>
    <div class="user"><img src="../assets/images/user_img.png"> Mandy</div>
    <a href="javascript:;" class="rightNavBtn"><i class="fas fa-bars fa-2x"></i></a>

  </header>
  <div class="rightNavBg">
  <div id="rightNav">
    <a href="javascript:;" class="close"><i class="fas fa-times"></i> close</a>
    <div class="content">
      <a href="javascript:;" class="navLink">
        <img src="../assets/images/nav_icon3.jpg">　ABOUT</a>
      <a href="javascript:;" class="navLink">
        <img src="../assets/images/nav_icon2.jpg">　JOB</a>
      <a href="javascript:;" class="navLink">
        <img src="../assets/images/nav_icon1.jpg">　connection</a>
      <a href="javascript:;" class="navLink">
        <img src="../assets/images/nav_icon4.jpg">　QA</a>
      <a href="javascript:;" class="navLink">
        <img src="../assets/images/nav_icon5.jpg">　NOTICES</a>
    </div>
    <a href="javascript:;" class="banner"><img src="../assets/images/banner.jpg"></a>
  </div>
</div>
</template>

<style lang="scss" scoped>
$color-gray: gray;
$color-blue: steelblue;
$color-purple: blueviolet;
@mixin navLink{
      text-align: center;
      img{
        max-width: 36px;
        vertical-align: middle;
      }
      &:link{
        color: $color-blue;
      }
      &:hover{
        color: #000;
      }
}
header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 5px;
  .logo{
    img{
      max-width: 42px;
    }
  }
  nav{
    flex-basis: 40%;
    display: flex;
    justify-content: space-around;
    .navLink{
      @include navLink;
    }
  }
  .search{
    img{
      max-width: 36px;
      vertical-align: middle;
    }
  }
  .user{
    img{
      vertical-align: middle;
    }
  }
  .rightNavBtn{
    &:link{
      color: $color-gray;
    }
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
  .close{
    align-self: flex-end;
    margin: 10px;
    &:link{
      color: $color-gray;
    }
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
        background-color: #fdf5ff;
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
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.5);

}
</style>