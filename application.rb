require 'rubygems'
require 'sinatra'

helpers do
  def templates
    Dir.glob("templates/**").map do |template|
      name = File.basename(template, ".html")
      content = open(template).read
      "<textarea id='#{name}' class='x-hidden-display'>#{content}</textarea>"
    end.join("\n")
  end

  def link_scripts
    if production?
      "<script src='javascripts/app.min.js' type='text/javascript' charset='utf-8'></script>"
    else
      sencha_app_scripts
    end
  end

  def sencha_app_scripts
    sources = ["public/app/routes.js", "public/app/app.js"]

    sources << "public/config/#{Sinatra::Application.environment}.js"

    %w{models stores views controllers}.each do |layer|
      sources += Dir.glob("public/app/#{layer}/**/**.js")
    end

    sources.map do |file|
      source = file.sub('public/', '')
      "<script src='#{source}' type='text/javascript' charset='utf-8'></script>"
    end.join("\n  ")
  end
end

get '/' do
  erb :index
end

