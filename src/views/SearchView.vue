<script>
import { ref } from "vue";
import axios from "axios";

export default {
  data(){
    return {
      error: false,
      loading: true,
      info: '',
      surah: ref([]),
      infosurah: ref([]),
      audiosurah: ref([])
    }
  },
  mounted() {
    this.getSurah()
    this.getInfoSurah()
    this.getaudioSurah()
  },
  methods: {
    getSurah(){
      axios.get('https://api.quran.com/api/v4/chapters/' + this.$route.params.id)
          .then(response =>
          {
            this.surah = response.data.chapter
          })
          .catch(error =>
          {
            console.log(error)
            this.error = true
          })
          .finally(() => this.loading = false)
    },
    getInfoSurah(){
      axios.get('https://api.quran.com/api/v4/chapters/' + this.$route.params.id + '/info')
          .then(response =>
          {
            this.infosurah = response.data.chapter_info
            this.info = this.infosurah.text
          })
          .catch(error =>
          {
            console.log(error)
            this.error = true
          })
          .finally(() => this.loading = false)
    },
    getaudioSurah(){
      axios.get('https://api.quran.com/api/v4/chapter_recitations/1')
      .then(response => {
        this.audio = response.data.
      })
    }
  }
}
</script>
<template>

</template>



<style scoped>

</style>