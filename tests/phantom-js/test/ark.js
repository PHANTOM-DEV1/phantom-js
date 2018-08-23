var Buffer = require("buffer/").Buffer;
var should = require("should");
var phantom = require("../index.js");

describe("Phantom JS", function () {

	it("should be ok", function () {
		(phantom).should.be.ok;
	});

	it("should be object", function () {
		(phantom).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(phantom).should.have.property(property);
		});
	});

});
