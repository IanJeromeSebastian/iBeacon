describe('Delegate', function() {

    it('is defined.', function() {
        expect(Delegate).toBeDefined();
    });

    it('has a constructor to create instances.', function() {
        var delegate = new Delegate();
        expect(delegate).toBeDefined();
        expect(delegate instanceof Delegate).toBe(true);
    });

});


