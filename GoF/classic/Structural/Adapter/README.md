# Synopsis

I have some amazing photos on my computer that I would like to display using my old projector. But my PC uses HDMI and my projector uses VGA.

# Problem

HDMI and VGA are not compatible interfaces. HDMI can handle images and sound through a digital signal whereas VGA can only handle images through an analog signal.

# Solution

Adapter is a well-known solution in this kind of situation. We need:
    
  * Abstract representations (generally interfaces) of the problem. Here we easily see that a digital interface is not compatible with an analog one.
  * Concrete implementations of these abstractions: e.g. HDMIToVGAAdapter & VGA. Here the adapter should be able to delegate some work to the adapted entity.

![Adapter (classic)](Adapter.png)
