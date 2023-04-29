const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass")); // dodaje SASSa
const cssnano = require("gulp-cssnano"); // minifikuje kod
const autoprefixer = require("gulp-autoprefixer"); // dodaje prefixy
const rename = require("gulp-rename");
const babel = require("gulp-babel"); // zmienia nazwę pliku/folderu
const uglify = require("gulp-uglify"); //minifikuje kod javascript
const imagemin = require("gulp-imagemin"); //minifikuje obrazy / zmniejsza ich wielkość(MB i KB)
const sourcemaps = require("gulp-sourcemaps");
const clean = require("gulp-clean"); //czyści pliki, jeśli coś usuniemy w danym folderze
const kit = require("gulp-kit");
const browserSync = require("browser-sync").create(); //live server
const reload = browserSync.reload; //odświeżanie strony do live servera

const paths = {
	html: './html/**/*.kit',
	sass: "./src/sass/**/*.scss",
	js: "./src/js/**/*.js",
	img: "./src/img/*",
	dist: "./dist",
	sassDest: "./dist/css",
	jsDest: "./dist/js",
	imgDest: "./dist/img",
};

function sassCompiler(done) {
	src(paths.sass)
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write())
		.pipe(dest(paths.sassDest));
	done();
}

function javaScript(done) {
	src(paths.js)
		.pipe(sourcemaps.init())
		.pipe(babel({ presets: ["@babel/env"] }))
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write())
		.pipe(dest(paths.jsDest));
	done();
}

function convertImages(done) {
	src(paths.img).pipe(imagemin()).pipe(dest(paths.imgDest));
	done();
}

function handleKits(done) {
	src(paths.html)
		.pipe(kit())
		.pipe(dest('./'));
	done();
}

function cleanStuff(done) {
	src(paths.dist, { read: false }).pipe(clean()); // usunie cały folder dist
	done();
}

function startBrowserSync(done) {
	browserSync.init({
		server: {
			baseDir: "./",
		},
	});

	done();
}

function watchForChanges(done) {
	watch("./*.html").on("change", reload);
	watch([paths.html, paths.sass, paths.js], parallel(handleKits, sassCompiler, javaScript)).on(
		"change",
		reload
	);
	watch(paths.img, convertImages).on("change", reload);
	done();
}

const mainFunctions = parallel(handleKits, sassCompiler, javaScript, convertImages);
exports.cleanStuff = cleanStuff;
exports.default = series(mainFunctions, startBrowserSync, watchForChanges); //Po wpisaniu "gulp" w terminalu robi wszystko co w opisanej funkcji sassCompiler
