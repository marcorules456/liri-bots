// psudo code for  liri bot
// Goals:
//1: make commands to see movie data 
//from ombdapi
// 2. make commands to see twitter
//3. make commands to see spotify




// 1. OMBDAPI
// - command 1. movie-this [title}
// - step 1: download request package to get node module DONE
// - step 2: use the request package to get title, year, rating,plot,language, and cast DONE
// - step 3: get the api key for omb DONE
// = step 4: put all the requested data into console DONE
// step 5: make this function call only if they type in movie this DONE
// step 6: use process.argv to get command and value, DONE
// step 7: the porcess.argv[3}}] will be the value for the search DONE 


var twitterKeys = {
  consumer_key: 'wBZyLikgU5SBvkmsfgn6uRGBG',
  consumer_secret: '7uAIdbJxPkHITPvGmvxUkUmGGsamvY2WM9EMvPFDrZJbjAAK4v',
  access_token_key: '913193328526581761-xAOT3XiOdQhUG2X2bP9AwBAZa9OUynV',
  access_token_secret: 'kPtCcERJOdm5DIqaYE0ybDRntLLhWcuINHuG2pfLkiDM0'
}










// OMBAPI pseudo code
var twitter = require("twitter");

var spotify = require("node-spotify-api");
var action = process.argv[2];
var request = require("request");
var title = process.argv[3];
var fs = require("fs");




function moviePhone(){
	console.log("moviefone loaded");


	request("http://www.omdbapi.com/?t="+title+"&y=&plot=short&apikey=40e9cece", function(error, response, body) {
	var movie= JSON.parse(body);

	console.log("Here is info about your selected movie \n"

	+ "TITLE: "+ movie.Title+"\n"
	+ "ACTORS: " + movie.Actors + "\n"
	+ "LANGUAGE: " + movie.Language+ "\n"
	+ "RATING: "+ movie.imdbRating + "/5"+ "\n"
	+ "GENRE: "+ movie.Genre + "\n"
	+ "PLOT: " + movie.Plot + "\n"
	);

	});

}





function twitterKey(){
	console.log("twitter command loaded");

}

function spotMusic(){
	console.log("spotify command activated");


}

function randomCommand(){
	fs.readFile("liri.txt","utf8",function(err,data){
    	var commands = data;
    	var randomizer = Math.floor(Math.random()*3)+1;
    	data.split(", ");
		console.log(commands[randomizer]);
		if(randomizer <= 1){
			moviePhone();
		}if(randomizer === 2){
			twitterKey();
		}
		if(randomizer ===3){
			spotMusic();
		}
       

	});
}










if(action === "movie-this"){
	moviePhone();
}
if(action === "song-this"){
	spotMusic();
}
if(action === "twitter-this"){
	twitterKeys();
}
if(action === "random"){
	randomCommand();
}
else{
	console.log("Oops you typed an invalid command, try again");
}





