## Timeline

My timeline, CSS/HTML are forked from [technotarek/timeliner](https://github.com/technotarek/timeliner)，add nodejs code to support generate timeline page dynamicly.

## Usage

```
// 1. prepare files
git clone git@github.com:jiacai2050/timeline.git
cd timeline
git clone git@github.com:jiacai2050/timeline.git .deploy
cd .deploy
git checkout gh-pages

// 2. prepare events.json
// edit events.json to add important event in your life

// 3. generate timeline page and push to gh-pages
// regenerate timeline page
$TIMELINE/tl.js g
//push timeline page to gh-pages
$TIMELINE/tl.js d
```

## License

All Node.js codes licensed under [MIT](http://liujiacai.net/license/MIT.html?year=2015).
