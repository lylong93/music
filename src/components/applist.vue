<template>
  <div class="applist" v-if='this.list'>
    <v-appListHead :tab=this.tab :list='this.list'></v-appListHead>
    <v-appListMain :tab=this.tab :list='this.list'></v-appListMain>
  </div>
</template>
<script>
import appListHead from '@/components/appListHead';
import appListMain from '@/components/appListMain';
import api from '../api';

export default {
  data() {
    return {
      msg: 'one',
      list: {},
      d: null,
      haveAdd: false,
      tab: '',
    };
  },
  created() {
    this.init();
    // console.log(this.list);
  },
  computed() {},
  watch: {
    list() {
      this.haveAdd = false; // 已经添加到列表
    },
  },
  methods: {
    init() {
      const id = this.$route.query.id;
      const tab = this.$route.query.tab;
      api.forvue.getAppList(id).then((res) => {
        this.list = res.data.playlist;
        this.tab = tab;
        console.log(this.list);
      });
    },
    addclass(event, index) {
      this.d = index;
    },
  },
  components: {
    'v-appListHead': appListHead,
    'v-appListMain': appListMain,
  },
};

</script>
<style lang='scss'>
// .applist {
//   .applist-main {
//     .applist-main-head {
//       height: 30px;
//       padding: 0 30px;
//       border-bottom: 1px solid rgb(203, 61, 61);
//       .a-m-h-tab {
//         float: left;
//         display: inline-block;
//         width: 100px;
//         line-height: 30px;
//         text-align: center;
//         margin: 0 3px;
//         background: rgb(203, 61, 61);
//         color: rgb(255, 255, 255);
//       }
//     }
//     .evreylist {
//       width: 1000px;
//       margin: 0 auto;
//       border-collapse: collapse;
//       .el-th {
//         border: 1px solid black;
//         border-top: none;
//         &:first-child {
//           border-left: none;
//         }
//         &:last-child {
//           border-right: none;
//         }
//       }
//       tr {
//         &:nth-child(odd) {
//           background: rgba(128, 128, 128, .15);
//         }
//         &:first-child {
//           background: rgb(255, 255, 255);
//         }
//       }
//     }
//     .light {
//       background: yellow;
//     }
//   }
// }

</style>
