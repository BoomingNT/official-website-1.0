<template>
  <div ref="all" class="all">
    <!-- 首页PC -->
    <div class="home">
      <img class="login img" src="../assets/h5/logosss.jpg" alt />
      <div class="right">
        <span @click="home($event)" :class="home_colo?'bgcColo':''">首页</span>
        <span @click="techon" :class="techon_colo?'bgcColo':''">技术应用</span>
        <span @click="clcase" :class="clcase_colo?'bgcColo':''">实用案例</span>
        <span @click="about" :class="about_colo?'bgcColo':''">关于我们</span>
        <span @click="footer" :class="footer_colo?'bgcColo':''">联系我们</span>
      </div>
    </div>

    <!-- H5 -->
    <div class="home_h5">
      <img class="login img" src="../assets/h5/logosss.jpg" alt />
      <el-dropdown trigger="click" size="medium">
        <el-button class="el-dropdown-link" icon="el-icon-s-fold"></el-button>
        <el-dropdown-menu slot="dropdown" style="margin-top:10rem;margin-right:-10rem">
          <el-dropdown-item>
            <span @click="home($event)" >首页</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="techon_h5" >技术应用</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="clcase_h5" >实用案例</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="about_h5" >关于我们</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="footer_h5" >联系我们</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="xin"></div>
    <!-- banner轮播图 -->
    <div class="block banner_carousel">
      <el-carousel trigger="click">
        <el-carousel-item>
          <img class="content img" src="../assets/banner_02.jpg" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img class="content img" src="../assets/banner_01.jpg" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- banner轮播图_h5 -->
    <div class="swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img class="content img" src="../assets/h5/banner_01.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="content img" src="../assets/h5/banner_02.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="xin skill">
      <!--技术应用 -->
      <div class="techon">
        <div class="head">
          <div class="left"></div>
          <div class="head_left">
            <span class="head_top">TECHNOLOGY</span>
            <span class="head_bottom">技术应用</span>
          </div>
        </div>
        <div class="techon_content" :style="{opacity:`${opacity_skill}`}">
          <div
            ref="portion_one"
            :style="{left:`${num_one_left}rem`,top:`${num_one_top}rem`}"
            class="techon_content_one portion_one"
          >
            <img class="img" src="../assets/ls_09.gif" alt />
            <div class="techon_content_one_p">
              <p>脸部识别</p>
            </div>
            <div class="techon_content_one_span">
              <p>
                透过识别人脸比例和轮廓，去识别个人身份根据识别身份
                及指令，再将数据发送到连接不同设备， 可广泛地在不同
                场所运行。
              </p>
            </div>
          </div>
          <div
            :style="{left:`${num_two_left}rem`,top:`${num_two_top}`}"
            class="techon_content_one portion_two"
          >
            <img class="img" src="../assets/ls_11.gif" alt />
            <div class="techon_content_one_p">
              <p>自助入住机</p>
            </div>
            <div class="techon_content_one_span">
              <p>
                在酒店大堂，可以进行自助入住手续，自助入住机要
                刷身分证及脸部识别。可以缩减入住时间，将科技生
                活化。
              </p>
            </div>
          </div>
          <div
            :style="{left:`${num_three_left}rem`,top:`${num_three_top}rem`}"
            class="techon_content_one portion_three"
          >
            <img class="img" src="../assets/ls_14.gif" alt />
            <div class="techon_content_one_p">
              <p>机器人</p>
            </div>
            <div class="techon_content_one_span">
              <p>
                不同埸合派送不同机械人，带路机械人、送物资、
                送餐机械人，如果有需要机械人可送上门。
              </p>
            </div>
          </div>
          <div
            :style="{left:`${num_fore_left}rem`,top:`${num_fore_top}rem`}"
            class="techon_content_one portion_fore"
          >
            <img class="img" src="../assets/ls_20.gif" alt />
            <div class="techon_content_one_p">
              <p>会议系统</p>
            </div>
            <div class="techon_content_one_span">
              <p>
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </p>
            </div>
          </div>
          <div
            :style="{left:`${num_five_left}rem`,top:`${num_five_top}rem`}"
            class="techon_content_one portion_five"
          >
            <img class="img" src="../assets/ls_23.gif" alt />
            <div class="techon_content_one_p">
              <p>电视机信息推送</p>
            </div>
            <div class="techon_content_one_span">
              <p>当有人在门外按铃时，房间内电视机屏幕的一角会自动跳出门外的图像，如果需要开门，房内客人可操作电视遥控器，即可打开门锁。应用场景：门显-->电视</p>
            </div>
          </div>
          <div
            :style="{left:`${num_six_left}rem`,top:`${num_six_top}rem`}"
            class="techon_content_one portion_six"
          >
            <img class="img" src="../assets/ls_25.jpg" alt />
            <div class="techon_content_one_p">
              <p>智能停车场</p>
            </div>
            <div class="techon_content_one_span">
              <p>
                停车场采用拼图型智慧泊车系统，机械式装置、
                自动装置等，驾驶者将车辆驶进泊车系统后就可
                离开汽车。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 技术应用h5 -->
    <div class="techon_h5">
      <div ref="techon" class="head scro_head">
        <div class="left"></div>
        <div class="head_left">
          <span class="head_top">TECHNOLOGY</span>
          <span class="head_bottom">技术应用</span>
        </div>
      </div>
      <div class="techon_content">
        <!-- 模块一 -->
        <van-cell @click="showPopup1" class="techon_content_one">
          <img class="img" src="../assets/h5/ls_09.gif" alt />
          <div class="techon_content_one_p">脸部识别</div>
        </van-cell>
        <van-popup v-model="flag1">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_09.gif" alt />
              <p class="pop_p">脸部识别</p>
              <span class="pop_span">透过识别人脸比例和轮廓，去识别个人身份根据识别身份及指令，再将数据发送到连接不同设备,可广泛地在不同场所运行。</span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_11.gif" alt />
              <p class="pop_p">自助入住机</p>
              <span class="pop_span">
                在酒店大堂，可以进行自助入住手续，自助入住机要
                刷身分证及脸部识别。可以缩减入住时间，将科技生
                活化。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_14.gif" alt />
              <p class="pop_p">机器人</p>
              <span class="pop_span">
                不同埸合派送不同机械人，带路机械人、送物资、
                送餐机械人，如果有需要机械人可送上门。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_20.gif" alt />
              <p class="pop_p">会议系统</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_23.gif" alt />
              <p class="pop_p">电视机信息推送</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_25.jpg" alt />
              <p class="pop_p">智能停车场</p>
              <span class="pop_span">
                停车场采用拼图型智慧泊车系统，机械式装置、
                自动装置等，驾驶者将车辆驶进泊车系统后就可
                离开汽车。
              </span>
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 模块二 -->
        <van-cell @click="showPopup2" class="techon_content_one">
          <img class="img" src="../assets/h5/ls_11.gif" alt />
          <div class="techon_content_one_p">自助入住机</div>
        </van-cell>
        <van-popup v-model="flag2">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_11.gif" alt />
              <p class="pop_p">自助入住机</p>
              <span class="pop_span">在酒店大堂，可以进行自助入住手续，自助入住机要刷身分证及脸部识别。可以缩减入住时间，将科技生活化。</span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_14.gif" alt />
              <p class="pop_p">机器人</p>
              <span class="pop_span">不同埸合派送不同机械人，带路机械人、送物资、送餐机械人，如果有需要机械人可送上门。</span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_20.gif" alt />
              <p class="pop_p">会议系统</p>
              <span class="pop_span">提供一站式会议方案包括大屏显示，矩阵切换、集中控制、数字会议、视频会议、IP电话等等，专业地因应不同场合私人订制方案。</span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_23.gif" alt />
              <p class="pop_p">电视机信息推送</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等，专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_25.jpg" alt />
              <p class="pop_p">智能停车场</p>
              <span class="pop_span">
                停车场采用拼图型智慧泊车系统，机械式装置、
                自动装置等，驾驶者将车辆驶进泊车系统后就可
                离开汽车。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_09.gif" alt />
              <p class="pop_p">脸部识别</p>
              <span class="pop_span">透过识别人脸比例和轮廓，去识别个人身份根据识别身份及指令，再将数据发送到连接不同设备,可广泛地在不同场所运行。</span>
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 模块三 -->
        <van-cell @click="showPopup3" class="techon_content_one">
          <img class="img" src="../assets/h5/ls_14.gif" alt />
          <div class="techon_content_one_p">机器人</div>
        </van-cell>
        <van-popup v-model="flag3">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_14.gif" alt />
              <p class="pop_p">机器人</p>
              <span class="pop_span">
                不同埸合派送不同机械人，带路机械人、送物资、
                送餐机械人，如果有需要机械人可送上门。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_20.gif" alt />
              <p class="pop_p">会议系统</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_23.gif" alt />
              <p class="pop_p">电视机信息推送</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_25.jpg" alt />
              <p class="pop_p">智能停车场</p>
              <span class="pop_span">
                停车场采用拼图型智慧泊车系统，机械式装置、
                自动装置等，驾驶者将车辆驶进泊车系统后就可
                离开汽车。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_09.gif" alt />
              <p class="pop_p">脸部识别</p>
              <span class="pop_span">透过识别人脸比例和轮廓，去识别个人身份根据识别身份及指令，再将数据发送到连接不同设备,可广泛地在不同场所运行。</span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_11.gif" alt />
              <p class="pop_p">自助入住机</p>
              <span class="pop_span">
                在酒店大堂，可以进行自助入住手续，自助入住机要
                刷身分证及脸部识别。可以缩减入住时间，将科技生
                活化。
              </span>
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 模块四 -->
        <van-cell @click="showPopup4" class="techon_content_one">
          <img class="img" src="../assets/h5/ls_20.gif" alt />
          <div class="techon_content_one_p">会议系统</div>
        </van-cell>
        <van-popup v-model="flag4">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_20.gif" alt />
              <p class="pop_p">会议系统</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_23.gif" alt />
              <p class="pop_p">电视机信息推送</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_25.jpg" alt />
              <p class="pop_p">智能停车场</p>
              <span class="pop_span">
                停车场采用拼图型智慧泊车系统，机械式装置、
                自动装置等，驾驶者将车辆驶进泊车系统后就可
                离开汽车。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_09.gif" alt />
              <p class="pop_p">脸部识别</p>
              <span class="pop_span">透过识别人脸比例和轮廓，去识别个人身份根据识别身份及指令，再将数据发送到连接不同设备,可广泛地在不同场所运行。</span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_11.gif" alt />
              <p class="pop_p">自助入住机</p>
              <span class="pop_span">
                在酒店大堂，可以进行自助入住手续，自助入住机要
                刷身分证及脸部识别。可以缩减入住时间，将科技生
                活化。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_14.gif" alt />
              <p class="pop_p">机器人</p>
              <span class="pop_span">
                不同埸合派送不同机械人，带路机械人、送物资、
                送餐机械人，如果有需要机械人可送上门。
              </span>
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 模块五 -->
        <van-cell @click="showPopup5" class="techon_content_one">
          <img class="img" src="../assets/h5/ls_23.gif" alt />
          <div class="techon_content_one_p">电视机信息推送</div>
        </van-cell>
        <van-popup v-model="flag5">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_23.gif" alt />
              <p class="pop_p">电视机信息推送</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_25.jpg" alt />
              <p class="pop_p">智能停车场</p>
              <span class="pop_span">
                停车场采用拼图型智慧泊车系统，机械式装置、
                自动装置等，驾驶者将车辆驶进泊车系统后就可
                离开汽车。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_09.gif" alt />
              <p class="pop_p">脸部识别</p>
              <span class="pop_span">透过识别人脸比例和轮廓，去识别个人身份根据识别身份及指令，再将数据发送到连接不同设备,可广泛地在不同场所运行。</span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_11.gif" alt />
              <p class="pop_p">自助入住机</p>
              <span class="pop_span">
                在酒店大堂，可以进行自助入住手续，自助入住机要
                刷身分证及脸部识别。可以缩减入住时间，将科技生
                活化。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_14.gif" alt />
              <p class="pop_p">机器人</p>
              <span class="pop_span">
                不同埸合派送不同机械人，带路机械人、送物资、
                送餐机械人，如果有需要机械人可送上门。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_20.gif" alt />
              <p class="pop_p">会议系统</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 模块六 -->
        <van-cell @click="showPopup6" class="techon_content_one">
          <img class="img" src="../assets/h5/ls_25.jpg" alt />
          <div class="techon_content_one_p">智能停车场</div>
        </van-cell>

        <van-popup v-model="flag6">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_25.jpg" alt />
              <p class="pop_p">智能停车场</p>
              <span class="pop_span">
                停车场采用拼图型智慧泊车系统，机械式装置、
                自动装置等，驾驶者将车辆驶进泊车系统后就可
                离开汽车。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_09.gif" alt />
              <p class="pop_p">脸部识别</p>
              <span class="pop_span">透过识别人脸比例和轮廓，去识别个人身份根据识别身份及指令，再将数据发送到连接不同设备,可广泛地在不同场所运行。</span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_11.gif" alt />
              <p class="pop_p">自助入住机</p>
              <span class="pop_span">
                在酒店大堂，可以进行自助入住手续，自助入住机要
                刷身分证及脸部识别。可以缩减入住时间，将科技生
                活化。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_14.gif" alt />
              <p class="pop_p">机器人</p>
              <span class="pop_span">
                不同埸合派送不同机械人，带路机械人、送物资、
                送餐机械人，如果有需要机械人可送上门。
              </span>
            </van-swipe-item>
            <!-- 3 -->
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_20.gif" alt />
              <p class="pop_p">会议系统</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
            <van-swipe-item>
              <img class="img" src="../assets/h5/ls_23.gif" alt />
              <p class="pop_p">电视机信息推送</p>
              <span class="pop_span">
                提供一站式会议方案包括大屏显示，矩阵切换、集中控制、
                数字会议、视频会议、IP电话等等， 专业地因应不同场合
                私人订制方案。
              </span>
            </van-swipe-item>
          </van-swipe>
        </van-popup>
      </div>
    </div>
    <!--实用案例 -->
    <div class="block block_case">
      <el-carousel class="case_pc" trigger="click" height="470rem">
        <!-- 第二部分 -->
        <el-carousel-item>
          <div class="case">
            <div class="xin">
              <div class="xin_left">
                <div class="head">
                  <div class="left"></div>
                  <div class="head_left">
                    <span class="head_top">PRACTICAL CASE</span>
                    <span class="head_bottom">实用案例</span>
                  </div>
                </div>
                <div class="xin_left_contetn">
                  <span>
                    隆胜室内Wi-Fi导航系统，是指用户在建筑物内活动时，仍可有效地在建筑物内定位所, 实际认用场所：医疗机构、主题公园、工厂、商场等各种需要定位导航的场所。
                    Wi-Fi定位技术有两种，一种是通过移动设备和三个无线网络接入点的无线信号强度，通过差分算法，来比较精准地对人和车辆的进行三角定位。
                    另一种是事先记录巨量的确定位置点的信号强度，通过用新加入的设备的信号强度对比拥有巨量数据的数据库，来确定位置。
                  </span>
                </div>
                <div class="btn">contact</div>
              </div>
              <div class="case_right">
                <img class="img" src="../assets/img_02.jpg" alt />
              </div>
            </div>
          </div>
        </el-carousel-item>
        <!-- 第二部分 -->
        <el-carousel-item>
          <div class="case">
            <div class="xin">
              <div class="xin_left">
                <div class="head">
                  <div class="left"></div>
                  <div class="head_left">
                    <span class="head_top">PRACTICAL CASE</span>
                    <span class="head_bottom">实用案例</span>
                  </div>
                </div>
                <div class="xin_left_contetn">
                  <span>
                    改装游艇内部, 使游艇更智能化、更高科技.
                    加入分布式智能灯光系统, 智能音响系统, 智能监控系统, 达到统一和遥距控制和监控
                  </span>
                </div>
                <div class="btn">contact</div>
              </div>
              <div class="case_right">
                <img class="img" src="../assets/img_01.jpg" alt />
              </div>
            </div>
          </div>
        </el-carousel-item>
        <!-- 第三部分 -->
        <el-carousel-item>
          <div class="case">
            <div class="xin">
              <div class="xin_left">
                <div class="head">
                  <div class="left"></div>
                  <div class="head_left">
                    <span class="head_top">PRACTICAL CASE</span>
                    <span class="head_bottom">实用案例</span>
                  </div>
                </div>
                <div class="xin_left_contetn">
                  <span>
                    隆胜RCU客控系统，有效提高酒店管理，有更用的住宿体验。隆胜RCU客控系统的人性化
                    管理客房程序，能满足运营所需，提高成本效益。当住客进入房间时，隆胜RCU客控系统
                    就会收到信号，客房自动启动欢迎模式，再自动调节合适的灯光，遮光及室温效果带给住
                    客有听觉， 有视觉，有温度的入住体验。
                  </span>
                </div>
                <div class="btn">contact</div>
              </div>
              <div class="case_right">
                <img class="img" src="../assets/img_03.jpg" alt />
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- h5实用案例 -->
    <div ref="case" class="head_h5">
      <div class="left"></div>
      <div class="head_left">
        <span class="head_top">PRACTICAL CASE</span>
        <span class="head_bottom">实用案例</span>
      </div>
    </div>
    <van-swipe class="my-swipe case_class" indicator-color="white">
      <van-swipe-item>
        <div class="case">
          <div class="xin">
            <div class="xin_left">
              <div class="case_right">
                <img class="img" src="../assets/h5/img_01.jpg" alt />
              </div>
            </div>
          </div>

          <div class="xin_left_contetn">
            <p>
              隆胜RCU客控系统，有效提高酒店管理，有更用的住宿体验。隆胜RCU客控系统的人性化
              管理客房程序，能满足运营所需，提高成本效益。当住客进入房间时，隆胜RCU客控系统
              就会收到信号，客房自动启动欢迎模式，再自动调节合适的灯光，遮光及室温效果带给住
              客有听觉， 有视觉，有温度的入住体验。
            </p>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="case">
          <div class="xin">
            <div class="xin_left">
              <div class="case_right">
                <img class="img" src="../assets/h5/img_02.jpg" alt />
              </div>
            </div>
          </div>

          <div class="xin_left_contetn">
            <p>
              改装游艇内部, 使游艇更智能化、更高科技.
              加入分布式智能灯光系统, 智能音响系统, 智能监控系统, 达到统一和遥距控制和监控
            </p>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="case">
          <div class="xin">
            <div class="xin_left">
              <div class="case_right">
                <img class="img" src="../assets/h5/img_03.jpg" alt />
              </div>
            </div>
          </div>

          <div class="xin_left_contetn">
            <p>
              隆胜室内Wi-Fi导航系统，是指用户在建筑物内活动时，仍可有效地在建筑物内定位所, 实际认用场所：医疗机构、主题公园、工厂、商场等各种需要定位导航的场所。
              Wi-Fi定位技术有两种，一种是通过移动设备和三个无线网络接入点的无线信号强度，通过差分算法，来比较精准地对人和车辆的进行三角定位。
              另一种是事先记录巨量的确定位置点的信号强度，通过用新加入的设备的信号强度对比拥有巨量数据的数据库，来确定位置。
            </p>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- --------------------------------------------------------------------------------------------------------- -->
    <!-- 关于我们pc -->
    <div class="about">
      <div class="about_title">关于我们</div>
      <div class="line"></div>
      <div class="about_detail">让科技进入生活，用生活成就幸福。推动科技实用化，普及化为己任</div>
      <div class="about_content" :style="{opacity:`${about_opacity}`}">
        <ul :style="{left:`${n_one_left}rem`,top:`${n_one_top}rem`}" class="about_content_one">
          <li class="one_one">
            <div class="dv_one">4项</div>
            <div class="dv_two">国家级证书</div>
          </li>
          <li class="one_two">
            <div class="dv_one">6项</div>
            <div class="dv_two">国际BQC证书</div>
          </li>
          <li class="one_three">
            <div class="dv_one">1000+</div>
            <div class="dv_two">服务全球的客户</div>
          </li>
          <li class="one_four">
            <div class="dv_one">25年</div>
            <div class="dv_two">软硬件研发经验</div>
          </li>
        </ul>
        <ul :style="{left:`${n_two_left}rem`,top:`${n_two_top}rem`}" class="about_content_two">
          <li class="two_one">隆胜科技有强大的科技背景 超过25年的软硬件经验</li>
          <li class="two_two">
            本公司愿景：让科技进入生活，用生活成就幸福。推动科技实用化，普及化为
            己任公司的科技人才，分别在鸿海科技集团，思科亚太总部，美国西门铁克公
            司在线储存部，中国南方航空公司，神舟数码香港，星空传媒，香港怡和集团
            加拿大惠普公司等，曾担任非常重要的职位。在机电一体化的领域上，有着国
            际性的经验。公司总部在深圳，在佛山，海南，香港设有分公司。
          </li>
        </ul>
        <ul
          :style="{left:`${n_three_left}rem`,top:`${n_three_top}rem`}"
          class="about_content_three"
        >
          <li>
            隆胜科技是中国移动ICT业务合作伙伴，主要围绕佛山公司重点关注的ICT
            领域，优先发展平安城市、医疗、教育、旅游、酒店、交通、工农商企等
            高价值行业合作伙伴。
          </li>
        </ul>
        <ul :style="{left:`${n_fore_left}rem`,top:`${n_fore_top}rem`}" class="about_content_four">
          <img class="img" src="../assets/ls_31.png" alt />
        </ul>
      </div>
    </div>

    <!-- 关于我们h5 -->

    <div ref="about" class="about_h5">
      <div class="about_title">关于我们</div>
      <div class="line"></div>
      <div class="about_detail">让科技进入生活，用生活成就幸福。推动科技实用化，普及化为己任</div>
      <div class="about_content">
        <ul class="about_content_one">
          <li class="one_one">
            <div class="dv_one">4项</div>
            <div class="dv_two">国家级证书</div>
          </li>
          <li class="one_two">
            <div class="dv_one">6项</div>
            <div class="dv_two">国际BQC证书</div>
          </li>
          <li class="one_three">
            <div class="dv_one">1000+</div>
            <div class="dv_two">服务全球的客户</div>
          </li>
          <li class="one_four">
            <div class="dv_one">25年</div>
            <div class="dv_two">软硬件研发经验</div>
          </li>
        </ul>
        <ul class="about_content_two">
          <li class="two_one">隆胜科技有强大的科技背景</li>
          <li class="two_one">超过25年的软硬件经验</li>

          <li class="two_two">
            本公司愿景：让科技进入生活，用生活成就幸福。推动科技实用化，普及化为己任公司的科技人才，分别在鸿海科技集团，思科亚太总部，美国西门铁克公
            司在线储存部，中国南方航空公司，神舟数码香港，星空传媒，香港怡和集团
            加拿大惠普公司等，曾担任非常重要的职位。在机电一体化的领域上，有着国
            际性的经验。公司总部在深圳，在佛山，海南，香港设有分公司。
          </li>
        </ul>
        <ul class="about_content_three">
          <img class="img" src="../assets/h5/ls_31.png" alt />
        </ul>
        <ul class="about_content_four">
          <li>
            隆胜科技是中国移动ICT业务合作伙伴，主要围绕佛山公司重点关注的ICT
            领域，优先发展平安城市、医疗、教育、旅游、酒店、交通、工农商企等
            高价值行业合作伙伴。
          </li>
        </ul>
      </div>
    </div>
    <!-- 国际认证 -->
    <div class="block interna">
      <el-carousel arrow="false" :autoplay="false" trigger="click" height="558rem">
        <el-carousel-item>
          <div id="inter" class="xin">
            <div class="top">
              <p>国际BQC认证</p>
              <div class="xin_top_img">
                <img @click="interOne_cl(0)" class="img" src="../assets/ls_34.gif" alt />
                <img @click="interOne_cl(1)" class="img" src="../assets/ls_36.gif" alt />
                <img @click="interOne_cl(2)" class="img" src="../assets/ls_38.gif" alt />
                <img @click="interOne_cl(3)" class="img" src="../assets/ls_40.gif" alt />
              </div>
            </div>
            <div class="bottom"></div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div id="inter" class="xin">
            <div class="top">
              <p>国际BQC认证</p>
              <div class="xin_top_img">
                <img @click="interOne_cl(4)" class="img" src="../assets/ls_42.gif" alt />
                <img @click="interOne_cl(5)" class="img" src="../assets/ls_45.jpg" alt />
              </div>
            </div>
            <div class="bottom"></div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 国际认证h5 -->
    <div class="internation_h5 national">
      <div class="internation_national" @click="clickMore">
        <p>国际BQC认证</p>
        <van-icon name="arrow-down" />
      </div>
      <div class="internation_list" v-show="showFlag">
        <!-- 图一 -->
        <van-cell @click="showPopup11" class="tinternation_img">
          <img src="../assets/h5/ls_34.jpg" alt />
        </van-cell>
        <van-popup v-model="flag11" class="tinternation_detail">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img src="../assets/h5/ls_34.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_36.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_38.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_40.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_42.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_45.jpg" alt />
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 图二 -->
        <van-cell @click="showPopup12" class="tinternation_img">
          <img src="../assets/h5/ls_36.jpg" alt />
        </van-cell>
        <van-popup v-model="flag12" class="tinternation_detail">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img src="../assets/h5/ls_36.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_38.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_40.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_42.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_45.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_34.jpg" alt />
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 图三 -->
        <van-cell @click="showPopup13" class="tinternation_img">
          <img src="../assets/h5/ls_38.jpg" alt />
        </van-cell>
        <van-popup v-model="flag13" class="tinternation_detail">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img src="../assets/h5/ls_38.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_40.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_42.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_45.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_34.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_36.jpg" alt />
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 图五 -->
        <van-cell @click="showPopup15" class="tinternation_img">
          <img src="../assets/h5/ls_42.jpg" alt />
        </van-cell>
        <van-popup v-model="flag15" class="tinternation_detail">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img src="../assets/h5/ls_42.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_45.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_34.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_36.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_38.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_40.jpg" alt />
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 图六 -->
        <van-cell @click="showPopup16" class="tinternation_img">
          <img src="../assets/h5/ls_45.jpg" alt />
        </van-cell>
        <van-popup v-model="flag16" class="tinternation_detail">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img src="../assets/h5/ls_45.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_34.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_36.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_38.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_40.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_42.jpg" alt />
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 图四 -->
        <van-cell @click="showPopup14" class="tinternation_img">
          <img src="../assets/h5/ls_40.jpg" alt />
        </van-cell>
        <van-popup v-model="flag14" class="tinternation_detail">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img src="../assets/h5/ls_40.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_42.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_45.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_34.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_36.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_38.jpg" alt />
            </van-swipe-item>
          </van-swipe>
        </van-popup>
      </div>
    </div>
    <!-- 国家级证书-->
    <div class="block nation">
      <el-carousel :autoplay="false" trigger="click" height="558rem">
        <el-carousel-item>
          <div id="inter_" class="xin">
            <div class="top">
              <p>国家级证书</p>
              <div class="xin_top_img">
                <img @click="nation(0)" class="img" src="../assets/ls_54.jpg" alt />
                <img @click="nation(1)" class="img" src="../assets/ls_55.gif" alt />
              </div>
            </div>
            <div class="bottom"></div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div id="inter_" class="xin">
            <div class="top">
              <p>国家级证书</p>
              <div class="xin_top_img">
                <img @click="nation(2)" class="img" src="../assets/ls_56.gif" alt />
              </div>
            </div>
            <div class="bottom"></div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 国家级证书h5 -->
    <div class="national_h5 national">
      <div class="internation_national" @click="nation_clickMore">
        <p>国家级证书</p>

        <van-icon name="arrow-down" />
      </div>

      <div v-show="shownation" class="national_list">
        <!-- 图一 -->
        <van-cell @click="showPopup31" class="national_img">
          <img src="../assets/h5/ls_55.jpeg" alt />
        </van-cell>
        <van-popup v-model="flag31" class="national_detail">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img src="../assets/h5/ls_55.jpeg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_56.jpeg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_57.jpeg" alt />
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <!-- 图二 -->
        <van-cell @click="showPopup32" class="national_img">
          <img src="../assets/h5/ls_56.jpeg" alt />
        </van-cell>
        <van-popup v-model="flag32" class="national_detail">
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img src="../assets/h5/ls_56.jpeg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_57.jpeg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../assets/h5/ls_55.jpeg" alt />
            </van-swipe-item>
          </van-swipe>
        </van-popup>
        <div class="national_lists">
          <!-- 图三 -->
          <van-cell @click="showPopup33" class="national_img">
            <img src="../assets/h5/ls_57.jpeg" alt />
          </van-cell>
          <van-popup v-model="flag33" class="national_detail">
            <van-swipe class="my-swipe" indicator-color="white">
              <van-swipe-item>
                <img src="../assets/h5/ls_57.jpeg" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/h5/ls_55.jpeg" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/h5/ls_56.jpeg" alt />
              </van-swipe-item>
            </van-swipe>
          </van-popup>
        </div>
      </div>
    </div>
    <!-- 软件著作 -->
    <div class="create" trigger="click">
      <p>软件著作</p>
      <div class="xin_img">
        <img @click="cl_create(0)" class="img" src="../assets/ls_53.png" alt />
        <!-- <img @click="nation(1)" class="img" src="../assets/ls_55.gif" alt /> -->
      </div>
    </div>
    <!-- 软件著作h5 -->
    <div class="national sorft_national">
      <div class="internation_national" @click="soft_clickMore">
        <p>软件著作</p>
        <van-icon name="arrow-down" />
      </div>

      <div v-show="soft_bool" class="national_list">
        <!-- 图一 -->
        <van-cell @click="showPopup41" class="national_img">
          <img src="../assets/h5/ls_53.png" alt />
        </van-cell>
        <van-popup v-model="flag41" class="national_detail sorft">
              <img src="../assets/h5/ls_53.png" alt />
        </van-popup>
      </div>
    </div>
    <!-- 底部联系我们 -->
    <div class="footer">
      <div class="footer_main">
        <div class="footer_main_title">联系我们</div>
        <div class="footer_main-content">
          <ul>
            <li class="li1">总公司地址：海南省海口市龙华区国贸大道国贸大厦B座609室</li>
            <li class="li2">深圳分公司地址：深圳市南山区深圳湾科技生态园9栋A2座 710</li>
            <li class="li3">Email：info@boomingnewtech.com</li>
          </ul>
          <ul>
            <li class="li4">佛山分公司地址：广东省佛山市禅城区季华六路緑地金融中心3座1914室</li>
            <li
              class="li5"
            >香港分公司地址：Unit 501, 5/F Belgian Bank Bldg No. 721-725 Nathan Rd Mong Kok .KL</li>
          </ul>
        </div>
        <div class="footer_main_bottom">Copyright @ 隆胜（深圳）物联网科技有限公司 All rights reserved</div>
      </div>
    </div>

    <!-- 联系我们h5 -->
    <div class="footer_h5">
      <div class="footer_main">
        <div class="footer_main_title">联系我们</div>
        <div class="footer_main-content">
          <ul>
            <li class="li1">总公司地址：海南省海口市龙华区国贸大道国贸大厦B座609室</li>
            <li class="li2">深圳分公司地址：深圳市南山区深圳湾科技生态园9栋A2座 710</li>

            <li class="li3">佛山分公司地址：广东省佛山市禅城区季华六路緑地金融中心3座1914室</li>
            <li
              class="li4"
            >香港分公司地址：Unit 501, 5/F Belgian Bank Bldg No. 721-725 Nathan Rd Mong Kok .KL</li>
            <li class="li5">Email：info@boomingnewtech.com</li>
          </ul>
        </div>
        <div class="footer_main_bottom">Copyright @ 隆胜（深圳）物联网科技有限公司 All rights reserved</div>
      </div>
    </div>
    <!-- 弹出层 -->
    <el-dialog
      v-if="dialog_bool"
      class="dialog"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <div class="dialog_carousel">
        <el-carousel :autoplay="false" :initial-index="numIndex_carousel" trigger="click">
          <el-carousel-item>
            <img class="img" src="../assets/big_img/ls_34.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img class="img" src="../assets/big_img/ls_36.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img class="img" src="../assets/big_img/ls_38.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img class="img" src="../assets/big_img/ls_40.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img class="img" src="../assets/big_img/ls_42.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img class="img" src="../assets/big_img/ls_45.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-dialog>
    <!-- 国家证书弹出层 -->
    <el-dialog
      class="dialog"
      v-if="prop_bool_nation"
      :visible.sync="dialogVisible_nation"
      width="60%"
      :before-close="propclose"
      id="nation_dialog"
    >
      <div class="dialog_nation">
        <el-carousel :initial-index="prop_num_nation" :autoplay="false" trigger="click">
          <el-carousel-item>
            <img class="img" src="../assets/big_img/ls_54.jpeg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img class="img" src="../assets/big_img/ls_55.jpeg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img class="img" src="../assets/big_img/ls_56.jpeg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-dialog>
    <!-- 软件著作弹出层 -->
    <el-dialog
      class="sorft_dialog dialog"
      :visible.sync="dialogVisible_create"
      width="60%"
      :before-close="sorft_propclose"
      id="create_dialog"
    >
      <div class="dialog_create">
        <img class="img" src="../assets/ls_53.png" alt />
      </div>
    </el-dialog>
  </div>
