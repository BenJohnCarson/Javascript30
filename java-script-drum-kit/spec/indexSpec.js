"use strict";

describe("index", function() {
    describe("#playSound", function() {
        var audioMock;

        beforeEach(function() {
            audioMock = {
                currentTime: 5,
                play: function(){}
            };


        })
        it("sets currentTime back to 0", function() {
            playSound(audioMock);
            expect(audioMock.currentTime).toEqual(0);
        })
    })
});
