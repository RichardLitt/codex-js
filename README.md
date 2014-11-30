codex-js
========

A collection of Javascript idiosyncracies and examples.

This is meant to expose many weird oddities of Javascript. It is meant to be all inclusive; if you see something that isn't represented in here, by all means, please add it in. 

A `cli-code.js` file has been provided to enable running this in the command line. Look at the code, or run the functions listed below with the argument options given to see how they perform. 

* `incrementOverNewLine(i, j)`: We would expect that for 
    ```js
    i
    ++
    j
    ```
    `i` would be incremented, and not `j`. However, instead, the js for this is parsed as `i; ++j;`. 