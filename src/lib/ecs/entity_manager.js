export default function(maxEntities) {
    return {
        entities: null,

        maxEntities: maxEntities,
        nextEntityID: 0,
        componentManager: null,

        setComponentManager(componentManager) {
            this.componentManager = componentManager;
        },

        getEntity(eid) {
            return this.entities[eid];
        },

        getEntities() {
            return this.entities;
        },

        addEntity(componentMask) {
            if (this.entities === null)
                this.entities = new Array(this.maxEntities).fill(null);

            let eid = this.nextEntityID;

            this.entities[eid] = componentMask;
            this.nextEntityID++;

            return eid;
        },

        removeEntity(eid) {
            this.componentManager.removeAll(eid);
            this.entities[eid] = null;
        },

        addFlag(eid, mask) {
            this.entities[eid] = this.entities[eid] | mask;
        },

        removeFlag(eid, mask) {
            this.entities[eid] = this.entities[eid] & ~mask;
        }
    }
}