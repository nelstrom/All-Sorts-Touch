watch('public/app/.*\.js') do |md|
  puts "#{md} was changed at #{start = Time.now}"

  command = `java -jar closure-compiler/compiler.jar #{build_input_file_list} --js_output_file public/javascripts/app.min.js`
  command = "Compilation completed in #{sprintf('%.2f', Time.now - start)}s\n\n" if command.empty?
  puts command
end

def all_js_resources
  sources = [
    #"public/javascripts/sencha-touch.js",
    "public/app/routes.js",
    "public/app/app.js"
  ]

  %w{models stores views controllers}.each do |layer|
    sources += Dir.glob("public/app/#{layer}/**")
  end

  sources
end

def build_input_file_list
  all_js_resources.map { |filename| "--js #{filename}"}.join(" ")
end
