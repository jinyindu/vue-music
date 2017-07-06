<template>
    <div id="header">
        <div class="icon"></div>
        <h1 class="text">Chicken Music</h1>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/mixin";

#header {
    position: relative;
    height: 44px;
    text-align: center;
    color: @fellow;
    font-size: 0;
    .icon {
        display: inline-block;
        vertical-align: top;
        margin-top: 6px;
        width: 30px;
        height: 32px;
        margin-right: 9px;
        .bis('../../assets/image/default.png');
        background-size: 30px 32px;
    }
  .text{
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    .fontSize(18px,@fellow);
  }
}

</style>
