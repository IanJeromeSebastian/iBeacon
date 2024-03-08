describe("Region", function() {

    it('is defined.', function() {
        expect(Region).toBeDefined();
    });

    it('has a constructor to create instances.', function() {
        var identifier = 'dummyIdentifier';
        var region = new Region(identifier);
        expect(region).toBeDefined();

    });

    it("has a constructor setting 'identifier' properly.", function() {
        var identifier = 'asdfasfsa';
        var region = new Region(identifier);
        expect(region instanceof Region).toBe(true);
        expect(region.identifier).toEqual(identifier);
    });

	it('has a constructor that throws if an undefined identifier is passed in', function() {
		var invalidIdentifier = undefined;
		expect(function(){
			new Region(invalidIdentifier);
		}).toThrow();
	});

	it('has a constructor that throws if an NaN identifier is passed in', function() {
		var invalidIdentifier = NaN;
		expect(function(){
			new Region(invalidIdentifier);
		}).toThrow();
	});

	it('has a constructor that throws if an empty string identifier is passed in', function() {
		var invalidIdentifier = '';
		expect(function(){
			new Region(invalidIdentifier);
		}).toThrow();
	});

	it('has a constructor that throws if an Number identifier is passed in', function() {
		var invalidIdentifier = 12.5;
		expect(function(){
			new Region(invalidIdentifier);
		}).toThrow();
	});

	it('has a constructor that throws if an null identifier is passed in', function() {
		var invalidIdentifier = null;
		expect(function(){
			new Region(invalidIdentifier);
		}).toThrow();
	});

});
