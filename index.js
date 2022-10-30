function combat(health, damage) {
    let status = health - damage
    let currentHealth = status > 0 ? status : 0
    return currentHealth
}