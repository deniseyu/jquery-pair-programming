$(document).ready(function() {
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
    var shuffled = newPairRandomizer.shuffle(students);
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

  $('#submit-new-pair-button').on('click', function(event){
    event.preventDefault();
    var studentOne = $('#student-one-field').val();
    var studentTwo = $('#student-two-field').val();
    var pairEvent = studentOne +' '+ studentTwo;
    var repoOne = $('#repo-one-field').val();
    var repoTwo = $('#repo-two-field').val() || '';
    var repoThree = $('#repo-three-field').val() || '';
    var reposAll = repoOne + ', ' + repoTwo + ', ' + repoThree;
    var datePaired = $('#date').val();
    if(studentOne === '' || studentTwo === '' || repoOne === ''){
      alert('Please fill out both names and at least one repo!')
    } else {
      $.ajax({
        type: 'POST',
        url: '/newpair',
        data: {
          pair: pairEvent,
          repos: reposAll,
          date: datePaired
        },
      }).done(function(data){
        $('#notice').html('<h3>Pairing event saved! Click <a href="/">here</a> to go back.</h3>');
        $('.field').val('');
      });
    }
  });

});