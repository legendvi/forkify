# A recipe app with Vanila Javasript


## Forkify
To Visit App:
https://forkifyvicky.netlify.app/
# Table of contents
- [Title](#markdown-badges)
- [Table of contents](#table-of-contents)
- [Description](#Description)
- [Project assmed requirements](#project-assumed-requirements)
- [Installation and Setup Instructions](#installation-and-setup-instruction)
- [Reflection](#Reflection)
  
## Description:
This is a Recipe finder App which gives you a recipe for the food item searched
- This App is made using vanila ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E), [Hosting/SaaS](#-hostingsaas) and ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- This app is a frontend Application with two APIs.
-  A `GET` api integration to get a list of dishes and recipe that matches the serach term
- A `POST` api to add new recipe
- The Recipe can be bookmarked and bookmarked recipe are shown even after refresh of browser window using `Local Storage`
- This app is bundled using `parcel` and deployed in [Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)  


## Project Assumed Requirements:
1. It should be a functional App with only single page 
   - This was a little tricky as the app has to three features Get a list of recipes,add a new recipe,bookmark a recipe, and view a single recipe
   - It is designed to have a header where user can search, and the page is divided in two flex, one showing the list and other showing the details once a item is selected
   - To create a recipe and bookmark a recipe Modal is used 
2. The Bookmarks should be preserved in case browser reloads
   - This is achived by storing all bookmarked recipes IDs in `Local Storage` 
3. Make CSS 
   - This project used  ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) and used its in build media query attributes to make it mobile frienddly
4. It should be accessable in all browsers and should be production ready
   - This is achived using `parcel` as a bundler to covert ES6 code and generate  a optimized build which is deployed in [Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) a static website hosting platform

      


## Project Screen Shot(s):
Intial Page:
![Screenshot 2023-10-23 111301](https://github.com/legendvi/forkify/assets/41253273/c5406ddc-22cc-4b44-bc70-9d9ffa3a7fb1)

Serach Reesults:
![Screenshot 2023-10-23 111319](https://github.com/legendvi/forkify/assets/41253273/a6111795-fa8e-4d79-9d07-f0b68a7459d8)

View Recipe:
![Screenshot 2023-10-23 111350](https://github.com/legendvi/forkify/assets/41253273/b793af56-f7d2-45d0-a038-bfde9814502d)

Bookmarks:
![Screenshot 2023-10-23 111350](https://github.com/legendvi/forkify/assets/41253273/c0cda359-5776-4a8c-8cca-b63c89ef70a4)

Add Recipe:
![Screenshot 2023-10-23 111358](https://github.com/legendvi/forkify/assets/41253273/b085e6ed-e710-437c-871c-e703bb34c07f)



## Installation and Setup Instructions:
  
Clone down this repository. You will `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`open index.html in browser` 

## Reflection:

I started this project as I started learing `React` in Cognizant because I wanted to better learn how `Vanila Javasrip`t with `html` and `CSS` preprocessors

It was a two week long project, I particulary hit a block when the list of items required pagination to display, it was little tricky using only `CSS`, and `JS`

 Forkify helped me learn how to build a functiona web application using simple html, CSS, and Javascript and to understand how javscript works which is the  the language most web frameworks like `React`, `Angular`, `Vue` are build upon

 


