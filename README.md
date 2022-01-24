### Objective
I set out thinking I was a clever little guy. I had an excellent idea to match the word that appears to one of two images. I decided to use React and imported a library (interactjs) to interact with the text and images while looking to include a button that would allow a reset of the application.

### What Went Wrong
Having never used interactjs before there were a few issues I struggled to overcome. Firstly, the dropzone appears to be activating 8 times on drop. When pressing reset multiple times and dropping the word on an image again the number increases. I'm not too sure of the nature of this bug, but I think it has something to do with the fact that interactjs is created for vanilla JS not React. My guess is that it has something to do with how React re-renders after the reset button is clicked.

Next, there was a 'bug' (I hadn't implemented it, ran out of time :/ ) with the reset button where the text wouldn't return to it's original position.

Finally, I couldn't quite think of way to implement the drag being over the correct dropzone. Maybe in time I could've figured it out, but it didn't come to me quickly.

### Improvements
Overtime I would fix these bugs, add in some more options and add more sounds too.