$(document).ready(function() {
  console.log("Ready to pair!");
  var newPairRandomizer = new pairRandomizer;
  var cohort;

  $('#october').on('click', function(){
    cohort = new octoberCohort();
    $('#active-cohort').text('October')
    $('#click-here').removeClass('hidden');
  });

  $('#december').on('click', function(){
    cohort = new decemberCohort();
    $('#active-cohort').text('December')
    $('#click-here').removeClass('hidden');
  });

  $('#click-here').on('click', function(){
    $(this).hide();
    var students = cohort.studentsProfiles;
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