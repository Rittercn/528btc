<template>
    <div v-if="adv" class="flex w-full items-center justify-between w-full relative gg">
        <div class="logo_c flex items-center">
            <img class="rounded-full" src="~/assets/img/adv/logo.png" :alt="$t('adv_title')"/>
            <div class="logo_info ">
                <div class="title">{{ $t('adv_title') }}</div>
                <div class="des">{{ $t('adv_des') }}</div>
            </div>
        </div>
        <div class="text-center open_url">
            {{ $t('adv_open') }}
        </div>
        <img src="~/assets/img/adv/icon_close.png" class="close" alt="close" @click="updateAdv"/>
    </div>
</template>

<script setup>
import { useAdvStore } from '@/store/useAdvStore';
import { computed } from 'vue';

const advStore = useAdvStore();

const adv = computed(() => advStore.adv);

function updateAdv() {
    advStore.updateAdv(false); 
}

</script>

<style lang="scss">
.gg{
    background: #FFD600;
    padding: 1.67rem 2.5rem;
    .logo_c{
        color:#fff;
        img{
            width: 6rem;
            height: 6rem;
            margin-right: 1.33rem;
        }
        .logo_info{
            .title{
                font-weight: 600;
                font-size: 2.57rem;
                color: #FFFFFF;
            }
            .des{
                font-weight: 400;
                font-size: 2rem;
                color: #FFFFFF;
            }
        }
    }
    .open_url{
        width: 10.67rem;
        height: 4.67rem;
        line-height: 4.67rem;
        background: #FFFFFF;
        border-radius: 2.5rem 2.5rem 2.5rem 2.5rem;
        font-weight: 500;
        font-size: 2.33rem;
        color: #1F2028;
    }
    .close{
        width: 2rem;
        height: 2rem;
        position: absolute;
        top:0.5rem;
        right: 0.5rem;
    }
}
</style>