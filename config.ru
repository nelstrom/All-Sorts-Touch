require 'rubygems'
require 'rack/rewrite'

use Rack::Static, :urls => ['/', '/stylesheets', '/javascripts'], :root => "public"
use Rack::Rewrite do
  rewrite '/', '/index.html'
end
run Rack::Directory.new('public')
