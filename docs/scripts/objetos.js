
const sportResponse = {
    "categories": [
        "sport"
    ],
    "created_at": "2020-01-05 13:42:19.576875",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "7jwk7xbwrp-h-nw233wqmq",
    "updated_at": "2020-01-05 13:42:19.576875",
    "url": "https://api.chucknorris.io/jokes/7jwk7xbwrp-h-nw233wqmq",
    "value": "Chuck Norris used to play baseball. When Babe Ruth was hailed as the better player, Chuck Norris killed him with a baseball bat to the throat. Lou Gehrig got off easy."
}

const devResponse = {
    "categories": [
        "dev"
    ],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "mgdb9q1wqb6_gurzp_5bga",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/mgdb9q1wqb6_gurzp_5bga",
    "value": "Chuck Norris writes code that optimizes itself."
}

const userResponse = {
    "id": 1,
    "url": "https://www.tvmaze.com/people/1/mike-vogel",
    "name": "Mike Vogel",
    "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
    },
    "birthday": "1979-07-17",
    "deathday": null,
    "gender": "Male",
    "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"
    },
    "updated": 1712003378,
    "_links": {
        "self": {
            "href": "https://api.tvmaze.com/people/1"
        }
    }
}

const charactersResponse = {
    "id": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
    "name": "Harry Potter",
    "alternate_names": [
        "The Boy Who Lived",
        "The Chosen One",
        "Undesirable No. 1",
        "Potty"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": {
        "wood": "holly",
        "core": "phoenix tail feather",
        "length": 11
    },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alternate_actors": [],
    "alive": true,
    "image": "https://ik.imagekit.io/hpapi/harry.jpg"
}

window.charactersResponse = charactersResponse;
window.userResponse = userResponse;
window.devResponse = devResponse;
window.sportResponse = sportResponse;