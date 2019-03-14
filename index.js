$(function(){
  $("#nav-playlists").hide();
  $("#playlist-a").click(function(){
    $("#playlist-a > i").toggleClass("active");
    $("#nav-playlists").slideToggle();
  });
});
