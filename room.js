const Room = function (length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.paintedAmount = 0
}

Room.prototype.squareMeters = function() {
    answer =  this.length * this.width * this.height
    return answer
}




module.exports = Room