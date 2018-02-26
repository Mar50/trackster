$( document ).ready(function() {
  $("#search-button").click( function(){
    var $search_text = $("#search_input").val();
    Trackster.searchTracksByTitle($search_text);
  });

  $.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=hello&api_key=4e0b6eea2b15d8e28397a162c8d6bd9c&format=json",
    dataType: "jsonp"
  });
});

const API_KEY = "4e0b6eea2b15d8e28397a162c8d6bd9c";

var Trackster = {};

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {

};
