var player = videojs('my-player');

document.getElementById("button-play").addEventListener("click", function() { player.play(); });
document.getElementById("button-pause").addEventListener("click", function() { player.pause(); });
document.getElementById("button-stop").addEventListener("click", function() { player.reset(); });
document.getElementById("button-jump5f").addEventListener("click", function() { player.currentTime(player.currentTime() + 5); });
document.getElementById("button-jump5b").addEventListener("click", function() { player.currentTime(player.currentTime() - 5); });



