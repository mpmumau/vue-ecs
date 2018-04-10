import EntityManager from './entity_manager'
import ComponentManager from './component_manager'
import SystemManager from './system_manager'

export default function(initializer) {
    return {
        initializer: initializer,

        store: null,
        maxEntities: 32768,

        isInit: false,
        running: true,
        tickCount: 0,
        lastTimestamp: 0,
        delta: 0.0,
        targetFramerate: 1000 / 60,
        updateAttempts: 0,
        maxUpdateAttempts: 100,

        entityManager: null,
        componentManager: null,
        systemManager: null,

        init(store) {
            if (this.isInit)
                return;
            this.isInit = true;

            this.store = store.a; // Why?!?

            this.entityManager = new EntityManager(this.maxEntities);
            
            this.componentManager = new ComponentManager(this.maxEntities, this.entityManager);
            this.entityManager.setComponentManager(this.componentManager);
            
            this.systemManager = new SystemManager(this.entityManager, this.componentManager);
            for (let s = 0; s < this.initializer.systems.length; s++) {
                let system = this.initializer.systems[s];
                system.ecs = this;
                this.systemManager.addSystem(system);
            }

            /* Misc. */
            this.running = true;
            this.delta = 0.0;
            this.updateAttempts = 0;
            this.tickCount = 0;
            this.lastTimestamp = performance.now();
            requestAnimationFrame(this.tick.bind(this));
        },

        stop() {
            this.tickCount = 0;
            this.delta = 0.0;
            this.updateAttempts = 0;
            this.running = false;
        },

        tick(timestamp) {
            if (!this.running)
                return;

            if (timestamp < this.lastTimestamp + this.targetFramerate) {
                requestAnimationFrame(this.tick.bind(this));
                return;
            }

            this.delta += timestamp - this.lastTimestamp;
            this.lastTimestamp = timestamp;

            while (this.delta >= this.targetFramerate) {
                this.updateAttempts++;
                if (this.updateAttempts >= this.maxUpdateAttempts) {
                    this.panic();
                    this.updateAttempts = 0;
                }

                this.update(this.delta);
                this.delta -= this.targetFramerate;
            }
            this.updateAttempts = 0;
            this.tickCount++;

            if (this.store != null && this.store !== 'undefined' && this.store)
                this.store.dispatch('setEntities', this.getEntityMap());

            requestAnimationFrame(this.tick.bind(this));
        },

        update(delta) {
            this.systemManager.tick(delta);
        },

        panic() {
            this.delta = 0;
        },

        addEntity(componentMask = 0x00) {
            return this.entityManager.addEntity(componentMask);
        },

        removeEntity(eid) {
            this.entityManager.removeEntity(eid);
        },

        addComponent(eid, component) {
            this.componentManager.addComponent(eid, component);
        },

        getEntities() {
            return this.entityManager.getEntities();
        },

        getEntityMap() {
            let entities = this.entityManager.getEntities();
            if (entities == null)
                return;

            let entityMap = new Array();

            for(let eid = 0; eid < entities.length; eid++) {
                if (entities[eid] == null)
                    continue;

                let componentArray = [];
                let componentBundle = this.componentManager.getComponentBundle(eid, entities[eid]);
                componentBundle.forEach((val, key) => {
                    componentArray.push({
                        mask: key,
                        data: val
                    })
                });

                entityMap.push({
                    eid: eid,
                    components: componentArray
                });
            }

            return entityMap;
        },

        getComponentBundle(eid, mask) {
            return this.componentManager.getComponentBundle(eid, mask);
        },

        getComponent(eid, mask) {
            return this.componentManager.getComponent(eid, mask);
        }
    }
}