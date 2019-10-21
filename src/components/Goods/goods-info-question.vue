<template>
  <div>
    <div class="question-list">
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16  系列共有几款手机？型号分别是什么？		
          </dt>
          <dd class="vm-answer">
          共有两款产品，分别为 16th Plus / 16th。	<br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16  系列有哪几种颜色？机身材质？		

          </dt>
          <dd class="vm-answer">
          静夜黑 / 远山白	<br>四曲面 3D 玻璃机身	<br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16  系列解锁方式是怎样的？
          </dt>
          <dd class="vm-answer">
          屏下指纹解锁，只需把手指轻放于指纹图标上。支持支付宝指纹支付、微信指纹支付、应用解锁。<br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列是否支持 mEngine 横向线性马达？		

          </dt>
          <dd class="vm-answer">
          mEngine 触感引擎迎来第二代全新升级，数十个系统级别的场景支持，自动适应算法，真实震撼算法，音乐追踪算法。	<br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列是否为全面屏？屏占比是多少？		

          </dt>
          <dd class="vm-answer">
          三星 AMOLED 全面屏；屏占比高达 91.18%。	<br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列屏幕多大？分辨率是多少？ 		

          </dt>
          <dd class="vm-answer">
            6.0英寸          2160 x 1080<br><br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列支持的网络有哪些？是否具备 VoLTE 语音通话技术？		

          </dt>
          <dd class="vm-answer">
          支持中国移动、中国联通、中国电信三大运营商网络，支持 VoLTE 高清语音通话。	<br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列的外放音质怎么样？		

          </dt>
          <dd class="vm-answer">
          新一代超线性双扬声器，沉浸式环绕声场，更大的振膜与全新的降噪算法。	<br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列的 CPU 是什么型号？		

          </dt>
          <dd class="vm-answer">
          高通骁龙 845	<br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列存储容量分别为多少？是否支持存储卡拓展？ 		

          </dt>
          <dd class="vm-answer">
          6GB+64GB / 6GB+128GB / 8GB+128GB。<br><br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列后置摄像头是多少像素？前置摄像头是多少像素？		

          </dt>
          <dd class="vm-answer">
          后置 1200 万像素 + 2000 万像素双摄，ƒ/1.8 超大光圈 + ƒ/2.6 大光圈。<br>前置 2000 万像素，ƒ/2.0 大光圈。
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列拍照时是否采用 AI 场景识别技术及自动 HDR 功能？		

          </dt>
          <dd class="vm-answer">
          魅族 16 系列支持硬件级 AI 场景识别，可以识别人像、夜景、文字、猫狗、烟花、绿地、蓝天等多种场景，还有全新的虹软 AI 美颜算法。支持自动 HDR。	<br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列的电池规格？		

          </dt>
          <dd class="vm-answer">
          3010mAh。<br>
          </dd>
      </dl>
      <dl class="mod-item">
          <dt class="vm-question">
          魅族 16 系列采用的 4x4 MIMO 是什么技术？		

          </dt>
          <dd class="vm-answer">
          16th / 16th Plus 支持 2x2 MIMO 2.4GHz/5GHz 四天线系统，无需特定手势来照顾天线接收。16th Plus 更还额外支持 LTE 4x4 MIMO，数据网络可提速高至 100%。	<br>
          </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return  {}  
  }
}
</script>

<style>
    .question-list{
        background: #fff;
        padding: 3%;
    }
    .question-list .mod-item{
        padding: 5px 1%;
        border-bottom: 1px solid #eee;
    }
    .question-list .mod-item .vm-question{
        position: relative;
        font-size: 14px;
        color: #00c3f5;
        text-align: left;
        padding-left: 30px;
    }
    .question-list .mod-item .vm-question::after{
        content: "Q:";
        position: absolute;
        left: 0px;
        top: 1px;
    }
    .question-list .mod-item .vm-answer{
        position: relative;
        margin: 5px auto;
        text-align: left;
        font-size: 12px;
        padding-left: 30px;
    }
    .question-list .mod-item .vm-answer::after{
        content: "A:";
        position: absolute;
        left: 0px;
        top: 1px;
    }
</style>
