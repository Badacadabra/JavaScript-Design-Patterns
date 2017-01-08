# Synopsis

I have some amazing photos on my computer that I would like to display using my old projector. But my PC uses HDMI and my projector uses VGA.

# Problem

HDMI and VGA are not compatible interfaces. HDMI can handle images and sound through a digital signal whereas VGA can only handle images through an analog signal.

# Solution

Adapter is a well-known solution in this kind of situation. Here we need very few things:

  * An object (literal) that represents the VGA connection
  * An object (literal) that represents the HDMI to VGA adapter

The latter must have a reference to the first one and must be the entry point of the module. Then the main method of the adapter will delegate some work to the main method of the VGA connection.
