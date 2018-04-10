import Vue from 'vue'
import Vuex from 'vuex'
import ECS from './lib/ecs/ecs'

import MessagingComponent from '@/lib/ecs/components/messaging_component'
import TransformComponent from '@/lib/ecs/components/transform_component'
import StyleComponent from '@/lib/ecs/components/style_component'

import StyleSystem from '@/lib/ecs/systems/style_system'
import MessagingSystem from '@/lib/ecs/systems/messaging_system'
import MovementSystem from '@/lib/ecs/systems/movement_system'

Vue.use(Vuex)

/* Set up systems */
let initializer = {
    systems: [
        new MessagingSystem(),
        new MovementSystem(),
        new StyleSystem()
    ]
}

var ecs = new ECS(initializer);

export const store = new Vuex.Store({
    state: {
        entities: [],
    },
    getters: {
        entities: state => {
            return state.entities;
        },
    },
    mutations: {
        initEcs: () => {
            ecs.init(this);

            let createEntityLoop = function() {
                for (let x = 0; x < 10; x++) {
                    let eid = ecs.addEntity();

                    let messagingComponent = new MessagingComponent();
                    let transformComponent = new TransformComponent();
                    let styleComponent = new StyleComponent();

                    ecs.addComponent(eid, messagingComponent);
                    ecs.addComponent(eid, transformComponent);
                    ecs.addComponent(eid, styleComponent);
                }
            }

            createEntityLoop();
            setInterval(createEntityLoop, 500);
        },
        addEntity: () => {
            for (let x = 0; x < 20; x++) {
                let eid = ecs.addEntity();

                let messagingComponent = new MessagingComponent();
                let transformComponent = new TransformComponent();
                let styleComponent = new StyleComponent();

                ecs.addComponent(eid, messagingComponent);
                ecs.addComponent(eid, transformComponent);
                ecs.addComponent(eid, styleComponent);
            }
        },
        setEntities: (state, entities) => {
            if (entities === 'undefined' || entities == null || entities.length < 1)
                return;

            state.entities = entities;
        },
        stopEcs: () => {
            ecs.stop();
        }
    },
    actions: {
        init: (context) => {
            context.commit('initEcs');
        },
        addEntity: (context) => {
            context.commit('addEntity');
        },
        setEntities: (context, entities) => {
            context.commit('setEntities', entities);
        },
        stopEcs: (context) => {
            context.commit('stopEcs');
        }
    }
})

