System.register(['angular2/platform/browser', 'angular2/core', './intermediates/articles-cmp', './models/article-model'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, articles_cmp_1, article_model_1;
    var RedditApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (articles_cmp_1_1) {
                articles_cmp_1 = articles_cmp_1_1;
            },
            function (article_model_1_1) {
                article_model_1 = article_model_1_1;
            }],
        execute: function() {
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new article_model_1.Article('Angular 2', 'http://angular.io', 3),
                        new article_model_1.Article('Fullstack', 'http://fullstack.io', 2),
                        new article_model_1.Article('Angular Homepage', 'http://angular.io', 1),
                    ];
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value);
                    this.articles.push(new article_model_1.Article(title.value, link.value, 0));
                    title.value = '';
                    link.value = '';
                };
                RedditApp.prototype.sortedArticles = function () {
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        template: "\n                <form class=\"ui large form segment\">\n                    <h3 class=\"ui header\"> Add a Link </h3>\n                    <div class=\"field\">\n                        <label for=\"title\"> Title: </label>\n                        <input name=\"title\" #newtitle>\n                    </div>\n                    <div class=\"field\">\n                        <label for=\"link\"> Link: </label>\n                        <input name=\"link\" #newlink>\n                    </div>\n\n                    <button (click)=\"addArticle(newtitle, newlink)\"\n                              class=\"ui positive right floated button\">\n                        Submit link\n                    </button>\n                </form>\n\n                <div class=\"ui grid posts\">\n                  <reddit-article\n                       *ngFor=\"#article of sortedArticles()\"\n                      [article]=\"article\">\n                  </reddit-article>\n               </div>\n             ",
                        directives: [articles_cmp_1.ArticleComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            })();
            browser_1.bootstrap(RedditApp);
        }
    }
});
//# sourceMappingURL=reddit-app-cmp.js.map