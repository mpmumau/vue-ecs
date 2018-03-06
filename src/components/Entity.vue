<template>
    <div class='entity' v-bind:style="styleobj" :data-eid="eid">
    </div>
</template>

<script>
    import { MaskUtils } from '../lib/ecs/MaskUtils'

    export default {
        props: [
           'eid',
           'entitydata'
        ],

        computed: {
            styleobj: function() {
                for(let c = 0; c < this.entitydata.components.length; c++) {
                    if (MaskUtils.matchesAny(this.entitydata.components[c].mask, MaskUtils.Masks.StyleComponent)) {
                        return this.entitydata.components[c].data.style;
                    }
                }
            }
        },

    }
</script>

<style scoped>
.entity {
    border-radius: 5px;
}
</style>