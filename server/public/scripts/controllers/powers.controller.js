app.controller('PowersController', ['HeroService', function(HeroService) {

    let self = this;
    class Powers {
        constructor(name, description) {
            this.name = name;
            this.description = description;
        }
    }


    self.addPowers = function() {
        let newPower = new Powers(self.name, self.description);
        HeroService.getSuper(newPower).then(function() {
            console.log(`in addPowers controller`);
        }).catch(function(error) {
            console.log(`error in  addPowers`, error);
        });
    };
    self.displayPowers = function() {
        HeroService.getSuper('power').then(function() {
            self.allPowers = HeroService.superArray;
        });
    };

    self.displayPowers();

}]);