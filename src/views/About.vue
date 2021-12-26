<script>
export default {

}
</script>

<template>
  <div class="about">
    <div class="leftMenu">
      <ul>
        <li><router-link to="/about/Connections" ><i class="fas fa-link"></i>　CONNECTIONS</router-link></li>
        <li><router-link to="/about/Invitations" ><i class="far fa-dot-circle"></i>　INVITATIONS</router-link></li>
        <li><a href="#"><i class="fas fa-archive"></i>　TEAMMATES</a></li>
        <li><a href="#"><i class="fas fa-child"></i>　GROUPS</a></li>
        <li><a href="#"><i class="fas fa-clone"></i>　PAGES</a></li>
        <li><a href="#"><i class="fas fa-tags"></i>　HASHTAGS</a></li>
      </ul>
      
    </div>
    <div class="rightContent"><router-view /></div>
  </div>
</template>

<style lang="scss" scoped>
.about{
  display: flex;
  .leftMenu{
    flex: 0 0 20%;
    
    margin: 0 15px;
    ul{
      padding-left:0;
      margin: 0;
      background-color: #fcfcfc;
      border: 1px solid #ddd;
      li{
        // margin-bottom: 10px;
        border-bottom: 1px solid #ddd;
        padding-left: 30px;
        &:hover{
            background-color: #d2ebff;
          }
        a{
          display: block;
          width: 100%;
          padding-top: 10px;
          padding-bottom: 10px;
          &:link, &:visited{
            color: steelblue;
          }
           &:hover{
            color: #000;
          }
        }
      }
    }
  }
  .rightContent{
    // background-color: #fed;
  }

}
</style>
