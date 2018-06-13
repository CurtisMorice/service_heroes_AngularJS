app.service('HeroService', function($http) {


    console.log(`in HeroService`);
    let self = this;
    let powersArray = [];

    self.getPowers = function(url) {
        console.log(`in GET powers service`);
        return $http({
            method: 'GET',
            url: `/${url}`
        }).then((response) => {
            console.log(response);
            self.powersArray = response.data;
        }).catch((error) => {
            console.log(`error getting all songs:`, error);
        });

    }


    self.postPowers = function(url) {

        return $http({
            method: 'POST',
            url: `/${url}`,
            data: self.newPower
        }).then((response) => {
            console.log('back from POST with:', response);
        }).catch((error) => {
            console.log('back from POST with:', error);
        });
    }; // end of Power post

    self.postHeroes = function(url) {

        return $http({
            method: 'POST',
            url: `/${url}`,
            data: self.newHero
        }).then((response) => {
            console.log('back from POST with:', response);
        }).catch((error) => {
            console.log('back from POST with:', error);
        });
    };
    self.updatePowers = function(url) {

        return $http({
            method: 'PUT',
            url: `/${url}`,
            data: self.req.params
        }).then((response) => {
            console.log('back from POST with:', req.params);
        }).catch((error) => {
            console.log('back from POST with:', error);
        });
    };

});