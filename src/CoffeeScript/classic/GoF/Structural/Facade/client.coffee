'use strict'

HowToFeedAnimals = require './API/HowToFeedAnimals'

# ==============================
# CLIENT CODE
# ==============================

facade = new HowToFeedAnimals

console.log facade.feedAnimals()
