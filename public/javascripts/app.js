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
      $('#pairs').append(
        "<section class='pair-box'>" +
        "<article class='student-left'>" +
        "<a href='" + pairedArray[pair][0].github + "'>" +
        pairedArray[pair][0].name + "</a>" + "</article>" +
        "<article class='student-right'>" +
         "<a href='" + pairedArray[pair][1].github + "'>" +
        pairedArray[pair][1].name + "</a>" + "</article>" + "</section>");
    }
  });



});