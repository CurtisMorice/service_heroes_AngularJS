app.controller('HeroesController', ['HeroService', function(HeroService) {

    let self = this;
    class Heroes {
        constructor(name, backstory) {
            this.name = name;
            this.backstory = backstory;
        }
    }

    self.addHeroes = function() {
        let newHero = new Heroes(self.name, self.backstory);
        HeroService.getSuper(newHero).then(function() {
            console.log(`in displayHeroes controller`);
        }).catch(function(error) {
            console.log(`error in  displayHeroes`, error);
        });
    };
    self.displayHeroes = function() {
        HeroService.getSuper('hero').then(function() {
            self.allHeroes = HeroService.allHeroes;
        });
    }

    self.displayHeroes();

}]);