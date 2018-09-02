
$(document).ready(function(){
  var target = 0;
  var playervalue = 0;
  var isActive = false;
  var wins = 0;
  var losses =0;



  var game = {
    crystalGen: function () {
      return (Math.floor(Math.random() * 12) + 1);
    },

    initialize: function () {
      target = Math.floor(Math.random() * 102) + 19;
      $("#crystal1").attr("pointvalue", game.crystalGen());
      $("#crystal2").attr("pointvalue", game.crystalGen());
      $("#crystal3").attr("pointvalue", game.crystalGen());
      $("#crystal4").attr("pointvalue", game.crystalGen());
      $("#target").text(target);
      playervalue = 0;
      $("#playerValue").text(playervalue);
      isActive = true;
    },

    onCrysClick: function() {
      playervalue = playervalue + parseInt($(this).attr("pointvalue"),10);
      $("#playerValue").text(playervalue);
      game.afterClick();
    },

    afterClick: function() {
      if(playervalue > target) {
        losses += 1;
        $("#losses").text(losses);
        isActive = false;
        game.initialize();
      }
      else if(playervalue === target) {
        wins += 1;
        $("#wins").text(wins);
        isActive = false;
        game.initialize();
      }
    }
  };

//Game Runtime
  game.initialize();
  $(".crystals").on("click", game.onCrysClick);
});