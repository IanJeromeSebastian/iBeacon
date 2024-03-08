
describe('CircularRegion', function() {

    it('is defined', function() {
        expect(CircularRegion).toBeDefined();
    });

    it('has a constructor to create instances.', function() {
        // Coordinates for London, Charing Cross
        var latitude = 51.5072;
        var longitude = -0.1275;
        var radius = 200; // 200 meters of radius
		var identifier = 'charingCrossRegion';
		var charingCross = new CircularRegion(identifier, latitude, longitude, radius);

		expect(charingCross).toBeDefined();
        expect(charingCross instanceof CircularRegion).toBe(true);

		expect(charingCross.latitude).toBe(latitude);
		expect(charingCross.longitude).toBe(longitude);
		expect(charingCross.identifier).toBe(identifier);
		expect(charingCross.radius).toBe(radius);

		expect(charingCross.typeName).toBe('CircularRegion');
	});

	it('has a constructor which throws if a too small latitude is passed', function () {
		var invalidLongitude = -1000;
		var latitude = 12;
		var radius = 100;
		var identifier = 'IdentifierOfAPlace';

		expect(function () {
			new CircularRegion(identifier, latitude, invalidLongitude, radius);
		}).toThrow();
	});

	it('has a constructor which throws if a too large latitude is passed', function () {
		var longitude = 10;
		var invalidLatitude = 1112;
		var radius = 100;
		var identifier = 'IdentifierOfAPlace';

		expect(function () {
			new CircularRegion(identifier, invalidLatitude, longitude, radius);
		}).toThrow();
	});

	it('has a constructor which throws if a too small longitude is passed', function () {
		var longitude = 10;
		var invalidLatitude = -1112;
		var radius = 100;
		var identifier = 'IdentifierOfAPlace';

		expect(function () {
			new CircularRegion(identifier, invalidLatitude, longitude, radius);
		}).toThrow();
	});

	it('has a constructor which throws if a too large longitude is passed', function () {
		var longitude = 10;
		var invalidLatitude = 1112;
		var radius = 100;
		var identifier = 'IdentifierOfAPlace';

		expect(function () {
			new CircularRegion(identifier, invalidLatitude, longitude, radius);
		}).toThrow();
	});

	it('has a constructor which throws if the radius is negative', function () {
		var longitude = 10;
		var latitude = 20;
		var radius = -1;
		var identifier = 'IdentifierOfAPlace';

		expect(function () {
			new CircularRegion(identifier, latitude, longitude, radius);
		}).toThrow();
	});

	it('has a constructor which throws if the radius is not a number', function () {
		var longitude = 10;
		var latitude = 20;
		var radius = NaN;
		var identifier = 'IdentifierOfAPlace';

		expect(function () {
			new CircularRegion(identifier, latitude, longitude, radius);
		}).toThrow();
	});

	it('has a constructor which throws if the longitude is not a number', function () {
		var longitude = NaN;
		var latitude = 20;
		var radius = 19;
		var identifier = 'IdentifierOfAPlace';

		expect(function () {
			new CircularRegion(identifier, latitude, longitude, radius);
		}).toThrow();
	});

	it('has a constructor which throws if the latitude is not a number', function () {
		var longitude = 12;
		var latitude = NaN;
		var radius = 19;
		var identifier = 'IdentifierOfAPlace';

		expect(function () {
			new CircularRegion(identifier, latitude, longitude, radius);
		}).toThrow();
	});

	it('has a constructor which throws if the radius is a string', function () {
		var longitude = 10;
		var latitude = 20;
		var radius = '';
		var identifier = 'IdentifierOfAPlace';

		expect(function () {
			new CircularRegion(identifier, latitude, longitude, radius);
		}).toThrow();
	});
});