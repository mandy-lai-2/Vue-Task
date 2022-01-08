<script>
export default {};
</script>
<template>
  <div>
    <h4><span> Invitations </span></h4>
    <div class="invitationsCon">
      <div class="invitationsBox">
        <div class="boxImg">
          <img src="https://source.unsplash.com/250x250/?man" />
        </div>
        <div class="boxTit">Audrey Alexander</div>
        <div class="boxDate">16 aug,monday</div>
      </div>
      <div class="invitationsBox">
        <div class="boxImg">
          <img src="https://source.unsplash.com/250x250/?teacher" />
        </div>
        <div class="boxTit">Eduardo Russell</div>
        <div class="boxDate">11 aug,monday</div>
      </div>
    </div>
      <div class="invitationsCon">
      <div class="invitationsBox">
        <div class="boxImg">
          <img src="https://source.unsplash.com/250x250/?woman" />
        </div>
        <div class="boxTit">Darlene Black</div>
        <div class="boxDate">22 aug,monday</div>
      </div>
      <div class="invitationsBox">
        <div class="boxImg">
          <img src="https://source.unsplash.com/250x250/?boy" />
        </div>
        <div class="boxTit">Kyle Fisher</div>
        <div class="boxDate">26 aug,monday</div>
      </div>
    </div>
    <div class="invitationsCon">
      <div class="invitationsBox">
        <div class="boxImg">
          <img src="https://source.unsplash.com/250x250/?man" />
        </div>
        <div class="boxTit">Audrey Alexander</div>
        <div class="boxDate">16 aug,monday</div>
      </div>
      <div class="invitationsBox">
        <div class="boxImg">
          <img src="https://source.unsplash.com/250x250/?teacher" />
        </div>
        <div class="boxTit">Eduardo Russell</div>
        <div class="boxDate">11 aug,monday</div>
      </div>
    </div>
      <div class="invitationsCon">
      <div class="invitationsBox">
        <div class="boxImg">
          <img src="https://source.unsplash.com/250x250/?woman" />
        </div>
        <div class="boxTit">Darlene Black</div>
        <div class="boxDate">22 aug,monday</div>
      </div>
      <div class="invitationsBox">
        <div class="boxImg">
          <img src="https://source.unsplash.com/250x250/?boy" />
        </div>
        <div class="boxTit">Kyle Fisher</div>
        <div class="boxDate">26 aug,monday</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h4 {
  border-bottom: 1px solid #ddd;
  span {
    background-color: #fff;
    width: fit-content;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: -10px;
    display: block;
    padding: 0 15px;
  }
}
.invitationsCon{
  display: flex;
  .invitationsBox{
    flex-basis: 50%;
    display: flex;
    font-size: 0.9rem;
    padding: 20px 15px;
  background-color: #efefef;
  box-shadow: 1px 1px 3px #dedede;
  font-size: 0.9rem;
  margin: 10px;
    .boxImg{
      margin-right: 10px;
      img{
      width: 40px;
      border-radius: 100%;
      }
    }
    .boxTit{
      font-weight: bolder;
    }
    .boxDate{
      margin-left: auto;
      align-self: flex-end;
      font-size: 0.5rem;
      color: #777;
    }
  }
}
</style>
