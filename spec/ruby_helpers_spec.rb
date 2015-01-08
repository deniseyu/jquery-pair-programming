require 'rspec'
require './app/models/ruby_helpers.rb'

class Helpers
  include RubyHelpers
end

describe Helpers do

  let(:helper) {Helpers.new}

  json_example = [{"pair"=>"deniseyu yvettecook", "repos"=>"deniseyu/battleships, deniseyu/git-fetcher", "date"=>"2015-01-05 16:35:44 +0000"}, {"pair"=>"scully87 Schlap", "repos"=>"scully87/battleships", "date"=>"2015-01-05 16:35:44 +0000"}, {"pair"=>"spike01 ch2ch3", "repos"=>"spike01/tweetmapp", "date"=>"2015-01-05 16:35:44 +0000"}, {"pair"=>"deniseyu yvettecook", "repos"=>"yvettecook/confession-board", "date"=>"2015-01-05 16:35:44 +0000"}, {"pair"=>"MadameSardine NicolePell", "repos"=>"MadameSardine/pandapop", "date"=>"2015-01-05 16:35:44 +0000"}, {"pair"=>"deniseyu MadameSardine", "repos"=>"MadameSardine/pandapop", "date"=>"2015-01-05 16:35:44 +0000"}, {"pair"=>"NicolePell spike01", "repos"=>"NicolePell/panda, MadameSardine/pandapop, slstevens/pandapop", "date"=>"2015-01-05 16:35:44 +0000"}, {"pair"=>"MadameSardine NicolePell", "repos"=>"NicolePell/Thermocat", "date"=>"2015-01-05 16:35:44 +0000"}, {"pair"=>"deniseyu yvettecook", "repos"=>"deniseyu/hello", "date"=>"2015-01-06 11:03:24 +0000"}]

  it 'can filter out pairs' do
    expect(helper.json_to_pairs(json_example)).to eq ["deniseyu", "yvettecook", "scully87", "Schlap", "spike01", "ch2ch3", "deniseyu", "yvettecook", "MadameSardine", "NicolePell", "deniseyu", "MadameSardine", "NicolePell", "spike01", "MadameSardine", "NicolePell", "deniseyu", "yvettecook"]
  end

  context 'after filtering a JSON object' do

    let(:data) { helper.json_to_pairs(json_example) }

    it 'can filter usernames and how many times he/she has paired' do
      expect(helper.collect_by_type(data).keys).to eq ["deniseyu", "yvettecook", "scully87", "Schlap", "spike01", "ch2ch3", "MadameSardine", "NicolePell"]
      expect(helper.collect_by_type(data).values).to eq [4, 3, 1, 1, 2, 1, 3, 3]
    end

    it 'can sort users by most frequent pairer' do
      hashed_data = helper.collect_by_type(data)
      expect(helper.sort_by_pairing_frequency(hashed_data)).to eq [["deniseyu", 4], ["NicolePell", 3], ["yvettecook", 3], ["MadameSardine", 3], ["spike01", 2], ["Schlap", 1], ["scully87", 1], ["ch2ch3", 1]]
    end

    it 'can collect all repos that a user has worked on' do
      expect(helper.show_repos(json_example, "deniseyu")).to eq ["deniseyu/battleships", "deniseyu/git-fetcher", "yvettecook/confession-board", "MadameSardine/pandapop", "deniseyu/hello"]
      expect(helper.show_repos(json_example, "MadameSardine")).to eq ["MadameSardine/pandapop", "MadameSardine/pandapop", "NicolePell/Thermocat"]
    end

    it 'can display the number of unique repos a user has worked on' do
      expect(helper.show_unique_repos(json_example, "MadameSardine")).to eq ["MadameSardine/pandapop", "NicolePell/Thermocat"]
    end

  end

end