# ==============================
# ABSTRACT STATE
# ==============================

class ComputerState
    constructor: ->
        throw new Error "You cannot instantiate an abstract class!" if @constructor is ComputerState

    power: (pc) -> 
        throw new Error "You cannot call an abstract method!"

# ==============================
# CONCRETE STATES 
# ==============================

class Off extends ComputerState
    power: (pc) -> 
        pc.setCurrentState pc.getStates().on

class On extends ComputerState
    power: (pc) -> 
        pc.setCurrentState pc.getStates().off

# ==============================
# CONCRETE CONTEXT
# ==============================

class Computer
    constructor: ->
        @_currentState = null
        @_states =
            off: new Off
            on: new On

    power: ->
        @_currentState.power(@) 

    getCurrentState: ->
        @_currentState

    setCurrentState: (state) ->
        @_currentState = state

    getStates: ->
        @_states

# ==============================
# CLIENT CODE
# ==============================

pc = new Computer

pc.setCurrentState pc.getStates().off

console.log pc.getCurrentState().constructor.name # Off
pc.power()
console.log pc.getCurrentState().constructor.name # On
pc.power()
console.log pc.getCurrentState().constructor.name # Off
