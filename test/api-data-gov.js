var chakram = require('chakram');
var expect = chakram.expect;

var base_url = 'https://api.data.gov/nrel';
var endpoint_root = '/alt-fuel-stations/v1/';

var api_key = 'Eeahw31qwW1CxUduQrSbGjKC2ZZNuSzqgMdS6afJ';
var ev_network = 'ChargePoint+Network';
var location = 'Austin+TX';

describe('ChargePoint Network in Austin, TX', function() {

  var station_id;

  it('should contain station with name HYATT AUSTIN', function() {
    var response = chakram.get(base_url + endpoint_root + 'nearest?format=json&api_key=' + api_key + '&location=' + location + '&ev_network=' + ev_network);
    expect(response).to.have.status(200);
    expect(response).to.have.header('content-type', 'application/json; charset=utf-8');
    expect(response).to.have.json('fuel_stations', function(fuel_stations) {
      var stations = fuel_stations.filter(function(station) {
        return station.station_name === 'HYATT AUSTIN';
      });
      expect(stations).to.have.length(1);
      var s = stations[0];
      expect(s.station_name).to.equal('HYATT AUSTIN');
      station_id = s.id;
    });
    return chakram.wait();
  });


  it('should have correct address for HYATT AUSTIN station', function() {
    var response = chakram.get(base_url + endpoint_root + station_id + '?format=json&api_key=' + api_key + '&location=' + location + '&ev_network=' + ev_network);
    expect(response).to.have.status(200);
    expect(response).to.have.header('content-type', 'application/json; charset=utf-8');
    expect(response).to.have.json('alt_fuel_station.street_address', '208 Barton Springs Rd');
    expect(response).to.have.json('alt_fuel_station.city', 'Austin');
    expect(response).to.have.json('alt_fuel_station.state', 'TX');
    expect(response).to.have.json('alt_fuel_station.zip', '78704');
    return chakram.wait();
  });

});