</template>
<script>
import "../assets/base.css";

export default {
  data() {
    return {
      dialogVisible_nation: false,
      prop_num_nation: 0,
      prop_bool_nation: false, //以上国家级证书
      dialog_bool: false,
      numIndex_carousel: 0, //BQC默认展示
      imgone_booler: true,
      imgtwo_booler: false,
      imgthree_booler: false,
      imgfore_booler: false,
      imgfive_booler: false,
      imgosix_booler: false,
      //弹出层部分
      dialogVisible: false,

      direct_list: [1, 2],
      opacity_skill: 0, //技术部分透明度
      //技术应用部分动画
      // num_one_top: -430,
      // num_one_left: -380, //part1
      // num_two_top: -430,
      // num_two_left: 380, //part2
      // num_three_top: -430,
      // num_three_left: 1200, //part3

      // num_fore_top: 860,
      // num_fore_left: -380, //part4
      // num_five_top: 860,
      // num_five_left: 380, //part5
      // num_six_top: 860,
      // num_six_left: 1200, //part6

      num_one_top: 0,
      num_one_left: 0, //part1
      num_two_top: 0,
      num_two_left: 380, //part2
      num_three_top: 0,
      num_three_left: 820, //part3

      num_fore_top: 430,
      num_fore_left: 0, //part4
      num_five_top: 430,
      num_five_left: 380, //part5
      num_six_top: 430,
      num_six_left: 820,

      home_colo: false,
      techon_colo: false,
      clcase_colo: false,
      about_colo: false,
      footer_colo: false,
      alia: 0,
      //关于我们动画
      // about_num: 0,
      // n_one_left: -600, //part1
      // n_one_top: -339,
      // n_two_left: 1200, //part2
      // n_two_top: -339,
      // n_three_left: -600, //part3
      // n_three_top: 678,
      // n_fore_left: 1200, //part4
      // n_fore_top: 678

      n_one_left: 0, //part1
      n_one_top: 0,
      n_two_left: 600, //part2
      n_two_top: 0,
      n_three_left: 0, //part3
      n_three_top: 339,
      n_fore_left: 600, //part4
      n_fore_top: 339,
      about_opacity: 0,
      dialogVisible_create: false,
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      flag6: false,
      flag11: false,
      flag12: false,
      flag13: false,
      flag14: false,
      flag15: false,
      flag16: false,
      flag31: false,
      flag32: false,
      flag33: false,
      flag41: false,
      showFlag: false,
      shownation: false,
      soft_bool: false,
      screenWidth: document.body.clientWidth,
      pc_h5: 1
    };
  },

  methods: {
    //软件
    soft_clickMore() {
      this.soft_bool = !this.soft_bool;
    },
    //国家
    nation_clickMore() {
      this.shownation = !this.shownation;
    },
    // 点击更多
    clickMore() {
      this.showFlag = !this.showFlag;
    },
    showPopup1() {
      this.flag1 = true;
    },
    showPopup2() {
      this.flag2 = true;
    },
    showPopup3() {
      this.flag3 = true;
    },
    showPopup4() {
      this.flag4 = true;
    },
    showPopup5() {
      this.flag5 = true;
    },
    showPopup6() {
      this.flag6 = true;
    },
    showPopup11() {
      this.flag11 = true;
    },
    showPopup12() {
      this.flag12 = true;
    },
    showPopup13() {
      this.flag13 = true;
    },
    showPopup14() {
      this.flag14 = true;
    },
    showPopup15() {
      this.flag15 = true;
    },
    showPopup16() {
      this.flag16 = true;
    },
    showPopup31() {
      this.flag31 = true;
    },
    showPopup32() {
      this.flag32 = true;
    },
    showPopup33() {
      this.flag33 = true;
    },
    showPopup41() {
      this.flag41 = true;
    },
    ////////////////////上面的是h5
    // 软件著作
    cl_create() {
      this.dialogVisible_create = true;
    },
    sorft_propclose() {
      this.dialogVisible_create = false;
    },
    handleClose() {
      this.dialogVisible = false;
      this.numIndex_carousel = 0;
      this.dialog_bool = false;
    },
    //图片的点击事件
    interOne_cl(num) {
      this.dialog_bool = true;
      this.numIndex_carousel = num; //bqc
      this.dialogVisible = true;
    },

    //国家级证书
    propclose() {
      //关闭回调
      this.dialogVisible_nation = false;
      this.prop_num_nation = 0;
      this.prop_bool_nation = false;
    },
    nation(num) {
      console.log(num);
      this.prop_num_nation = num;
      this.prop_bool_nation = true;
      this.dialogVisible_nation = true;
    },

    //滚动监听
    handleScroll() {
      //监测滚动事件
      if (document.documentElement.scrollTop <= 720) {
        this.home_colo = true;
        this.techon_colo = false;
        this.clcase_colo = false;
        this.about_colo = false;
        this.footer_colo = false;
      }
      if (
        document.documentElement.scrollTop >= 1296 &&
        document.documentElement.scrollTop <= 1620
      ) {
        this.home_colo = false;
        this.techon_colo = false;
        this.clcase_colo = true;
        this.about_colo = false;
        this.footer_colo = false;
      }

      if (
        document.documentElement.scrollTop > 1780 &&
        document.documentElement.scrollTop < 3720
      ) {
        this.home_colo = false;
        this.techon_colo = false;
        this.clcase_colo = false;
        this.about_colo = true;
        this.footer_colo = false;
      }
      if (document.documentElement.scrollTop >= 3901) {
        this.home_colo = false;
        this.techon_colo = false;
        this.clcase_colo = false;
        this.about_colo = false;
        this.footer_colo = true;
      }
      if (
        document.documentElement.scrollTop >= 720 &&
        document.documentElement.scrollTop < 1136
      ) {
        // this.alia += 1;
        this.home_colo = false;
        this.techon_colo = true;
        this.clcase_colo = false;
        this.about_colo = false;
        this.footer_colo = false;
        // if (this.alia == 1) {
        //   //技术应用部分(part1)
        //   if (this.num_one_top < 0) {
        //     // 高
        //     var time_one_top = setInterval(() => {
        //       this.num_one_top += 8;
        //       if (this.num_one_top >= 0) {
        //         clearInterval(time_one_top);
        //       }
        //     }, 1);
        //   }
        //   // 宽
        //   if (this.num_one_left < 0) {
        //     var time_one_left = setInterval(() => {
        //       this.num_one_left += 8;
        //       // clearInterval(time_one_left);
        //       if (this.num_one_left >= 0) {
        //         clearInterval(time_one_left);
        //       }
        //     }, 1);
        //   }
        //   //技术应用部分(part2)
        //   if (this.num_two_top < 0) {
        //     // 高
        //     var time_two_top = setInterval(() => {
        //       this.num_two_top += 8;
        //       if (this.num_two_top >= 0) {
        //         clearInterval(time_two_top);
        //       }
        //     }, 1);
        //   }
        //   //技术应用部分(part3)
        //   if (this.num_three_top < 0) {
        //     // 高
        //     var time_three_top = setInterval(() => {
        //       this.num_three_top += 8;
        //       if (this.num_three_top >= 0) {
        //         clearInterval(time_three_top);
        //       }
        //     }, 1);
        //   }
        //   // 宽
        //   if (this.num_three_left > 820) {
        //     var time_three_left = setInterval(() => {
        //       this.num_three_left -= 8;
        //       // clearInterval(time_three_left);
        //       if (this.num_three_left <= 820) {
        //         clearInterval(time_three_left);
        //       }
        //     }, 1);
        //   }
        //   //技术应用部分(part4)
        //   if (this.num_fore_top > 430) {
        //     // 高
        //     var time_fore_top = setInterval(() => {
        //       this.num_fore_top -= 8;
        //       if (this.num_fore_top <= 430) {
        //         clearInterval(time_fore_top);
        //       }
        //     }, 1);
        //   }
        //   // 宽
        //   if (this.num_fore_left < 0) {
        //     var time_fore_left = setInterval(() => {
        //       this.num_fore_left += 8;
        //       // clearInterval(time_fore_left);
        //       if (this.num_fore_left >= 0) {
        //         clearInterval(time_fore_left);
        //       }
        //     }, 1);
        //   }
        //   //技术应用部分(part5)
        //   if (this.num_five_top > 430) {
        //     // 高
        //     var time_five_top = setInterval(() => {
        //       this.num_five_top -= 8;
        //       if (this.num_five_top <= 430) {
        //         clearInterval(time_five_top);
        //       }
        //     }, 1);
        //   }
        //   //技术应用部分(part6)
        //   if (this.num_six_top > 430) {
        //     // 高
        //     var time_six_top = setInterval(() => {
        //       this.num_six_top -= 8;
        //       if (this.num_six_top <= 430) {
        //         clearInterval(time_six_top);
        //       }
        //     }, 1);
        //   }
        //   // 宽
        //   if (this.num_six_left > 820) {
        //     var time_six_left = setInterval(() => {
        //       this.num_six_left -= 8;
        //       if (this.num_six_left <= 820) {
        //         clearInterval(time_six_left);
        //       }
        //     }, 1);
        //   }
        // }
      }
      // else {
      //////////////////////////////////////////////
      // 技术应用部分(part1)
      // if (this.num_one_top > -430) {
      // 高
      // var time_one_top_ = setInterval(() => {
      // this.num_one_top -= 8;
      // if (this.num_one_top <= -430) {
      // clearInterval(time_one_top_);
      // }
      // }, 1);
      // }
      // 宽
      // if (this.num_one_left > -380) {
      // var time_one_left_ = setInterval(() => {
      // this.num_one_left -= 8;
      // clearInterval(time_one_left_);
      // if (this.num_one_left <= -380) {
      // clearInterval(time_one_left_);
      // }
      // }, 1);
      // }
      // 技术应用部分(part2)
      // if (this.num_two_top > -430) {
      // 高
      // var time_two_top_ = setInterval(() => {
      // this.num_two_top -= 8;
      // if (this.num_two_top <= -430) {
      // clearInterval(time_two_top_);
      // }
      // }, 1);
      // }
      // 技术应用部分(part3)
      // if (this.num_three_top > -430) {
      // 高
      // var time_three_top_ = setInterval(() => {
      // this.num_three_top -= 8;
      // if (this.num_three_top <= -430) {
      // clearInterval(time_three_top_);
      // }
      // }, 1);
      // }
      // 宽
      // if (this.num_three_left < 1200) {
      // var time_three_left_ = setInterval(() => {
      // this.num_three_left += 8;
      // clearInterval(time_three_left_);
      // if (this.num_three_left >= 1200) {
      // clearInterval(time_three_left_);
      // }
      // }, 1);
      // }
      // 技术应用部分(part4)
      // if (this.num_fore_top < 860) {
      // 高
      // var time_fore_top_ = setInterval(() => {
      // this.num_fore_top += 8;
      // if (this.num_fore_top >= 860) {
      // clearInterval(time_fore_top_);
      // }
      // }, 1);
      // }
      // 宽
      // if (this.num_fore_left > -380) {
      // var time_fore_left_ = setInterval(() => {
      // this.num_fore_left -= 8;
      // clearInterval(time_fore_left_);
      // if (this.num_fore_left <= -380) {
      // clearInterval(time_fore_left_);
      // }
      // }, 1);
      // }
      // 技术应用部分(part5)
      // if (this.num_five_top < 860) {
      // 高
      // var time_five_top_ = setInterval(() => {
      // this.num_five_top += 8;
      // if (this.num_five_top >= 860) {
      // clearInterval(time_five_top_);
      // }
      // }, 1);
      // }
      // 技术应用部分(part6)
      // if (this.num_six_top < 860) {
      // 高
      // var time_six_top_ = setInterval(() => {
      // this.num_six_top += 8;
      // if (this.num_six_top >= 860) {
      // clearInterval(time_six_top_);
      // }
      // }, 1);
      // }
      // 宽
      // if (this.num_six_left < 1200) {
      // var time_six_left_ = setInterval(() => {
      // this.num_six_left += 8;
      // if (this.num_six_left >= 1200) {
      // clearInterval(time_six_left_);
      // }
      // }, 1);
      // }
      // this.alia = 0;
      // }
      //关于我们部��动画
      // if (document.documentElement.scrollTop >= 2185) {
      //   console.log(this.about_num);
      //   this.about_num += 1;
      //   if (this.about_num == 1 ) {
      //     //关于我们部分(part1)
      //     if (this.n_one_top < 0) {
      //       // 高
      //       var ti_one_top_ = setInterval(() => {
      //         this.n_one_top += 8;
      //         if (this.n_one_top >= 0) {
      //           clearInterval(ti_one_top_);
      //         }
      //       }, 1);
      //     }
      //     // 宽
      //     if (this.n_one_left < 0) {
      //       var ti_one_left_ = setInterval(() => {
      //         this.n_one_left += 8;
      //         if (this.n_one_left >= 0) {
      //           clearInterval(ti_one_left_);
      //         }
      //       }, 1);
      //     }
      //     //关于我们部分(part2)
      //     if (this.n_two_top < 0) {
      //       // 高
      //       var ti_two_top_ = setInterval(() => {
      //         this.n_two_top += 8;
      //         if (this.n_two_top >= 0) {
      //           clearInterval(ti_two_top_);
      //         }
      //       }, 1);
      //     }
      //     // 宽
      //     if (this.n_two_left > 600) {
      //       var ti_two_left_ = setInterval(() => {
      //         this.n_two_left -= 8;
      //         if (this.n_two_left <= 600) {
      //           clearInterval(ti_two_left_);
      //         }
      //       }, 1);
      //     }
      //     //关于我们部分(part3)
      //     if (this.n_three_top > 339) {
      //       // 高
      //       var ti_three_top_ = setInterval(() => {
      //         this.n_three_top -= 8;
      //         if (this.n_three_top <= 339) {
      //           clearInterval(ti_three_top_);
      //         }
      //       }, 1);
      //     }
      //     // 宽
      //     if (this.n_three_left < 0) {
      //       var ti_three_left_ = setInterval(() => {
      //         this.n_three_left += 8;
      //         if (this.n_three_left >= 0) {
      //           clearInterval(ti_three_left_);
      //         }
      //       }, 1);
      //     }
      //     //关于我们部分(part4)
      //     if (this.n_fore_top > 339) {
      //       // 高
      //       var ti_fore_top_ = setInterval(() => {
      //         this.n_fore_top -= 8;
      //         if (this.n_fore_top <= 339) {
      //           clearInterval(ti_fore_top_);
      //         }
      //       }, 1);
      //     }
      //     // 宽
      //     if (this.n_fore_left > 600) {
      //       var ti_fore_left_ = setInterval(() => {
      //         this.n_fore_left -= 8;
      //         if (this.n_fore_left <= 600) {
      //           clearInterval(ti_fore_left_);
      //         }
      //       }, 1);
      //     }
      //   }
      // }
      // else {
      // this.about_num = 0;
      // 关于我们部分(part1)
      // if (this.n_one_top > -339) {
      // clearInterval(ti_one_top_);

      // 高
      // var tim_one_top_ = setInterval(() => {
      // this.n_one_top -= 8;
      // if (this.n_one_top <= -339) {
      // clearInterval(tim_one_top_);
      // }
      // }, 1);
      // }
      // 宽
      // if (this.n_one_left > -600) {
      // clearInterval(ti_one_left_);

      // var tim_one_left_ = setInterval(() => {
      // this.n_one_left -= 8;
      // if (this.n_one_left <= -600) {
      // clearInterval(tim_one_left_);
      // }
      // }, 1);
      // }
      // 关于我们部分(part2)
      // if (this.n_two_top > -339) {
      // 高
      // var tim_two_top_ = setInterval(() => {
      // this.n_two_top -= 8;
      // if (this.n_two_top <= -339) {
      // clearInterval(tim_two_top_);
      // }
      // }, 1);
      // }
      // 宽
      // if (this.n_two_left < 1200) {
      // var tim_two_left_ = setInterval(() => {
      // this.n_two_left += 8;
      // if (this.n_two_left >= 1200) {
      // clearInterval(tim_two_left_);
      // }
      // }, 1);
      // }
      // 关于我们部分(part3)
      // if (this.n_three_top < 678) {
      // 高
      // var tim_three_top_ = setInterval(() => {
      // this.n_three_top += 8;
      // if (this.n_three_top >= 678) {
      // clearInterval(tim_three_top_);
      // }
      // }, 1);
      // }
      // 宽
      // if (this.n_three_left < -600) {
      // var tim_three_left_ = setInterval(() => {
      // this.n_three_left -= 8;
      // if (this.n_three_left >= -600) {
      // clearInterval(tim_three_left_);
      // }
      // }, 1);
      // }
      // 关于我们部分(part4)
      // if (this.n_fore_top < 678) {
      // 高
      // var tim_fore_top_ = setInterval(() => {
      // this.n_fore_top += 8;
      // if (this.n_fore_top >= 678) {
      // clearInterval(tim_fore_top_);
      // }
      // }, 1);
      // }
      // 宽
      // if (this.n_fore_left < 1200) {
      // var tim_fore_left_ = setInterval(() => {
      // this.n_fore_left += 8;
      // if (this.n_fore_left >= 1200) {
      // clearInterval(tim_fore_left_);
      // }
      // }, 1);
      // }
      // }

      this.direct_list.shift();
      this.direct_list.push(document.documentElement.scrollTop);
      // console.log(this.direct_list);
      if (this.direct_list[0] < this.direct_list[1]) {
        //关于我们
        if (
          document.documentElement.scrollTop >= 1800 &&
          document.documentElement.scrollTop <= 2530
        ) {
          this.about_opacity += 0.03;
          if (this.about_opacity > 1) {
            this.about_opacity = 1;
          }
        } else {
          if (document.documentElement.scrollTop > 2710) {
            this.about_opacity -= 0.03;
            if (this.about_opacity < 0) {
              this.about_opacity = 0;
            }
          }
        }

        //技术应用
        // console.log("下");
        if (
          document.documentElement.scrollTop >= 360 &&
          document.documentElement.scrollTop <= 1200
        ) {
          this.opacity_skill += 0.03;
          if (this.opacity_skill > 1) {
            this.opacity_skill = 1;
          }
        } else {
          if (document.documentElement.scrollTop > 1200) {
            this.opacity_skill -= 0.03;

            if (this.opacity_skill < 0) {
              this.opacity_skill = 0;
            }
          }
        }
      } else {
        //关于我们
        if (
          document.documentElement.scrollTop >= 1900 &&
          document.documentElement.scrollTop <= 2260
        ) {
          this.about_opacity -= 0.03;
          if (this.about_opacity < 0) {
            this.about_opacity = 0;
          }
        } else {
          if (
            document.documentElement.scrollTop < 3120 &&
            document.documentElement.scrollTop > 2610
          ) {
            this.about_opacity += 0.03;

            if (this.about_opacity > 1) {
              this.about_opacity = 1;
            }
          }
        }
        //技术应用
        // console.log("向上走");
        if (
          document.documentElement.scrollTop >= 300 &&
          document.documentElement.scrollTop <= 480
        ) {
          this.opacity_skill -= 0.03;
          if (this.opacity_skill < 0) {
            this.opacity_skill = 0;
          }
        } else {
          if (
            document.documentElement.scrollTop < 1700 &&
            document.documentElement.scrollTop > 980
          ) {
            this.opacity_skill += 0.03;

            if (this.opacity_skill > 1) {
              this.opacity_skill = 1;
            }
          }
        }
      }
    },
    //首页
    home() {
      let num = document.documentElement.scrollTop;
      if (num > 0) {
        var time = setInterval(() => {
          num -= 30;
          if (num <= 0) {
            //754
            clearInterval(time);
          }
          window.scrollTo(0, num);
        }, 1);
      }

      this.home_colo = true;
      this.techon_colo = false;
      this.clcase_colo = false;
      this.about_colo = false;
      this.footer_colo = false;
    },
    //技术应用
    techon() {
      this.opacity_skill = 1;
      let num = document.documentElement.scrollTop;

      if (num < 720) {
        //在技术应用上
        var time_top = setInterval(() => {
          num += 30;
          if (num >= 720) {
            //720
            document.documentElement.scrollTop = 720;
            num = document.documentElement.scrollTop;
            clearInterval(time_top);
          }
          window.scrollTo(0, num);
        }, 1);
      } else {
        var time_bottom = setInterval(() => {
          num -= 30;
          if (num <= 720) {
            //720
            document.documentElement.scrollTop = 720;
            num = document.documentElement.scrollTop;
            clearInterval(time_bottom);
          }
          window.scrollTo(0, num);
        }, 1);
      }
      this.home_colo = false;
      this.techon_colo = true;
      this.clcase_colo = false;
      this.about_colo = false;
      this.footer_colo = false;
    },
    techon_h5() {
      let num = document.documentElement.scrollTop;
      let offset =
        this.$refs.techon.getBoundingClientRect().top +
        document.documentElement.scrollTop -
        this.$refs.techon.offsetHeight-5;

      if (num < offset) {
        //在技术应用上
        var time_top = setInterval(() => {
          num += 5;
          if (num >= offset) {
            //754
            document.documentElement.scrollTop = offset;
            num = document.documentElement.scrollTop;
            clearInterval(time_top);
          }
          window.scrollTo(0, num);
        }, 1);
      } else {
        var time_bottom = setInterval(() => {
          num -= 20;
          if (num <= offset) {
            //754
            document.documentElement.scrollTop = offset;
            num = document.documentElement.scrollTop;
            clearInterval(time_bottom);
          }
          window.scrollTo(0, num);
        }, 1);
      }
      this.home_colo = false;
      this.techon_colo = false;
      this.clcase_colo = true;
      this.about_colo = false;
      this.footer_colo = false;
    },
    //实用案例
    clcase() {
      let num = document.documentElement.scrollTop;
      if (num < 1780) {
        //在技术应用上
        var time_top = setInterval(() => {
          num += 30;
          if (num >= 1780) {
            //754
            document.documentElement.scrollTop = 1780;
            num = document.documentElement.scrollTop;
            clearInterval(time_top);
          }
          window.scrollTo(0, num);
        }, 1);
      } else {
        var time_bottom = setInterval(() => {
          num -= 30;
          if (num <= 1780) {
            //754
            document.documentElement.scrollTop = 1780;
            num = document.documentElement.scrollTop;
            clearInterval(time_bottom);
          }
          window.scrollTo(0, num);
        }, 1);
      }
      this.home_colo = false;
      this.techon_colo = false;
      this.clcase_colo = true;
      this.about_colo = false;
      this.footer_colo = false;
    },
    clcase_h5() {
      let offset =
        document.querySelector(".head_h5").getBoundingClientRect().top +
        document.documentElement.scrollTop -
        document.querySelector(".head_h5").offsetHeight -
        5;

      let num = document.documentElement.scrollTop;
      console.log(offset);
      console.log(num);
      if (num < offset) {
        //在技术应用上
        var time_top = setInterval(() => {
          num += 20;
          if (num >= offset) {
            //754
            document.documentElement.scrollTop = offset;
            num = document.documentElement.scrollTop;
            clearInterval(time_top);
          }
          window.scrollTo(0, num);
     
        }, 1);
      } else {
        var time_bottom = setInterval(() => {
          num -= 20;
          if (num <= offset) {
            //754
            document.documentElement.scrollTop = offset;
            num = document.documentElement.scrollTop;
            clearInterval(time_bottom);
          }
          window.scrollTo(0, num);
        }, 1);
      }
      this.home_colo = false;
      this.techon_colo = false;
      this.clcase_colo = true;
      this.about_colo = false;
      this.footer_colo = false;
    },
    //关于我们
    about() {
      this.about_opacity = 1;
      let num = document.documentElement.scrollTop;
      if (num < 2266) {
        //在技术应用上
        var time_top = setInterval(() => {
          num += 30;

          if (num >= 2266) {
            //754
            document.documentElement.scrollTop = 2266;
            num = document.documentElement.scrollTop;
            clearInterval(time_top);
          }
          window.scrollTo(0, num);
        }, 1);
      } else {
        var time_bottom = setInterval(() => {
          num -= 30;
          if (num <= 2266) {
            //754
            document.documentElement.scrollTop = 2266;
            num = document.documentElement.scrollTop;
            clearInterval(time_bottom);
          }
          window.scrollTo(0, num);
        }, 1);
      }
      this.home_colo = false;
      this.techon_colo = false;
      this.clcase_colo = false;
      this.about_colo = true;
      this.footer_colo = false;
    },
    about_h5() {
      console.log(document.documentElement.offsetHeight);
      var num_suiji = 0;
      if (document.documentElement.offsetHeight >= 1024) {
        num_suiji = 150;
      } else {
        if (document.documentElement.offsetHeight > 568) {
          num_suiji = 70;
        }else{
          num_suiji = 50;

        }
      }
      let offset =
        this.$refs.about.getBoundingClientRect().top +
        document.documentElement.scrollTop -
        num_suiji;
     


      let num = document.documentElement.scrollTop;
      if (num < offset) {
        //在技术应用上
        var time_top = setInterval(() => {
          num += 20;

          if (num >= offset) {
            //754
            document.documentElement.scrollTop = offset;
            num = document.documentElement.scrollTop;
            clearInterval(time_top);
          }
          window.scrollTo(0, num);
          console.log(num);
        }, 1);
      } else {
        var time_bottom = setInterval(() => {
          num -= 20;
          if (num <= offset) {
            //754
            document.documentElement.scrollTop = offset;
            num = document.documentElement.scrollTop;
            clearInterval(time_bottom);
          }
          window.scrollTo(0, num);
        }, 1);
      }
      this.home_colo = false;
      this.techon_colo = false;
      this.clcase_colo = false;
      this.about_colo = true;
      this.footer_colo = false;
    },
    // 联系我们
    footer() {
      this.alia = 2;
      this.about_num = 2;
      let num = document.documentElement.scrollTop;
      if (num < document.documentElement.scrollHeight) {
        var time = setInterval(() => {
          num += 40;
          if (
            num >=
            document.documentElement.scrollHeight -
              document.documentElement.clientHeight
          ) {
            //754
            num =
              document.documentElement.scrollHeight -
              document.documentElement.clientHeight;
            clearInterval(time);
          }
          window.scrollTo(0, num);
        }, 1);
      }
      this.home_colo = false;
      this.techon_colo = false;
      this.clcase_colo = false;
      this.about_colo = false;
      this.footer_colo = true;
    },
    footer_h5() {
      let num = document.documentElement.scrollTop;
      if (num < document.documentElement.scrollHeight) {
        var time = setInterval(() => {
          num += 20;
          if (
            num >=
            document.documentElement.scrollHeight -
              document.documentElement.clientHeight
          ) {
            //754
            num =
              document.documentElement.scrollHeight -
              document.documentElement.clientHeight;
            clearInterval(time);
          }
          window.scrollTo(0, num);
        }, 1);
      }
      this.home_colo = false;
      this.techon_colo = false;
      this.clcase_colo = false;
      this.about_colo = false;
      this.footer_colo = true;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(document.documentElement.scrollTop); //获得当前滚动距离
    this.cliten_width = document.body.clientWidth;
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    screenWidth(newvalue, older) {
      console.log(newvalue, older);
      console.log("变化了");

      if (
        /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) &&
        this.pc_h5 == 1
      ) {
        this.pc_h5 += 1;
        window.location.reload();
      } else {
        this.pc_h5 = 1;
        window.location.reload();
      }
    }
  }
};
</script>

