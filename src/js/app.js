export default function healthCounter(characther) {
    if (characther.health < 15 ) {
        return "critical"
    } else if (characther.health < 50) {
        return "wounded"
    } else if (characther.health > 50) {
        return "healthy"
    }
}