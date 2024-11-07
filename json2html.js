// json2html.js
export default function json2html(data) {
    let html = <table data-user="aravindrudraram@gmail.com">\n;
    html += <thead>\n<tr><th>Name</th><th>Age</th><th>Gender</th></tr>\n</thead>\n<tbody>\n;

    data.forEach(item => {
        html += <tr><td>${item.Name || ''}</td><td>${item.Age || ''}</td><td>${item.Gender || ''}</td></tr>\n;
    });

    html += </tbody>\n</table>;
    return html;
}