<style lang="less">
#inter_ {
  margin: 10rem auto;
}
#inter {
  margin: 60rem auto;
}
.xin {
  width: 1200rem;
  .top {
    height: 558rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    .xin_top_btn {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: 30rem;
      display: flex;
      li:nth-child(2) {
        margin: 0 0 0 18rem;
      }
      li {
        cursor: pointer;
        background-color: #d9d9d9;
        width: 12rem;
        height: 12rem;
        border-radius: 6rem;
      }
    }
    .xin_top_img {
      display: flex;
      margin-top: 64rem;
      cursor: pointer;
      img {
        float: left;
        margin: 0 4rem;
      }
    }
    p {
      font-size: 22rem;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
}
.bgcColo {
  color: #3065c8;
}
.all {
  overflow: hidden;
  .content {
    width: 100%;
  }
  .home {
    height: 80rem;
    position: fixed;
    // position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    // border-radius: 20rem;
    z-index: 99;
    width: 100%;
    .login {
      // position: absolute;
      // top: 50%;
      // transform: translateY(-50%);
      margin-right: 230rem;
    }
    .right {
      font-size: 16rem;
width: 726px;
      span {
        margin-left: 84rem;
        cursor: pointer;
      }
    }
  }
  .xin {
    width: 1200rem;
    margin: 0 auto;

    //技术应用
    .techon {
      margin-top: 76rem;
      .head {
        display: flex;
        align-items: center;
        margin-bottom: 88rem;
        .left {
          width: 4rem;
          height: 40rem;
          background-color: #316acc;
          margin-right: 10rem;
        }
        .head_left {
          width: 172rem;
          .head_top {
            display: block;
            margin-bottom: 8rem;
            font-size: 18rem;
          }
          .head_bottom {
            display: block;
            font-size: 12rem;
          }
        }
      }
      .techon_content_one:nth-child(1) {
        top: -430rem;
        left: -380rem;
      }
      .techon_content_one {
        position: absolute;
      }
      .techon_content_one:nth-child(2) {
        margin: 0 30rem;
      }
      .techon_content_one:nth-child(5) {
        margin: 0 30rem;
      }
      .techon_content {
        overflow: hidden;
        position: relative;
        // display: flex;
        // flex-wrap: wrap;
        margin-bottom: 30rem;
        height: 940rem;
        .techon_content_one {
          width: 33.333%;
          width: 380rem;
          height: 430rem;
          // background-color: pink;

          .techon_content_one_p {
            width: 100%;
            font-weight: bold;
            display: flex;
            justify-content: center;
            font-size: 18rem;
            margin: 30rem 0 16rem 0;
          }
          .techon_content_one_span {
            font-size: 16rem;
            width: 100%;
            color: #686868;
            line-height: 24rem;
          }
        }
      }
    }
  }
  // //banner图
  // .banner {
  //   position: relative;
  // }
  // .carousel {
  //   position: absolute;
  //   z-index: 9;
  //   left: 50%;
  //   transform: translate(-50%);
  //   bottom: 20rem;
  //   width: 72rem;
  //   display: flex;

  //   li:nth-child(2) {
  //     margin: 0 18rem;
  //   }
  //   li {
  //     background-color: #d9d9d9;
  //     cursor: pointer;
  //     width: 12rem;
  //     height: 12rem;
  //     border-radius: 6rem;
  //   }
  // }
  //实用案例
  .case_pc {
    .case {
      height: 470rem;
      width: 100%;
      background-color: #f7f7f7;
      position: relative;
      .carousel {
        position: absolute;
        z-index: 9;
        left: 50%;
        transform: translate(-50%);
        bottom: 20rem;
        width: 72rem;
        display: flex;

        li:nth-child(2) {
          margin: 0 18rem;
        }
        li {
          background-color: #d9d9d9;
          cursor: pointer;
          width: 12rem;
          height: 12rem;
          border-radius: 6rem;
        }
      }
      .xin {
        display: flex;
        .xin_left {
          width: 50%;
          .btn {
            height: 26rem;
            width: 68rem;
            border: 1rem solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10rem;
            cursor: pointer;
          }
          .xin_left_contetn {
            font-size: 16rem;
            line-height: 30rem;
            margin: 58rem 0 88rem 0;
          }
          .head {
            display: flex;
            margin-top: 60rem;
            height: 40rem;
            .left {
              width: 4rem;
              height: 40rem;
              background-color: #316acc;
              margin-right: 10rem;
            }
            .head_left {
              width: 172rem;
              .head_top {
                display: block;
                margin-bottom: 8rem;
                font-size: 18rem;
              }
              .head_bottom {
                display: block;
                font-size: 12rem;
              }
            }
          }
        }

        .case_right {
          width: 50%;
          display: flex;
          align-items: center;
          position: relative;
          img {
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }

  // ////////////////
  .about {
    overflow: hidden;
    position: absolute;
    height: 841rem;
    width: 1200rem;
    margin: 0 auto;
    margin-top: 79rem;
    text-align: center;
    font-family: "MicrosoftYaHei";
    left: 50%;
    transform: translate(-50%);
    .about_title {
      height: 28rem;
      font-size: 28rem;
      color: #4a4a4a;
      line-height: 24rem;
      margin: 0 auto;
    }
    .line {
      width: 50rem;
      height: 2rem;
      margin: 0 auto;
      margin-top: 20rem;
      background-color: #356ac9;
    }
    .about_detail {
      height: 16rem;
      font-family: "MicrosoftYaHeiLight";
      font-size: 18rem;
      color: #666666;
      line-height: 30rem;
      margin: 0 auto;
      margin-top: 26rem;
    }
    .about_content {
      width: 1200rem;
      margin-top: 69rem;
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      position: relative;
      ul {
        position: absolute;
        width: 600rem;
        height: 339rem;
        flex: 0 0 50%;
      }
      .about_content_one {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        padding-top: 63rem;
        padding-left: 120rem;
        background-color: #4685f5;
        text-align: left;
        color: #ffffff;
        li {
          flex: 0 0 50%;
          height: 75rem;
          .dv_one {
            font-family: "MicrosoftYaHei-Bold";
            font-size: 30rem;
            color: "#ffffff";
            margin-bottom: 28rem;
            font-weight: bold;
          }
          .dv_two {
            font-size: 20rem;
            color: "#ffffff";
          }
        }
        .one_one {
          .dv_one {
            height: 29rem;
          }
          .dv_two {
            width: 100rem;
          }
        }
        .one_two {
          .dv_one {
            height: 29rem;
          }
          .dv_two {
            height: 18rem;
          }
        }
        .one_three {
          .dv_one {
            height: 25rem;
          }
          .dv_two {
            height: 20rem;
          }
        }
        .one_four {
          .dv_one {
            height: 29rem;
          }
          .dv_two {
            height: 30rem;
          }
        }
      }
      .about_content_two {
        .two_one {
          width: 455rem;
          font-size: 20rem;
          line-height: 30rem;
          color: #333333;
          margin-top: 39rem;
          margin: 0 auto;
        }
        .two_two {
          width: 570rem;
          font-size: 16rem;
          line-height: 30rem;
          color: #666666;
          margin-top: 47rem;
          margin-left: 31rem;
          text-align: left;
        }
      }
      .about_content_three {
        li {
          width: 539rem;
          font-size: 16rem;
          line-height: 30rem;
          color: #666666;
          margin-top: 85rem;
        }
      }
    }
  }
  // 底部联系我们
  .footer {
    width: 100%;
    height: 290rem;
    background-color: #f2f2f2;
    font-size: 7rem;
    text-align: left;
    font-family: "MicrosoftYaHei";
    .footer_main {
      width: 1200rem;
      margin: 0 auto;
      padding-top: 45rem;
      .footer_main_title {
        height: 17rem;
        font-size: 18rem;
        line-height: 30rem;
        color: #666666;
        margin-bottom: 36rem;
      }
      .footer_main-content {
        display: flex;
        justify-content: space-between;
        color: #777777;
        font-size: 14rem;
        line-height: 30rem;
        border-bottom: 2rem solid #e1e1e1;
        ul {
          width: 50%;
          li {
            margin-bottom: 24rem;
          }
          .li1 {
            height: 13rem;
          }
          .li2 {
            height: 13rem;
          }
          .li3 {
            height: 14rem;
            margin-bottom: 58rem;
          }
          .li4 {
            height: 14rem;
          }
          .li5 {
            width: 610rem;
            height: 14rem;
          }
        }
      }
      .footer_main_bottom {
      line-height: 30rem;

        width: 440rem;
        height: 14rem;
        line-height: 30rem;
        text-align: center;
        color: #666666;
        margin: 0 auto;
       
        margin-bottom: 15rem;
      }
    }
  }
}
.block:nth-child(1) {
  margin-top: 80rem;
}
.skill {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.block_case {
  margin-top: 1100rem;
}
.interna {
  margin-top: 891rem;
}

.dialog {
  height: 150%;
  .el-dialog__header {
    text-align: center;
  }
  .el-dialog__body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.el-dialog__wrapper {
  position: relative;
  .el-dialog {
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-bottom: 15vh;
    margin: 5vh !important;
    .dialog_carousel {
      width: 80%;

      height: 600rem;
      .el-carousel {
        height: 100%;
        .el-carousel__container {
          height: 100%;
          .el-carousel__item {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              height: 100%;
            }
          }
        }
      }
    }
  }
}

.el-dialog__wrapper {
  // position: relative;
  .el-dialog {
    // position: absolute;
    // left: 50%;

    // transform: translate(-50%);

    .dialog_nation {
      height: 500rem;
      width: 60%;
      .el-carousel {
        height: 100%;
        .el-carousel__container {
          height: 100%;
          .el-carousel__item {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
             
            }
          }
        }
      }
    }
  }
}

//软件著作的弹出层
.sorft_dialog {
  position: relative;
  .el-dialog {
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin: 5vh !important;
       display: flex;
        justify-content: center;
        align-items: center;
    .el-dialog__body {
      height: 600rem;
      width: 80%;
      .dialog_create {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .img {
        
          height: 100%;
        }
      }
    }
  }
}

//软件著作展示部分
.create {
  z-index: 98;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  p {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 20rem;
  }
  .xin_img {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      margin-top: 40rem;
      width: 20%;
      height: 80%;
      cursor: pointer;
    }
  }
}
.banner_carousel {
  margin-top: 80rem;
  width: 100%;
  height: 678rem;
  .el-carousel {
    height: 100%;
    .el-carousel__container {
      height: 100%;
    }
  }
}

.home {
  img {
    width: 292rem;
    height: 52rem;
  }
}

//h5的样式
// 顶部
.home_h5 {
  height: 80rem;
  width: 100%;
  padding: 10rem 0;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  position: fixed;
  z-index: 999;
  background-color: #fff;
  img {
    width: 158rem;
    height: 46rem;
    padding-left: 10rem;
  }
}

//轮播图
.swipe {
  padding-top: 80rem;
  .van-swipe {
    height: 100%;
    .van-swipe__track {
      width: 100%;
    }
  }
}

//技术应用
.techon_h5 {
  width: 100%;
  margin-top: 20rem;
  .head {
    display: flex;
    align-items: center;
    padding-left: 10rem;
    .left {
      width: 5rem;
      height: 70rem;
      background-color: #316acc;
      margin-right: 10rem;
    }
    .head_left {
      .head_top {
        display: block;
        margin-bottom: 8rem;
        font-size: 30rem;
      }
      .head_bottom {
        display: block;
        font-size: 20rem;
      }
    }
  }
  .my-swipe,
  .vant-swipe {
    background-color: #fff;
  }
  .techon_content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10rem;
    padding: 0;
    .techon_content_one {
      width: 40%;
      margin-bottom: 30rem;
      .img {
        width: 100%;
        margin: 0 auto;
      }
      .techon_content_one_p {
        width: 100%;
        font-weight: bold;
        display: flex;
        justify-content: center;
        font-size: 26rem;
        margin: 30rem auto 16rem auto;
        border: 0;
      }
    }
    .van-swipe__track {
      background-color: #f7f7f7;
    }
    .van-popup {
      width: 80%;
      margin: auto 0;
      background-color: #f7f7f7;
      img {
        width: 100%;
        padding: 15rem;
      }
      .pop_p {
        margin: 10rem 10rem 0;
        width: 100%;
        font-size: 38rem;
        text-align: center;
        margin: 40rem auto;
        font-weight: bold;
      }
      .pop_span {
        display: block;
        width: 85%;
        margin: 22rem auto;
        text-indent: 2em;
        line-height: 40rem;
        font-size: 24rem;
        color: #666666;
        // margin-bottom: 50rem;
      }
    }
  }
}

.head_h5 {
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  padding-left: 10rem;
  .left {
    width: 5rem;
    height: 70rem;
    background-color: #316acc;
    margin-right: 10rem;
  }
  .head_left {
    .head_top {
      display: block;
      margin-bottom: 8rem;
      font-size: 30rem;
    }
    .head_bottom {
      display: block;
      font-size: 20rem;
    }
  }
}

//实用案例
.van-swipe {
  background-color: #f7f7f7;
  .case {
    width: 100%;
    .xin {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0;
      .xin_left {
        width: 100%;
        .head {
          display: flex;
          align-items: center;
          margin: 20rem 0;
          padding-left: 10rem;
          .left {
            width: 5rem;
            height: 70rem;
            background-color: #316acc;
            margin-right: 10rem;
          }
          .head_left {
            .head_top {
              display: block;
              margin-bottom: 8rem;
              font-size: 30rem;
            }
            .head_bottom {
              display: block;
              font-size: 20rem;
            }
          }
        }
        .case_right {
          img {
            width: 100%;
          }
        }
      }
    }
    .xin_left_contetn {
      width: 90%;
      margin: 0 auto;

      p {
        width: 100%;
        display: block;
        text-indent: 2em;
        font-size: 24rem;
        line-height: 34rem;
        margin: 30rem 0 20rem 0;
      }
    }
  }
}

// 关于我们h5
.about_h5 {
  width: 100%;
  margin-top: 50rem;
  .about_title {
    font-size: 30rem;
    color: #4a4a4a;
    line-height: 24rem;
    margin: 0 auto;
    text-align: center;
  }
  .line {
    width: 50rem;
    height: 2rem;
    margin: 0 auto;
    margin-top: 15rem;
    background-color: #356ac9;
  }
  .about_detail {
    text-align: center;
    font-size: 20rem;
    color: #666666;
    line-height: 30rem;
    margin: 0 auto;
    margin-top: 20rem;
  }
  .about_content {
    width: 100%;
    margin-top: 20rem;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    ul {
      width: 100%;
      margin-bottom: 30rem;
    }
    ul:nth-child(3) {
      margin-top: 30rem;
    }
    ul:nth-child(2) {
      height: 300rem;

      .two_one {
        font-size: 30rem;
        text-align: center;
        margin: 30rem 0;
        color: #333333;
      }
      .two_one:nth-child(2) {
        margin-top: -10rem;
      }
      .two_two {
        width: 90%;
        margin: 0 auto;
        font-size: 20rem;
        text-indent: 2em;
        color: #666666;
        line-height: 30rem;
      }
    }
    ul:nth-child(4) {
      height: 150rem;
      li {
        width: 90%;
        margin: 0 auto;
        font-size: 20rem;
        color: #666666;
        line-height: 30rem;
        text-indent: 2em;
      }
    }
    .about_content_one {
      display: flex;
      flex-wrap: wrap;
      height: 400rem;
      padding-top: 20rem;
      padding: 20rem auto;
      // padding: 80rem 120rem;
      background-color: #4685f5;
      justify-self: center;
      align-items: center;
      color: #ffffff;
      li {
        flex: 0 0 50%;
        display: flex;
        align-items: center;
        flex-direction: column;
        .dv_one {
          font-family: "MicrosoftYaHei-Bold";
          font-size: 30rem;
          color: "#ffffff";
          margin-bottom: 28rem;
          font-weight: bold;
        }
        .dv_two {
          font-size: 20rem;
          color: "#ffffff";
        }
      }
    }

    .about_content_three {
      img {
        width: 100%;
        // height: 500rem;
      }
    }
  }
}

//国际BQC认证
.internation_h5 {
  width: 100%;

  .internation_head {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    p {
      margin-left: -28rem;
      text-align: center;
      font-size: 40rem;
    }
    .van-button {
      height: 40rem;
      position: absolute;
      top: 0rem;
      right: 0rem;
      font-size: 20rem;
      border: 0;
      // border: 1px solid #dbdbdb;
      outline: none;
      border-radius: 10rem;
      .van-icon {
        font-size: 40rem;
      }
    }
  }
  .internation_list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: auto 0;
    .tinternation_img {
      flex: 0 0 33%;
      img {
        display: block;
        width: 80%;
        margin: 10rem auto;
      }
    }
    .tinternation_detail {
      width: 80%;
      img {
        width: 100%;
      }
    }
  }
}
.national {
  p {
    font-size: 40rem;
    margin: 30rem 0;
  }
  .internation_national {
    display: flex;
    justify-content: center;
    align-items: center;
    .van-icon {
      font-size: 40rem;
    }
  }
}

//国家证书
.national_h5 {
  p {
    text-align: center;
    font-size: 40rem;
  }
  .national_list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: auto 0;
    .national_img {
      flex: 0 0 50%;
      img {
        display: block;
        width: 80%;
        margin: 20rem auto;
      }
    }
    .national_detail {
      width: 80%;
      img {
        width: 100%;
      }
    }
  }
  .national_lists {
    width: 100%;
    margin: auto 0;
    .national_img {
      width: 50%;
      img {
        display: block;
        width: 80%;
        margin: 20rem auto;
      }
    }
    .national_detail {
      width: 80%;

      img {
        width: 100%;
      }
    }
  }
}

.sorft_national {
  .national_list {
    .national_img {
      .van-cell__value {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 25%;
        }
      }
    }
  }
}
//关于我们h5
.footer_h5 {
  width: 90%;
  font-size: 20rem;
  text-align: left;
  margin: 0 auto;
   height: 500rem;
  .footer_main {
    width: 100%;
    height: 100%;
    padding-top: 20rem;
    .footer_main_title {
      font-size: 24rem;
      line-height: 24rem;
      color: #666666;
      margin-bottom: 30rem;
    }
    .footer_main-content {
      width: 100%;
      border-bottom: 2rem solid #e1e1e1;
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          width: 100%;
          margin-bottom: 20rem;
          font-size: 20rem;
          color: #777777;
          line-height: 30rem;
        }
      }
    }
    .footer_main_bottom {
      width: 100%;
      line-height: 30rem;
      text-align: center;
      color: #666666;
      margin: 0 auto;
      margin-top: 20rem;
      margin-bottom: 15rem;
    }
  }
}

//实用案例
.case_class {
  height: 780rem;
  .xin {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;
    .xin_left {
      width: 100%;
      .case_right {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}

* {
  letter-spacing: 1rem;
}
// 下拉组件
.el-dropdown {
  position: relative;
  right: 0px;
  top: 0px;
}
.el-button {
  line-height: 50rem;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 0;
}
.el-button i {
  font-size: 30rem;
}
.el-dropdown-menu,
.el-popper,
.el-dropdown-menu--medium {
  font-size: 30rem;
  display: flex;
  flex-direction: column;
  width: 105%;
  .el-dropdown-menu__item {
    height: 50rem;
    display: flex;
    align-items: center;
  }
  /deep/ .el-dropdown-menu__item span {
    width: 100%;
    height: 100%;
    line-height: 50rem;
    font-size: 30rem;
    padding-left: 50rem;
  }
}

.el-dropdown-menu {
  margin-top: 5rem !important;
}
.sorft{
  width:  80%;
  img{
    width: 100%;
  }
}
</style>