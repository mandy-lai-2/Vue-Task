<script>
export default {

}
</script>
<template>
  <footer>
    <div class="logo"><img src="../assets/images/Logo.jpg"></div>
    <div class="footRight">
      <div class="Navigation">
        <h4>Navigation</h4>
        <div class="nav">
          <router-link to="/" class="navLink">HOME</router-link>
          <router-link to="/about" class="navLink">ABOUT</router-link>
          <router-link to="/job" class="navLink">JOB</router-link>
          <router-link to="/connection" class="navLink">CONNECTION</router-link>
          <router-link to="/qa" class="navLink">QA</router-link>

        </div>
      </div>
      <div class="Fastaccess">
        <h4>Fast access</h4>
        <div class="btn"><a href="javascript:;" >Questions? <i class="far fa-question-circle"></i></a></div>
        <div class="btn"><a href="javascript:;" >Settings <i class="fas fa-cog"></i></a></div>
      </div>
      <div class="Language">
        <h4>Language</h4>
        <form>
          <select name="lang" id="lang">
            <option value="cn">中文</option>
            <option value="en">English</option>
            <option value="jp">Japanese</option>
          </select>
        </form>
      </div>
    </div>
  </footer>

</template>


<style lang="scss" scoped>
footer{
  display: flex;
  border-top: 1px solid #ddd;
  padding: 15px;
  // justify-content: space-between;
  .logo{
    flex-shrink: 2;
  }
  
  .footRight{
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    @media (max-width:768px){
            flex-direction: column;
        }
    h4{
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
    >div{
      margin-bottom: 15px;
      margin-left: 10px;
    }
  }
  .Navigation{
    .nav{
      display: flex;
      flex-direction: column;
    }
  }
  .Fastaccess{
    .btn{
      border: 2px solid #0c7ab3;
      border-radius: 5px;
      padding: 5px 10px;
      margin-bottom: 5px;
      &:hover{
        background-color: #0c7ab3;
        a:link{
          color: #fff;
        }
      }
    }

  }
}
</style>