'use strict'

Walker = require './API/Walker'
Runner = require './API/Runner'
Swimmer = require './API/Swimmer'

# ==============================
# CLIENT CODE
# ==============================

walker = new Walker
runner = new Runner
swimmer = new Swimmer

walker.setNextRelay runner
runner.setNextRelay swimmer

console.log walker.go()
