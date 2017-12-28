<template>
  <div>
    <v-topRoute/>
    <!-- <div>
  <div>语种
    <span v-for="item in lang">
          {{item}}
        </span>
  </div>
  <div>筛选
    <span v-for="item in 26"> 
          {{String.fromCharCode(64+item)}}
        </span>
  </div>
</div>
 -->
    <v-loading v-show="this.songsList.length === 0"></v-loading>
    <div class="songs-wrapper">
      <div v-for="item in songsList" :key="item.id" @click='detail(item.id)' class="everysong">
        <div class="ever-pic">
          <img v-lazy="item.picUrl" style="width:100%"></img>
        </div>
        <div>
          {{item.name}}
        </div>
      </div>
    </div>
    <div>
      <div v-if="this.more" v-on:click="loadMore" class="more">查看更多</div>
      <div v-else class="more">没有了</div>
    </div>
  </div>
</template>
<script>
import loading from '@/base/loading';
import topRoute from '@/base/topRoute';

import api from '../api';

const getSongsList = api.forvue.getSongsList;
const language = ['全部', '欧美', '日本', '韩国', '其他'];
export default {
  data() {
    return {
      page: 0,
      offset: 30,
      songsList: [],
      more: true,
      lang: language,
    };
  },
  mounted() {
    this.get(this.page);
  },
  methods: {
    loadMore() {
      if (!this.more) {
        return;
      }
      this.page += 1;
      this.get(this.page * this.offset);
    },
    get(page) {
      getSongsList(page).then((res) => {
        if (res.data.code === 200) {
          this.songsList = this.songsList.concat(res.data.artists);
          this.more = res.data.more;
          console.log(res.data);
        } else {
          return;
        }
      });
    },
    detail(id) {
      // const id = event.currentTarget.dataset.id;
      const tab = 'B';
      this.$router.push({ path: 'applist', query: { id, tab } });
      console.log(id);
    },
  },
  components: {
    'v-loading': loading,
    'v-topRoute': topRoute,
  },
};

</script>
<style lang="scss">
.songs-wrapper {
  min-width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .everysong {
    margin: 10px 10px;
    .ever-pic {
      width: 150px;
      height: 130px;
    }
  }
}

.more {
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: red;
  }
}

</style>
