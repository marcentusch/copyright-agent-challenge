# My solution

- Simplified how you select order of your colors. You now choose the order when writing the color names in the command line argument. No need for "true false true ["green", "blue", "red"]. You can also specify if you want it ordered alphabetically, reversed or just default.
- Added argument for format: rgb or hex
- Added argument for sync or async requests to API
- Removed classes since i did not see the need for them
- Simplified code a lot. Split into small pure functions that can easily be tested. At least where it was possible.
- Added types with Typescript

# code-challenge

A code challenge used to assess developers knowledge and skills

### Scenario

A developer has tried to do a task that you must now take over and complete.

The task has been extended with additional requirements after the developer left.

OBS: The API mock must be used and it must not be changed.

### Requirements

- It must be possible to run the program and get back the colors green, blue and red in HEX format.
- It must be possible to define the colors using their names like red, blue and green.
- It must be possible to define the order the colors are returned.

### New additional requirements

- The program must support the colors white and black.
- The program must be able to return the RGB values.
- It must be possible to run the program asynchronously getting all the colors at the same time
- It must be possible to run the program synchronously getting one color a time
