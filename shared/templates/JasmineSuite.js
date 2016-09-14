/**ignore at merge**/
//:import CurrentSDK
//:include _TAGPATH_

/*
 * Jasmine tests are well known unit tests supporting API used by mocha and
 * other test runners. Please see more info about how to use them online.
 */
var suite = describe("when song has been paused", function() {

  var tag = null;

  beforeEach(function() {
    tag = new _TAG_({
      name: "Specify a name here"
    });
  });

  afterEach(function() {

  });

  it("shall fail as true is never falsy...", function() {
    expect(true).toBeFalsy();
  });

  it("it shall not fail as true is naturally true...", function() {
    expect(true).toBeTruthy();
  });

  it("it shall again not fail as true is naturally true...", function() {
    expect(true).toBeTruthy();
  });

  it("shall fail later, in two seconds", function() {
    var flag = false;

    setTimeout(function() {
      flag = true;
    }, 2000);

    waitsFor(function() {
      return flag;
    }, "timed out", 5000);

    runs(function() {
      expect(flag).toEqual("not expected value");
    });
  });
});

qubit.opentag.Utils.namespace('_PACKAGE_.local.JasmineSuite', suite);
