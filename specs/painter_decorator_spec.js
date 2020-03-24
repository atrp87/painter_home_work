const assert = require('assert')
const Decorator = require('../decorator')
const Room = require('../room')
const PaintCan = require('../paint_can')


    describe('painter decorator', function() {
    describe('room', function(){

           
        let room;

        this.beforeEach(function() {
            room = new Room( 5, 6, 2 );
        });

        it('should have an area in square meters', function () {
            const actual = room.squareMeters();
            assert.strictEqual( actual, 60);
        });
    
        it('should start not being painted', function() {
            const actual = room.paintedAmount;
            assert.strictEqual(actual, 0)
        });

        it('should be able to be painted', function() {
            room.paintedAmount = 10
            const actual = room.paintedAmount;
            assert.strictEqual(actual, 10)
        });
    });
     describe('paint can', function(){
         
        let paintCan

        beforeEach(function() {
            paintCan = new PaintCan(10) 
        });
        it('should have a number of liters of paint', function () {
         const actual = paintCan.liters
         assert.strictEqual(actual, 10) 
        });
        it('should be able to check if it is empty', function() {
            paintCan.removePaint(5)
            const actual = paintCan.liters
            assert.strictEqual(actual, 5)
        })
        it('should be able to empty itself of paint', function() {
            paintCan.emptyCan()
            const actual = paintCan.liters
            assert.strictEqual(actual, 0)
        })
     });

     describe('decorator', function() {

        let decorator

        beforeEach(function () {
            decorator = new Decorator()
        })

        it('should start with an empty paint stock', function() {
            const actual = decorator.paintStock
            assert.strictEqual(actual, 0)
        })

        it('should be able to add a can of paint to paint stock', function() {
            decorator.addCan()
            const actual = decorator.paintStock
            assert.strictEqual(actual, 1)
        })

        it('should be able to calculate total liters in stock', function() {
            decorator.addCan()
            decorator.addCan()
            const actual = decorator.totalLiters()
            assert.strictEqual(actual, 20)
        })

        it('should be able to calculate wether it has enough paint to paint a room', function() {
            decorator.addCan()
            decorator.addCan()
            let room = new Room(5, 6, 2)
            const actual = room.squareMeters() < decorator.totalLiters()
            assert.strictEqual(actual, false)
        })

        it('should be able to paint room if has enough paint in stock', function() {
            decorator.addCan()
            decorator.addCan()
            decorator.addCan()
            decorator.addCan()
            decorator.addCan()
            decorator.addCan()
            decorator.addCan()
            let room = new Room(5, 6, 2)
            const actual = room.squareMeters() < decorator.totalLiters()
            assert.strictEqual(actual, true)
        })

     })
    });