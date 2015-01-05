module RubyHelpers

  def collect_by_type(array)
    hash = Hash.new
    array.each do |elem|
      hash.keys.include?(elem) ? hash["#{elem}"] += 1 : hash["#{elem}"] = 1
    end
    hash
  end

  def json_to_pairs(object)
    array = Array.new
    object.each do |elem|
      array << elem['pair'].split(' ')
    end
    return array.flatten
  end

end