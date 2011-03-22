# Delineate the directory for our SASS/SCSS files (this directory)
sass_path = File.dirname(__FILE__)
 
# Delineate the CSS directory (under resources/css in this demo)
css_path = File.join(sass_path, "..", "public", "stylesheets")
 
# Load the sencha-touch framework
load File.join(sass_path, 'sencha')
 
# Specify the output style/environment
output_style = :expanded
environment = :development
