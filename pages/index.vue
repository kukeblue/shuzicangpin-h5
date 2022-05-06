<template>
   <div class="home-page">
       首页
   </div>
</template>

<script>
export default {
    layout: 'noLoginLayout', // you can set a custom layout for the error page
    data() {
       return {
           
       }
    },
    methods: {
        
    },
    destroyed() {
        clearTimeout(this.timer);
    }
};
</script>

<style>
.home-page {
    font-size: 1rem;
}
</style>
