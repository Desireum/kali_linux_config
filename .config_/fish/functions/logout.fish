function logout --wraps='i3-msg exit' --description 'alias logout i3-msg exit'
  i3-msg exit $argv; 
end
