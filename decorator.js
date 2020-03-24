const Decorator = function () {
    this.paintStock = 0
}

Decorator.prototype.addCan = function() {
    this.paintStock++
}

Decorator.prototype.totalLiters = function() {
    return this.paintStock*10
}
module.exports = Decorator