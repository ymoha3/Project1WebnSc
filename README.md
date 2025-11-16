Project 1 -- Digital Diary Web Application ("MemoryQuill")

Digital diary service that demonstrates full CRUD functionality, clean routing, MVC structure, and responsive UI design
Built using Node.js, Express, MongoDB, and EJS

Features
Create new diary entries with title, message, and date fields
View all entries in an organized manner
Edit any existing entry and update its contents at any time
Remove entries instantly

Designed with Bootstrap for a clean and modern page layout
Style.css for an attractive, eye-catching color scheme

Softwares
	Frontend:
HTML/EJS 
CSS / Bootstrap
Font Awesome Icons

Backend:
Node.js
Express.js
MongoDB with Mongoose

	Tools:
Nodemon
GitHub

Major Folders/Files:
	Server.js / app.js
Main entry point of the application
Initializes the express server
Sets up middleware
Connects to MongoDB
Configures routing by importing router modules
Starts the server and listens on a specified port



Routes/
Contains route definitions for the application. Each file handles CRUD operations for a specific data model. 
index.js: Main route
entries.js: Defines get, post, put, and delete routes for Entries in the database

	Models/
Defines Mongoose schemas for MongoDB collections. Each file corresponds to a database collection.
Entries.js: Defines the structure of an entry (fields, data types, validations)
	views/
	Contains HTML or template files rendered by Express:
about.html/about.ejs: About page content 
index.hmtl/index.ejs: Homepage or main view
Templates can reference frontend assets (images, CSS, JS) from the public folder

	public/
	Static assets served by backend (Express uses express.static() to serve files)
	assets/images/: Logo 
	assets/css/: Stylesheets for pages
assets/js/: Front-end JavaScript files

	
Authors:

Yusuf Mohamed – 100980209
Justyn Umrah – 100966991
Adeel Mohammad – 100988484


