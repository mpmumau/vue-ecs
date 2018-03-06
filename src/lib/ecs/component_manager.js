import { MaskUtils } from './MaskUtils.js'

export default function(maxEntities, entityManager) {
    return {
        maxEntities: maxEntities,
        entityManager: entityManager,

        components: new Map(),

        addComponent(eid, component) {
            let mask = component.mask;
            delete component.mask;
            
            if (!this.components.has(mask))
                this.components.set(mask, new Array(this.maxEntities));

            this.components.get(mask)[eid] = component;

            this.entityManager.addFlag(eid, mask);
        },

        removeAll(eid) {
            this.components.forEach((val, key) => {
                val[eid] = null;
            });
        },

        removeComponent(eid, mask) {
            this.components.get(mask)[eid] = null;
        },

        getComponent(eid, mask) {
            if (!this.components.has(mask))
                return null;

            return this.components.get(mask)[eid];
        },

        getComponentBundle(eid, mask) {
            let componentBundle = new Map();

            this.components.forEach((val, key) => {
                if (MaskUtils.matchesAny(key, mask)) {
                    componentBundle.set(key, val[eid]);
                }
            });

            return componentBundle;
        },

        getAll() {
            return this.components;
        }
    }
}