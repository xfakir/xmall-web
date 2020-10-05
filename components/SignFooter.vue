<template>
  <div>
    <div class="footer-wrapper">
      <div class="footer-links">
        <ul class="links-ul">
          <li><a href="#">艾米莉亚</a></li>
          <li><a href="#">雷姆</a></li>
          <li><a href="#">御坂美琴</a></li>
        </ul>
      </div>
      <div class="footer-copyright">
        <div class="copyright">
          <p class="footer-font">
            Copyright © 2020 xfakir.All rights reserved.
          </p>
        </div>
        <div class="record-icp">
          <p class="footer-font">鄂ICP备19018327号-1</p>
        </div>
        <div class="record-police">
          <a
            class="record-url"
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42060602000325"
            ><img src="https://kodo.xfakir.cn/beian.png" />
            <p class="footer-font">鄂公网安备 42060602000325号</p></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignFooter',
}
</script>

<style scoped>
.footer-wrapper {
  height: 100px;
  width: 800px;
  margin: 10px auto;
}
.footer-links {
  height: 30px;
  width: auto;
  margin: 0 auto;
  text-align: center;
}
.footer-links li {
  width: 80px;
  float: left;
}
.links-ul {
  display: inline-block;
  height: 30px;
}
.footer-copyright {
  text-align: center;
}
.footer-font {
  height: 20px;
  line-height: 20px;
  margin: 0px 0px 0px 5px;
  color: #939393;
}
.record-url {
  display: inline-block;
}
.record-url p {
  float: left;
}
.record-url img {
  float: left;
}
</style>
