import{_ as l,F as c,N as u,e as o,f as s,r,o as p,c as _,a as n,g as e,t as f,b as d}from"./index.b4a18678.js";const m={components:{Footer:c,NavBar:u},data(){return{error:!1,loading:!0,info:"",surah:o([]),infosurah:o([])}},mounted(){this.getSurah(),this.getInfoSurah()},methods:{getSurah(){s.get("https://api.quran.com/api/v4/chapters/"+this.$route.params.id).then(t=>{this.surah=t.data.chapter}).catch(t=>{console.log(t),this.error=!0}).finally(()=>this.loading=!1)},getInfoSurah(){s.get("https://api.quran.com/api/v4/chapters/"+this.$route.params.id+"/info/?language=67").then(t=>{this.infosurah=t.data.chapter_info,this.info=this.infosurah.text}).catch(t=>{console.log(t),this.error=!0}).finally(()=>this.loading=!1)}}},g={class:"text-center"},v=e("br",null,null,-1),x=e("br",null,null,-1),S=e("br",null,null,-1),B=["innerHTML"];function N(t,F,b,$,a,y){const i=r("NavBar"),h=r("Footer");return p(),_(d,null,[n(i),e("div",g,[v,x,S,e("h1",null,"Surah "+f(a.surah.name_complex),1),e("p",{innerHTML:a.info},null,8,B)]),n(h)],64)}var k=l(m,[["render",N]]);export{k as default};
