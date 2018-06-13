app.service('HeroService', function($http) {


    console.log(`in HeroService`);
    let self = this;
    let powersArray = [];

    self.getPowers = function() {
        console.log(`in GET powers service`);
        return $http({
            method: 'GET',
            url: '/power'
        }).then((response) => {
            console.log(response);
            self.powersArray = response.data;
        }).catch((error) => {
            console.log(`error getting all songs:`, error);
        });

    }


    self.postListing = function(newPower) {

        return $http({
            method: 'POST',
            url: '/power',
            data: newPower
        }).then((response) => {
            console.log('back from POST with:', response);
        }).catch((error) => {
            console.log('back from POST with:', error);
        });
    };
    self.updatePowers = function() {

        return $http({
            method: 'PUT',
            url: '/power',
            data: req.params
        }).then((response) => {
            console.log('back from POST with:', req.params);
        }).catch((error) => {
            console.log('back from POST with:', error);
        });
    }

});