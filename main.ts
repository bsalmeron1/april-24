function right () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P1, 90)
}
function left () {
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P1, 0)
}
function stop () {
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
}
input.onButtonPressed(Button.A, function () {
    forward()
    basic.pause(1000)
    left()
    basic.pause(1000)
    right()
    basic.pause(1000)
    stop()
})
function backwards () {
    pins.servoWritePin(AnalogPin.P0, 0)
    pins.servoWritePin(AnalogPin.P1, 180)
}
function forward () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P1, 0)
}
basic.forever(function () {
	
})
