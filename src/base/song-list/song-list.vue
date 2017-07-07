<template>
    <div class="song-list">
        <ul>
            <li @click="selectItem(song,index)" class="item" v-for="(song,index) in songs" :key="index">
                <div class="content">
                    <h2 class="name">{{song.name}}</h2>
                    <p class="desc">{{getDesc(song)}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        songs: {
            type: Array,
            default: []
        }
    },
    methods: {
        selectItem(item,index){
            //派发事件
            this.$emit('select',item,index)
        },
        getDesc(song) {
            return `${song.singer}·${song.album}`
        }
    }
}
</script>
<style lang="less">
@import "../../assets/styles/mixin";
.song-list {
    .item {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 64px;
        font-size: 14px;
        .rank {
            flex: 0 0 25px;
            width: 25px;
            margin-right: 30px;
            text-align: center;
            .icon {
                display: inline-block;
                width: 25px;
                height: 24px;
                background-size: 25px 24px;
                &.icon0 {
                    .bis('../../assets/image/first@2x.png')
                }
                &.icon1 {
                    .bis('../../assets/image/second@2x.png')
                }
                &.icon2 {
                    .bis('../../assets/image/third@2x.png')
                }
            }
        }
        .content {
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            .name {
                white-space: nowrap;
                color: #fff;
            }
            .desc {
                white-space: nowrap;
                margin-top: 4px;
                color: #ccc;
            }
        }
    }
}
</style>
