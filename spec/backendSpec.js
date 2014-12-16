describe('Pair Programming Helper', function(){

  var newPairRandomizer;
  var pairsForTheDay;

  beforeEach(function(){
    newPairRandomizer = new pairRandomizer();
  });

  it('should generate two pairs from a group of four elements', function(){
    var newCohort = [
      { "Nicole": "https://github.com/NicolePell" },
      { "Denise": "https://github.com/deniseyu" },
      { "Tim": "https://github.com/scully87" },
      { "Yvette": "https://github.com/yvettecook" }
    ];
    var pairsToday = newPairRandomizer.makePairs(newCohort);
    expect(pairsToday).toEqual([
      [ { "Nicole": "https://github.com/NicolePell" },
        { "Denise": "https://github.com/deniseyu" } ],
      [ { "Tim": "https://github.com/scully87" },
        { "Yvette": "https://github.com/yvettecook" } ]
      ]);
    expect(pairsToday.length).toEqual(2);
  });

  it('should have exactly 28 people in the December cohort, with the lone wolf', function(){
    var newCohort = new decemberCohort();
    expect(newCohort.studentsProfiles.length).toEqual(28)
  });

  it('should make 14 pairs from 28 people', function(){
    var newCohort = new decemberCohort();
    var pairsToday = newPairRandomizer.makePairs(newCohort.studentsProfiles);
    expect(pairsToday.length).toEqual(14);
  });

  it('without shuffling, the first pair should consist of the first two people', function(){
    var newCohort = new decemberCohort();
    var pairsToday = newPairRandomizer.makePairs(newCohort.studentsProfiles);
    expect(pairsToday).toContain([{ "name": "Huy", "github": "https://github.com/tekhuy" },
    { "name": "Marcus", "github": "https://github.com/mgedw" }]);
  });

  it('should be able to shuffle the students in an array', function(){
    var newCohort = [
      { "Nicole": "https://github.com/NicolePell" },
      { "Denise": "https://github.com/deniseyu" },
      { "Tim": "https://github.com/scully87" },
      { "Yvette": "https://github.com/yvettecook" }
    ];
    newPairRandomizer.shuffle(newCohort);
    expect(newCohort).toContain({ "Nicole": "https://github.com/NicolePell" })
    // expect(newCohort[0]).toEqual({ "Nicole": "https://github.com/NicolePell" })
    // This does not genuinely test the method - uncomment and run Jasmine a few times to see randomizing
  });

  it('should return fourteen randomly shuffled pairs', function(){
    var newCohort = new decemberCohort();
    var students = newCohort.studentsProfiles;
    var shuffled = newPairRandomizer.shuffle(students);
    var shuffledPairs = newPairRandomizer.makePairs(shuffled);
    expect(shuffledPairs.length).toEqual(14);
    expect(shuffledPairs[0]).not.toEqual([{ "name": "Huy", "github": "https://github.com/tekhuy" },
    { "name": "Marcus", "github": "https://github.com/mgedw" }])
    // console.log(shuffledPairs[0])
    // this also does not genuinely test for randomness, but uncomment the console.log to see the first randomized pair
  });

});