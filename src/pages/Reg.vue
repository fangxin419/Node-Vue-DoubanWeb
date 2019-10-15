<template>
  <div class="db_login">
    <div class="db_login_top">
      <a href="javascript:;" class="cancel" onclick="window.history.go(-1)">返回</a>注册豆瓣
    </div>
    <div class="db_login_form">
      <form>
        <p class="form_item">
          <input v-model="username" type="text" name="username" placeholder="邮箱/手机号/用户名" />
        </p>
        <p class="form_item">
          <input v-model="password" type="password" name="pasword" placeholder="密码" />
        </p>
        <p class="form_item">
          <input v-model="verifyPass" type="password" name="pasword" placeholder="确认密码" />
        </p>
        <p class="checkbox">
          <label>
            <input type="checkbox" v-model="agree" /> 同意此协议
          </label>
        </p>
        <p class="error">{{mess}}</p>
        <p class="form_btn">
          <input type="button" value="注册" @click="reg" />
        </p>
      </form>
    </div>
    <div class="regist_download">
      <router-link to="/login">登录豆瓣</router-link>
      <a href="#">下载豆瓣App</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      verifyPass: "",
      mess: "",
      agree: false
    };
  },
  methods: {
    reg() {
      if (this.agree == false) {
        this.mess = "请勾选协议!";
        return;
      }
      if (
        this.password == "" ||
        this.verifyPass == "" ||
        this.password != this.verifyPass
      ) {
        this.mess = "密码为空或密码不一致!";
        return;
      }
      let formData = new FormData();
      formData.append("username", this.username);
      formData.append("password", this.password);
      this.$axios({
        url: "/user/reg",
        method: "post",
        data: formData
      }).then(res => {
        if (res.data.err === 0) {
          alert("注册成功!即将跳转至登录");
          this.$router.push("/login");
        } else {
          this.mess = res.data.msg;
        }
      });
    }
  }
};
</script>
<style scoped>
.db_login {
  font-size: 16px;
}
.db_login .db_login_top {
  position: relative;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #333;
  font-weight: 600;
  border-bottom: 1px solid #f0f0f0;
}
.db_login .db_login_top .cancel {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  padding: 0 20px;
  color: #42bd56;
  font-size: 14px;
  font-weight: normal;
}
.db_login .db_login_form {
  padding: 0 15px;
  margin: 25px 0 5px;
}
.db_login .db_login_form .form_item {
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  margin-bottom: -1px;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
}
.db_login .db_login_form .checkbox {
  margin-top: 10px;
}
.db_login .db_login_form .error {
  margin-top: 10px;
  color: #f00;
}
.db_login .form_item:nth-of-type(1) {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.db_login .form_item:nth-of-type(2) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.db_login .db_login_form input {
  border: none;
}
.db_login .db_login_form .form_btn {
  margin-top: 10px;
}
.db_login .form_btn input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  background-color: #17aa52;
  border-radius: 3px;
}

.db_login .regist_download {
  text-align: center;
  margin-top: 40px;
}
.db_login .regist_download a {
  color: #42bd56;
  font-size: 14px;
  margin: 0 10px;
}
</style>