export class maskUtils {
    Masks = {
        MessagingComponent: 0x01 << 0,
        TransformComponent: 0x01 << 1,
        StyleComponent: 0x01 << 2
    }

    matches(authority, mask) {
        return authority == (authority & mask);
    }

    matchesAny(authority, mask) {
        return (authority & mask) != 0x00;
    }
}

export let MaskUtils = new maskUtils();