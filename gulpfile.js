const {watch ,src, dest, series, parallel} = require("gulp");
const Sass = require('gulp-sass');
const rename = require("gulp-rename");

const path = {
    sass: ["pages/**/*.scss"],
}


function sass(params) {
    return src(path.sass)
            .pipe(Sass().on('error', Sass.logError))
            .pipe(rename({
                extname:'.css'
            }))
            .pipe(dest('static/css'));
}

function dev(cd) {
    watch(path.sass, series(sass));
    cd();
}


exports.dev = series(
    sass,
    dev
);

exports.default = series(
    sass,
);
