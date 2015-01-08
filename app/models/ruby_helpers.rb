module RubyHelpers

  def json_to_pairs(object)
    array = Array.new
    object.each do |elem|
      array << elem['pair'].split(' ')
    end
    return array.flatten
  end

  def collect_by_type(array)
    hash = Hash.new
    array.each do |elem|
      hash.keys.include?(elem) ? hash["#{elem}"] += 1 : hash["#{elem}"] = 1
    end
    hash
  end

  def sort_by_pairing_frequency(hash)
    hash.sort_by(&:last).reverse
  end

  def show_repos(object, user)
    array = Array.new
    object.each do |elem|
      people = elem['pair'].split(' ')
      if people.include?(user)
        array.push(elem['repos'].split(', '))
      end
    end
    array.flatten
  end

  def show_unique_repos(object, user)
    show_repos(object, user).uniq
  end

end