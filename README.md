## Sass EJS Render

This is a **research** repository to built a proof of concept for a dynamic CSS creation.

Using `gulp` to input dynamic values to the EJS file (this value can be taken from actual config file's value). Then will convert it to Sass variable in `.scss` file. Then will convert the `.scss` file to `.css`.

See `gulpfile.js` for its full configuration.

#### Installation

Do normal clone like usual, install the prerequisites libraries with `npm install`. Would be nice if you also instal gulp as your global package (`npm install gulp --global`).

Then you can change the variable on the gulp, and run `gulp`.
