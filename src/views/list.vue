<template>
     <div class='box'>
        <ul>
          <template v-for="(item,i) in list">
            <li :key="i">
              <img class="imgbox" :src="item.travelInfoImage" alt="" >
              
              <div class="content">
                <p class="text2">{{item.travelInfoTitle}}</p>
                <div>
                  <span>{{item.travelInfoAuthor}}</span>
                  <span>{{item.travelInfoReleaseDate}}</span>
                </div>
              </div>
            </li>
          </template>
        </ul>
     </div>
</template>

<script>
export default {
  props: {
 
  },
  data () {
    return {
        list:[
        {
            score: 0,
            travelInfoAuthor: "晋城文旅",
            travelInfoId: "149682",
            travelInfoImage: "https://pics.lvjs.com.cn/uploads/pc/place2/information/2019-06-28/information_1601204709827.jpg",
            travelInfoReleaseDate: "2020-09-27",
            travelInfoTitle: "市文化和旅游局开展中秋国庆节前廉政提醒谈话"
        },
        {
            score: 0,
            travelInfoAuthor: "晋城文旅",
            travelInfoId: "149682",
            travelInfoImage: "https://pics.lvjs.com.cn/uploads/pc/place2/information/2019-06-28/information_1601204709827.jpg",
            travelInfoReleaseDate: "2020-09-27",
            travelInfoTitle: "市文化和旅游局开展中秋国庆节前廉政提醒谈话"
        },{
            score: 0,
            travelInfoAuthor: "晋城文旅",
            travelInfoId: "149682",
            travelInfoImage: "https://pics.lvjs.com.cn/uploads/pc/place2/information/2019-06-28/information_1601204709827.jpg",
            travelInfoReleaseDate: "2020-09-27",
            travelInfoTitle: "市文化和旅游局开展中秋国庆节前廉政提醒谈话"
        },{
            score: 0,
            travelInfoAuthor: "晋城文旅",
            travelInfoId: "149682",
            travelInfoImage: "https://pics.lvjs.com.cn/uploads/pc/place2/information/2019-06-28/information_1601204709827.jpg",
            travelInfoReleaseDate: "2020-09-27",
            travelInfoTitle: "市文化和旅游局开展中秋国庆节前廉政提醒谈话"
        },{
            score: 0,
            travelInfoAuthor: "晋城文旅",
            travelInfoId: "149682",
            travelInfoImage: "https://pics.lvjs.com.cn/uploads/pc/place2/information/2019-06-28/information_1601204709827.jpg",
            travelInfoReleaseDate: "2020-09-27",
            travelInfoTitle: "市文化和旅游局开展中秋国庆节前廉政提醒谈话"
        },
        ]
    }
  },
  components: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
 
  },
  computed: {

  },
  watch: {

  }
}
</script>

<style scoped >
.box{
  padding: 10px;
}
      li{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 16px 0px 20px;
        border-bottom: 1px solid rgba(221,221,221,0.6);
      }
       li >.imgbox{
          width: 80px;
          height: 80px;
          background: black;
          border-radius: 5px;
          overflow: hidden;
          position: relative;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
       li >.content{
          flex: 1;
          position: relative;
          min-height: 80px;
          overflow: hidden;
          padding-left: 10px;
       }
         .content> p{
            font-size: 15px;
            line-height: 23px;
            margin-bottom: 23px;

          }
         .content >div{
            color: #999;
            font-size: 11px;
            line-height: 12px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
         }
            .content >div >span:first-child{
              margin-right: 15px
            }
            .content >div >span:last-child{

            }
          
        

      
      li:last-child{
        border: none;
      }
    
</style>
