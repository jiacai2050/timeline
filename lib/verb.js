var ejs = require("ejs")
     fs = require("fs")
   path = require("path"),
     md = require("markdown").markdown,
 moment = require("moment"),     
   exec = require('child_process').exec;

exports.generate = function(destFile) {
    var events = require("../events");
    for(var year in events) {
        var eventsInThatYear = events[year];
        for (var i = 0; i < eventsInThatYear.length; i++) {
            var e = eventsInThatYear[i];
            e.datestr = moment(e.id ,"YYYYMMDD").format("YYYY年MM月DD日");
            e.content = md.toHTML(e.content);
        }
    }

    var templateFile = path.join(__dirname, "template.ejs"),
            htmlFile = path.join(ROOT_DIR, ".deploy", "index.html");
    fs.readFile(templateFile, 'utf8', function(err, data) {
        if (err) throw err;
        var html = ejs.render(data, {
            events: events
        });
        fs.writeFile(htmlFile, html, function(err) {
            if (err) {
                console.log(htmlFile + " write error");
                throw err;
            } else {
                console.log(htmlFile + " write ok");
            }
            
        });
    });
}

exports.deploy = function(branchDir) {
    var cmdArr = [
        "cd " + path.join(ROOT_DIR, ".deploy"),
        "git add -A .",
        "git commit -m 'update at "+ new Date() +"'",
        "git push origin gh-pages:gh-pages"
    ];
    exec(cmdArr.join(";"), function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    }); 
}