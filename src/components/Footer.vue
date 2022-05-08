<script>
export default {
  name: "Footer",
};
</script>

<template>
<footer class = "text-white p-3">
  <div class = "d-flex justify-content-around">
    <p>&copy; Al-Qur'an Ku</p>
    <p>Design and Build with &hearts; By Alif Alfarabi.B</p>
  </div>
</footer>
</template>


<style scoped>
footer{
  font-family: Roboto;
  background: linear-gradient(45deg,#85586F, #AC7D88);
  animation: hue-rotate 2s linear infinite alternate;
  border-color: white;
}
@keyframes hue-rotate {
  to{filter: hue-rotate(90deg);}
}
</style>