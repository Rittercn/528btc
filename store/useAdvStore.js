import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAdvStore = defineStore('adv', () => {
    const adv = ref(true); 

    function updateAdv(value) {
        adv.value = value;
    }

    return { adv, updateAdv };
});
