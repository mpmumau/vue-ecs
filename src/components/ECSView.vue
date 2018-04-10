<template>
    <div>
        <div class='scene-data'>
            Amount of entities: {{ entityAmt }}
        </div>
        <div class="scene-wrapper">
            <Entity v-for="(entity, id) in this.entities" :data-eid="entity.eid" :key="entity.eid" :styleobj="entity.style" :eid="entity.eid" :entitydata="entity">
                ENTITY
            </Entity>
        </div>
    </div>
</template>

<script>
import Entity from "@/components/Entity.vue"

export default {
    methods: {
        ecsInit() {
            this.$store.dispatch('init');
        },
        addEntity() {
            this.$store.dispatch('addEntity');
        },
        ecsStop() {
            this.$store.dispatch('stopEcs');
        }
    },
    computed: {
        entities() {
            return this.$store.getters.entities;
        },
        entityAmt() {
            return this.$store.getters.entities.length;
        }

    },
    components: {
        Entity,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.scene-wrapper {
    background-color: black;
    width: 1024px;
    height: 768px;
    position: relative;
    margin: 0 auto;
    margin-top: 15px;
    overflow: hidden;
}

.scene-data {
    margin-top: 15px;
    font-size: 24px;
}
</style>
