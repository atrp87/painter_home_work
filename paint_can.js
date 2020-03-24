const PaintCan = function (liters) {
    this.liters = liters;
}

PaintCan.prototype.removePaint = function(paintUsed) {
    this.liters = this.liters - paintUsed
}

PaintCan.prototype.emptyCan = function() {
    this.liters = this.liters - this.liters
}


module.exports = PaintCan