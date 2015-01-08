require 'sinatra'
require 'mongo'
require 'json/ext'
require_relative 'app/models/ruby_helpers.rb'

include Mongo
include RubyHelpers

conn = MongoClient.new('localhost', 27017)
set :mongo_connection, conn
set :mongo_db, conn.db('jquery-pair-programming')

get '/' do
  erb :index
end

get '/submit' do
  erb :new
end

get '/pairs' do
  content_type :json
  db = conn.db('jquery-pair-programming')
  db.collection('test').find.to_a.to_json
end

post '/newpair' do
  content_type :json
  db = conn.db('jquery-pair-programming')
  coll = db.collection('test')
  id = coll.insert(params)
  redirect '/'
end

get '/chart' do
  db = conn.db('jquery-pair-programming')
  coll = db.collection('test')
  data = coll.find.to_a
  @data = coll.find.to_a
  @users = json_to_pairs(data)
  @user_count = collect_by_type(@users)
  @top_pairers = sort_by_pairing_frequency(@user_count)
  erb :chart
end