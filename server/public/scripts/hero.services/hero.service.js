app.service('HeroService', function($http) {


    console.log(`in HeroService`);
    let self = this;
    let superArray = [];

    self.getSuper = function(url) {
        console.log(`in GET super service`);
        return $http({
            method: 'GET',
            url: `/${url}`
        }).then((response) => {
            console.log(response);
            console.log(`${url}`);
            self.superArray = response.data;
        }).catch((error) => {
            console.log(`error getting all super:`, error);
        });

    };


    self.postSuper = function(url) {

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
    self.updateSuper = function(url) {

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

    self.deleteSuper = function(url) {
        console.log('Delete!');
        console.log(superDelete);
        if (confirm('You gonna Kill Me?')) {
            $http({
                method: 'DELETE',
                url: `/${url}/${url._id}`
            }).then(function(response) {
                self.getSuper();

            }).catch(function(error) {
                console.log('Error from DELETE', error);

            })
        }

    }

});