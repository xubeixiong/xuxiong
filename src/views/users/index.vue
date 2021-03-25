<template>
  <div>
    <div class="content-back">
      <img src="@/assets/img/users/mainTitle.png" alt="" />
    </div>
    <div class="main-page">
      <div class="meun-list">
        <div class="meun-list-left">
          <div class="head-pic-box">
            <img src="@/assets/img/users/head-pic.png" alt="" />
          </div>
          <div class="menu-item-list">
            <span
              @click="tabMenunList(0, '/usersIndex/personalSource')"
              :class="tabMeunIndex == 0 ? 'item-active' : ''"
              >个人资料</span
            >
            <span
              @click="tabMenunList(1, '/usersIndex/myComplaint')"
              :class="tabMeunIndex == 1 ? 'item-active' : ''"
              >我的投诉</span
            >
            <span
              @click="tabMenunList(2, '/usersIndex/makeComplaintTwo')"
              :class="tabMeunIndex == 2 ? 'item-active' : ''"
              >我要投诉</span
            >
          </div>
        </div>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabMeunIndex: 0,
    };
  },
  methods: {
    tabMenunList(index, path) {
      this.tabMeunIndex = index;
      this.$router.push(path);
    },
  },
};
</script>  
<style lang="less" scoped>
.content-back {
  height: 225px;
  background: url("../../assets/img/users/main-header.png") no-repeat;
  background-size: cover;
  text-align: center;
  img {
    width: 547px;
    height: 36px;
    margin-top: 150px;
  }
}
.main-page {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  .meun-list {
    width: 241px;
    position: relative;
    .meun-list-left {
      position: absolute;
      top: -200px;
      width: 241px;
      height: 580px;
      background-image: linear-gradient(0deg, #015c95 58%, #36a5ed 100%);
      .head-pic-box {
        padding: 40px 30px;
        margin: 20px;
        border-bottom: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 95px;
          height: 95px;
          border-radius: 50%;
        }
      }
      .menu-item-list {
        color: #ffffff;
        font-size: 22px;
        height: 60px;
        text-align: center;
        display: flex;
        flex-direction: column;
        span {
          height: 60px;
          line-height: 60px;
          opacity: 0.5;
          cursor: pointer;
        }
        .item-active {
          opacity: 1 !important;
        }
      }
    }
  }
}
</style>