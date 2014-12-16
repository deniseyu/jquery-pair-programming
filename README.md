[![Code Climate](https://codeclimate.com/github/deniseyu/jquery-pair-programming/badges/gpa.svg)](https://codeclimate.com/github/deniseyu/jquery-pair-programming)
# Pair Programming Randomizer

This is a simple app to generate randomized pairs for pair-programming. Built using Javascript backend and jQuery/HTML5 front end on a Sinatra server, tested in Jasmine.

### To Use

Deployed at [https://pairing-randomizer.herokuapp.com](https://pairing-randomizer.herokuapp.com)

Clone the repo:
```
git clone git@github.com:deniseyu/jquery-pair-programming.git
cd jquery-pair-programming
```
Start the server:
```
bundle install
rackup
```

To test, open SpecRunner.html in a browser.

##### Usage Notes

The array shuffling function has not been stubbed out, so it will be called each time Jasmine is run. Some tests may occasionally fail as a result. See comments in backendSpec.js for more details.

### To Do

* Refactor appended dynamic elements with a templating library
* Explore making a Github API call to fetch fetch students' names and github links from an organization directory
* Otherwise, build an input form and write JSON parse method to load a new cohort
* Prevent backend logic from repeating combinations that have already paired, with HTML5 local storage or database
* James' suggestion - add a framework

### To Contribute

Pull requests are welcome! Fork the repo, clone locally, make your changes on new branch, and send a pull request.