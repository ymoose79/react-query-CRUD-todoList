# TODO w/ reactQuery and JSON server

## purpose
The entire purpose of this is using reactQuery for data fetching in lieu of useEffect.  I know useEffect is the most common method, however, it appears as though there are better ways of doing this.  

## source code
I'm not entirely sure how I pieced this one together.  I can tell the UI is my code, nothing fancy.  Looks like I structured the files as well, hiding my "API" url in the .env file (only for BP) isn't super common in basic tutorials.  I'm using fetch() in lieu of AXIOS which most people.

The logic in the Home.js file is what I pulled from the tutorial.  I believe the execution is mine, I feel like I can confidently say that on some levels it is. 

I'm not entirely sure if I put my CRUD methods in their respective folder or if I took that idea and ran with it.  It's a practice I've started to implement recently, but it may not have originated with me here.  

## watch JSON-server
for anyone playing at home...
json-server --watch db.json --port 8000  