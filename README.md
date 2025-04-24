# README
-Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
-Why did the backend use a NoSQL MongoDB database?

In this project I used three different approaches for the front end. First, I built static HTML pages with Express and Handlebars. These pages render on the server and deliver complete HTML for each route. Next, I added JavaScript on the client side to to help the templates. Finally, I built an Angular single‑page application for the admin interface. The SPA loads once and then uses client‑side routing and reactive forms for a smoother experience. On the back end I chose MongoDB because it stores data as flexible JSON‑like documents. That model fits our travel packages and customer data without forcing a strict table schema. MongoDB also scales easily when the number of trips or users grows.

-How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
-Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is a data format, not a programming language. JavaScript is what runs in the browser or on Node.js. We use JSON to move data between the server and the client, and JavaScript displays the data. Early in the project I refactored static HTML into Handlebars templates that loop through a JSON array of trips. Later I refactored repeated form fields into a better Angular `TripFormComponent`, cutting out duplicate code and making it easier to add or update trips. These reusable UI components speed up development and reduce bugs, since I write the form logic once and use it everywhere.

-Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Testing in a full stack app means checking each API endpoint and each UI component. For the back end I tested the RESTful routes (`GET /api/trips`, `GET /api/trips/:id`, `POST /login`) using Postman, checking status codes, JSON responses, and error cases when a JWT is missing. On the Angular side I wrote Jasmine/Karma unit tests to ensure the `LoginComponent` and `TripFormComponent` start correctly and get the form submissions. Adding JWT security meant I also tested unauthorized requests to protected routes, confirming that calls without a valid token are rejected.

-How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course helped me be a stronger full stack developer. I learned how to design a web app architecture using the MEAN stack, and how to use front end templates with a NoSQL database. I learned to create reactive forms and client‑side routing in Angular, and I added security with JWT authentication. Learning Express routing, Handlebars templating, MongoDB modeling, Angular component design, and API testing make me a more marketable candidate for any team building complex web applications.
