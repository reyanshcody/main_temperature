c = input.temperature()
min2 = input.temperature()
max2 = input.temperature()

def on_forever():
    global c
    c = input.temperature()
basic.forever(on_forever)

def check(current: number, min3: number, max3: number):
    pass