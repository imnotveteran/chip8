const { CpuInterface } = require('./CpuInterface')

class MockCpuInterface extends CpuInterface {
  // Mock derived CPU interface for testing
  constructor() {
    super()

    this.soundEnabled = false
    this.display = []

    // Create a two-dimensional array of 0s for display
    // 0 represents pixel off, 1 represents pixel on
    for (let i = 0; i < 32; i++) {
      this.display.push([])
      for (let j = 0; j < 64; j++) {
        this.display[i].push(0)
      }
    }
  }

  showDisplay() {
    // Mock display
    let grid = ''
    this.display.forEach((row, x) => {
      row.forEach((col, y) => {
        grid += this.display[x][y]
      })
      grid += '\n'
    })

    console.log(grid)
  }

  clearDisplay() {
    console.log('Screen is cleared')
  }

  waitKey() {
    // Will wait until key press and return one key
    return 5
  }

  getKeys() {
    // Will return bitmask of all keys set
    return 0b0000000000011101 // 0, 2, 3, 4 example
  }

  drawPixel(x, y, value) {
    // If collision, will return true
    const collision = this.display[y][x] & value
    // Will XOR value to position x, y
    this.display[y][x] ^= value

    return collision
  }

  enableSound() {
    this.soundEnabled = true
  }

  disableSound() {
    this.soundEnabled = false
  }
}

module.exports = {
  MockCpuInterface,
}
