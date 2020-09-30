# water-plant-demo

(MVP)

STATE:
- Ounces of water

VIEW DERIVED FROM STATE:
- plant health copy
- picture of plant
- the ounces counter

HTML ELEMENTS WE NEED:
- Indepenent Content (don't change based on state): instructions, etc
- Button
    - Why? On click, increase the ounces (IN STATE) and update the DOM accordingly
- Image 
    - Why? Show a different image as the plant health changes
- Span/Div/Section (for ounces)
    - Why? Display ounces as they change
- Span/Div/Section (for message)
    - Why? Display different message as ounces change
- Reset button 
    - Why? On click, reset the game

On button click: 
1) Increment the ounces in state
    - Update the DOM as state changes
1) Check if the current ounces has reached a certain threshold. If so:
    1) Image changes
    1) Plant health message changes
1) If it's greater than 30 ounces, reset the game
    1) Set the state of ounces back to 0
    1) Reset the DOM elements to their initial state
