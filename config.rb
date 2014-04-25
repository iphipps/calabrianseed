# Require any additional compass plugins here.

extensions_dir = "source/assets/styles/sass/gumby/extensions"
Compass::Frameworks.register('modular-scale', :path => File.expand_path("#{extensions_dir}/modular-scale"))

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "source/assets/styles/css"
sass_dir = "source/assets/styles/sass"
images_dir = "source/assets/images"
javascripts_dir = "source/assets/js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass