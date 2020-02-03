var ws281x = require('rpi-ws281x');
var rgb2hex = require('rgb2hex');

class Example {

  constructor() {
    this.config = {};

    // Number of leds in my strip
    this.config.leds = 169;

    // Use DMA 10 (default 10)
    this.config.dma = 10;

    // Set full brightness, a value from 0 to 255 (default 255)
    this.config.brightness = 255;

    // Set the GPIO number to communicate with the Neopixel strip (default 18)
    this.config.gpio = 18;

    // The RGB sequence may vary on some strips. Valid values
    // are "rgb", "rbg", "grb", "gbr", "bgr", "brg".
    // Default is "rgb".
    // RGBW strips are not currently supported.
    this.config.strip = 'grb';

    // Configure ws281x
    ws281x.configure(this.config);
  }

  async init() {
    console.log(1);
    await sleep(1000);
    console.log(2);
  }

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  convert(r, g, b) {
    return rgb2hex(`rgb(${r},${g},${b})`).hex.replace('#', '0x');
  }
  run() {
    // Create a pixel array matching the number of leds.
    // This must be an instance of Uint32Array.
    var pixels = new Uint32Array(this.config.leds);

    // Create a fill color with red/green/blue.
    var red = 255, green = 0, blue = 0;
    // var color = (red << 16) | (green << 8) | blue;
    // var color = this.convert(230, 32, 90);

    // while (true) {
      for (let c = 0; c < 255; c++) {
        for (var i = 0; i < this.config.leds; i++) {
          pixels[i] = this.convert(230, c, 90);
        }
        ws281x.render(pixels);
        // this.sleep(5000);
      }
    // }
  }

};

class Another {

  constructor() {
    this.config = {};

    // Number of leds in my strip
    this.config.leds = 169;

    // Use DMA 10 (default 10)
    this.config.dma = 10;

    // Set full brightness, a value from 0 to 255 (default 255)
    this.config.brightness = 255;

    // Set the GPIO number to communicate with the Neopixel strip (default 18)
    this.config.gpio = 18;

    // The RGB sequence may vary on some strips. Valid values
    // are "rgb", "rbg", "grb", "gbr", "bgr", "brg".
    // Default is "rgb".
    // RGBW strips are not currently supported.
    this.config.strip = 'grb';

    // Configure ws281x
    // ws281x.configure(this.config);
  }

  async init() {
    console.log(1);
    await sleep(1000);
    console.log(2);
  }

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  convert(r, g, b) {
    return rgb2hex(`rgb(${r},${g},${b})`).hex.replace('#', '0x');
  }
  run() {
    // Create a pixel array matching the number of leds.
    // This must be an instance of Uint32Array.
    var pixels = new Uint32Array(this.config.leds);

    // Create a fill color with red/green/blue.
    var red = 255, green = 0, blue = 0;
    // var color = (red << 16) | (green << 8) | blue;
    // var color = this.convert(230, 32, 90);

    // while (true) {
        for (var i = 0; i < this.config.leds; i++) {
          pixels[i] = this.convert(0, 0, 230);
        }
        ws281x.render(pixels);
    // }
  }

};

var example = new Example();
example.run();

var another = new Another();
another.run();