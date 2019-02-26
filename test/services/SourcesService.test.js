import SourcesService from '../../src/js/services/SourcesService.js';
import Utils from '../../src/js/core/Utils.js';

describe("SourcesService", function () {
  let sourceService;

  beforeEach(function () {
    sourceService = new SourcesService();
  });

  afterEach(function () {

  });

  it("should test something", function () {
    expect(1).toBeTruthy();
  });

  it("getAllSouces should call Utils.sendRequestForJson", function () {
    let utils = new Utils();
    spyOn(utils, 'sendRequestForJson').and.returnValue(true);
    sourceService.getAllSouces();
    
    expect(utils.sendRequestForJson).toHaveBeenCalledTimes(1);
  });
});

