$(document).ready(function() {
  console.log("Ready to pair!");
  var newPairRandomizer = new pairRandomizer;
  var decCohort = new decemberCohort;
  var students = decCohort.studentsProfiles;

  $('#click-here').on('click', function(){
    $(this).hide();
    var shuffled = newPairRandomizer.shuffle(students)
    var pairedArray = newPairRandomizer.makePairs(shuffled);
    var pair;
    for (pair in pairedArray) {
      $('#pairs').append(pairedArray[pair][0].name + " and " +
        pairedArray[pair][1].name + "<br>");
    }
  });

});