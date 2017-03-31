"use strict";

describe("index", function() {
    describe("#playSound", function() {
        var audioMock;

        beforeEach(function() {
            audioMock = {
                currentTime: 5,
                play: function(){}
            };

            spyOn(audioMock, 'play');
            playSound(audioMock);
        });
        it("sets currentTime back to 0", function() {
            expect(audioMock.currentTime).toEqual(0);
        });

        it("calls play on audio", function() {
            expect(audioMock.play).toHaveBeenCalled();
        });
    });

    describe("#addPlaying", function() {
        var keyMock, classListMock, add;

        beforeEach(function() {
            add = jasmine.createSpy('add');
            classListMock = {
                add: add
            }
            keyMock = {
                classList: classListMock
            }
        })

        it("adds 'playing' to classList", function() {
            addPlaying(keyMock);
            expect(keyMock.classList.add).toHaveBeenCalledWith('playing');
        })
    })

    describe("#removePlaying", function() {
        var keyMock, classListMock, remove;

        beforeEach(function() {
            remove = jasmine.createSpy('remove');
            classListMock = {
                remove: remove
            };
            keyMock = {
                classList: classListMock
            };
        })

        it("removes 'playing' to classList", function() {
            removePlaying(keyMock);
            expect(keyMock.classList.remove).toHaveBeenCalledWith('playing');
        })
    })
});
