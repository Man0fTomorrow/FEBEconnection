to start, you need two seperate console windows open. One for the backend and one for the frontend.

-cd into the server folder and run npm install

-cd into the my-react-app folder and run npm install

-cd into the server and run npm run dev

-cd in the may folder and run npm run dev

open the browser to visit the VITE site on localhost:5173

its ugly but functions. All the data displayed is pulled from a json file stored in the server folder. You can type a message in the bottom, send it, and it will go back to the server. You can look on the console window running that, and the incoming message will be displayed. The messages are pulled using UseEffect, which means that the new messages will not show until you refresh. If you're seeing the API calls run twice when you only ran it once, its because when React is using React.strictmode in the main.jsx file on the FE, it runs the API calls twice for visibility during development. Take it out of strict mode to get rid of that. 
