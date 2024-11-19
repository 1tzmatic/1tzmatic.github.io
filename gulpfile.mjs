import gulp from 'gulp';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import inject from 'gulp-inject';
import { deleteSync } from 'del';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Очистка папки dist
async function clean() {
    await deleteSync(['dist']);
}

// Сборка HTML
function html() {
    const indexPath = path.join(__dirname, '1tzmatic.github.io', 'index.html');
    return gulp.src(indexPath)
        .pipe(inject(gulp.src(['src/blocks/**/*.html'], {read: false}), {
            starttag: '<!-- inject:{{path}} -->',
            transform: function (filePath, file) {
                return file.contents.toString('utf8');
            }
        }))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
}

// Сборка CSS
function css() {
    return gulp.src('src/blocks/**/*.css')
        .pipe(concat('styles.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
}

// Сборка JS
function js() {
    return gulp.src('src/blocks/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
}

// Задача по умолчанию
const build = gulp.series(clean, gulp.parallel(html, css, js));

export default build;