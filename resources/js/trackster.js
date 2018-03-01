var Trackster = {};
const API_KEY = "4e0b6eea2b15d8e28397a162c8d6bd9c";

$(document).ready(function() {
  $("#search-button").click(function(){
    Trackster.searchTracksByTitle($("#search_input").val());
  });
});
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  var $trackRow = $("#track-row");
  $trackRow.empty();

  for(var i = 0; i < tracks.length; i++){
    var track = tracks[i];
    var mediumAlbumArt = track.image[1]["#text"];

    var trackHtml =
    '  <div class="row">' +
    '    <div class="col-xs-1">' +
    '      <a class="glyphicon glyphicon-play-circle" href="' + track.url + '"></a>' +
    '    </div>' +
    '    <div class="col-xs-2">' +
    '      <span>' + track.name + '</span>' +
    '    </div>' +
    '    <div class="col-xs-3">' +
    '      <span>' + track.artist + '</span>' +
    '    </div>' +
    '    <div class="col-xs-3">' +
    '      <img src="' + mediumAlbumArt + '"/>' +
    '    </div>' +
    '    <div class="col-xs-3">' +
    '      <span>' + track.listeners + '</span>' +
    '    </div>' +
    '  </div>'
  $trackRow.append(trackHtml);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json",
    success: function(response){
        Trackster.renderTracks(response.results.trackmatches.track);
      }
  });
};
