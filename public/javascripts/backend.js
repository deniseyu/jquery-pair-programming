function pairRandomizer(){};

pairRandomizer.prototype.makePairs = function(arrayOfStudents) {
  var pairsForTheDay = [];
  var numberOfPairs = arrayOfStudents.length / 2
  for(i = 0; i < numberOfPairs; i++){
    var newPair = [];
    newPair.push(arrayOfStudents[0], arrayOfStudents[1]);
    arrayOfStudents.splice(0, 2);
    pairsForTheDay.push(newPair);
  }
  return pairsForTheDay;
};

pairRandomizer.prototype.shuffle = function(array) {
  for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
  return array;
};

pairRandomizer.prototype.nameToString = function(object) {
  Object.keys(object).toString();
}

function decemberCohort() {
  this.studentsProfiles = [
    { "name": "Huy", "github": "https://github.com/tekhuy" },
    { "name": "Marcus", "github": "https://github.com/mgedw" },
    { "name": "Andy", "github": "https://github.com/andyg72" },
    { "name": "Jack", "github": "https://github.com/JackRubio26" },
    { "name": "Kieran", "github": "https://github.com/kierangoodacre" },
    { "name": "Josh", "github": "https://github.com/bebbs" },
    { "name": "Bibiana", "github": "https://github.com/BibianaC" },
    { "name": "Steph", "github": "https://github.com/stepholdcorn" },
    { "name": "Luke", "github": "https://github.com/lukeclewlow" },
    { "name": "Gus", "github": "https://github.com/guspowell" },
    { "name": "Jonathan", "github": "https://github.com/jjlakin" },
    { "name": "India", "github": "https://github.com/indiadearlove" },
    { "name": "Gabe", "github": "https://github.com/GabeMaker" },
    { "name": "Clint", "github": "https://github.com/clint77" },
    { "name": "Sanda", "github": "https://github.com/sandagolcea" },
    { "name": "Hannah", "github": "https://github.com/HannahCarney" },
    { "name": "Matteo", "github": "https://github.com/matteomanzo" },
    { "name": "Charlie", "github": "https://github.com/ciawalsh" },
    { "name": "Marcin", "github": "https://github.com/marcinwal" },
    { "name": "Jin", "github": "https://github.com/jindai1783" },
    { "name": "Emily", "github": "https://github.com/emilysas" },
    { "name": "Jacob", "github": "https://github.com/jacobmitchinson" },
    { "name": "Danielle", "github": "https://github.com/ddemkiw" },
    { "name": "Jake", "github": "https://github.com/jakealvarez" },
    { "name": "Richard", "github": "https://github.com/iggyster3" },
    { "name": "Ptolemy", "github": "https://github.com/ptolemybarnes" },
    { "name": "Oliver", "github": "https://github.com/olucas92" },
    { "name": "Lone Wolf", "github": "https://github.com/spike01" }
  ]
};

function octoberCohort() {
  this.studentsProfiles = [
    { "name": "Nick", "github": "https://github.com/nickbdyer" },
    { "name": "Chris H", "github": "https://github.com/chandley" },
    { "name": "Ben H", "github": "https://github.com/benhutchinson" },
    { "name": "Mishal", "github": "https://github.com/mishal1" },
    { "name": "Rich", "github": "https://github.com/ralake" },
    { "name": "Claudia", "github": "https://github.com/Callisto13" },
    { "name": "Pavel", "github": "https://github.com/PaweI" },
    { "name": "Alan", "github": "https://github.com/abridger" },
    { "name": "Edward", "github": "https://github.com/ejbyne" },
    { "name": "Izzy", "github": "https://github.com/imarkwick" },
    { "name": "Simon", "github": "https://github.com/langesi" },
    { "name": "Daniel", "github": "https://github.com/ayoobembe" },
    { "name": "Ben C", "github": "https://github.com/Benc93" },
    { "name": "Clare", "github": "https://github.com/ctrembath" },
    { "name": "John", "github": "https://github.com/JKiely" },
    { "name": "Giorgia", "github": "https://github.com/giorgia-amici" },
    { "name": "Attila", "github": "https://github.com/Tr1ckX" },
    { "name": "Dale", "github": "https://github.com/1278dale" },
    { "name": "Shan", "github": "https://github.com/shanhasan" },
    { "name": "Blease", "github": "https://github.com/ablease" },
    { "name": "Ming", "github": "https://github.com/ming-chan" },
    { "name": "Chris B", "github": "https://github.com/chrisjbatts" }
  ]
};