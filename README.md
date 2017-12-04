READ ME

Full Stack Nfl Draft Tracker App (front end)

Link to front end deployed site : https://bcameron1489.github.io/Full-stack-project-front-end/
Link to front end repo : https://github.com/bcameron1489/Full-stack-project-front-end
Link to back end api : https://mysterious-beach-51838.herokuapp.com
Link to back end repo : https://github.com/bcameron1489/Back-End-Api
Link to wireframes :  https://i.imgur.com/EBzWqfd.jpg

What does this app do?
This app is a tool used to track a database of current nfl players (in my version one it just tracks player name team and bye week) and allows you to set notes on a personal desired list of players only visible to the specific user.  This app honestly was created because I often neglect to really pay attention to my players bye weeks and an absurd amount of draft sites neglect this as well.

How does it work?
This app works by restricting all actions until the user signs up and logs in and can be authenticated.  The actions on the public resource database is limited to read only to protect my database.  The user can then make crud requests to their personal lists, the rails api recognizes the user and their personal data and returns their information in the form of json.  That information is then converted and displayed in the html using handlebars in most cases.  The api is run on heroku (a hosting service) which is where I deploy my backend api and database to.

Technologies used: html, css, javascript, ajax, jquery, handlebars, ruby, rails, gitHub, linux ubuntu, atom, terminal/curl shell scripts

User Stories :
user:
- As a new user, I want to sign up and sign in.
- As a user with now with credentials, I want to use the app
- As a user I search the pool of listed players
- As a user I want to narrow the field and select a single resource
- As a user I want to add a player to my list of stored players
- As a user I want to pull up my user player index
- As a user I want to set leave a comment on my selected player
- As a user I want to remove a drafted player from my user players
- As a user I want to sign out

developer:
- As a developer, I want to protect my database by making the public resources read only.
- As a developer, I want to simplify my code to make it readable and modular.
- As a developer, I want to focus on a user friendly simply layout for my app.
- As a developer, I want to create a SPA.

1. Draw up ERD, wireframes and user stories for planning.
2. Carefully think of the order in which I'd like to complete this project, referencing the suggested schedule process.
3. Create both repos with the right templates and deploy to proper sites.
4. Deploy backend on heroku.
5. Install dependencies and carefully look over project requirements.
6. Begin by scaffolding reasource table to back end then migrate to update schema.
7. Test routes using curl scripts and update controller accordingly.
8. When crud actions checkout create third resource as a join table and adjust routes and controllers accordingly for a many to many relationship.
9. Test CRUD actions again to make sure all nessesary changes have been made to the routes and controller and run curl scripts.
10. Clean up back end and begin front end process.
11. Run rails localhost and make a simple note in html to ensure things are working.
12. Begin with sign-in/up/out/change-password ajax requests.  Begin with your forms and create a link to your index.js through event handlers within your events.
13. Curl along the way to ensure each action works before moving on to the next feature.
14. Once all auth specs check out move onto client requests, again, curl requesting each action to ensure the api is returning a response and adjust accordingly. (console logs are your friend)
15. Use handlebars to process json data into html.
16. Once features are all running adjust the ui's to clear form fields and clean up the page by utilizing css.
17. Debug issues and clean up your code (make sure all consolelogs have been removed).

Development Process :

  This project was a roller coaster.  I put a much larger emphasis on planning for this project than projects prior however some simple mistakes in my planning process forced me to pivot my main idea into something a little more feasible and user friendly.  I started out strong and was able to get my first resource and the crud actions up running properly way ahead of schedule.  However I experienced some set backs with my migrations which led to time lossed due to some sloppy mistakes.  After clearing that hurdle I began working on my many to many resource, which was an area of concern for me.  I initially had planned for my api to be a one to many relationship but honestly I'm glad I went the way I did as it was a great learning experience.  The crud actions on my join table went smoothly until I hit a snag with my patch action.  A lot of time was spent debugging the issue but the experience proved to fruitful later in the project.  Debugging the issue checking both the curl reponses and the server responses while trying to find my way to the route of the problem truly helped me in with my deductive reasoning and how to approach bugs.  After finally setting up my api I cruised through my auth actions and the first few of my client actions.  Once I hit create and update I experience some more issues.  I learned to be more careful looking through my html forms (like passing player_id as an object) and to really think about what my routes and controllers are looking for.  I was able to utilize some handlebars on this project, which we only really scratched the surface of in class.  Handlebars is great and proved to be crutch for me throughout the development process.  Initially I tried parsing the json data using javascript and that was nightmare.  Additionally, learning how to add attributes to the backend serializer and referencing another tables attributes using dot notation in handlebars was a great learning experience.  Finally as I arrived at the finish line I feel I've taken away an immeasurable amount of experience and the learning process throughout this project has been a great one.  I look forward to learning more fun tools to use and growing as a developer in the future.

Unsolved Problems :

Really the one glaring issue I plan to go back and fix aside from my sites lack of styling, is adding a delete button that targets the attributes of each item within the handlebars array in my user list so you don't have to type in delete (I'd also like to do that for add player).  I could not for the life of me figure out what class I was supposed to target to get my delete to work.  Upon clicking the delete button the page would just reset, so I'd definitely like to take another stab at that one and make my site sleaker and more user friendly.
