/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _modelJobsPutJobRequest = require('../model/JobsPutJobRequest');

var _modelJobsPutJobRequest2 = _interopRequireDefault(_modelJobsPutJobRequest);

var _modelJobsPutJobResponse = require('../model/JobsPutJobResponse');

var _modelJobsPutJobResponse2 = _interopRequireDefault(_modelJobsPutJobResponse);

/**
* SchedulerService service.
* @module api/SchedulerServiceApi
* @version 1.0
*/

var SchedulerServiceApi = (function () {

  /**
  * Constructs a new SchedulerServiceApi. 
  * @alias module:api/SchedulerServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */

  function SchedulerServiceApi(apiClient) {
    _classCallCheck(this, SchedulerServiceApi);

    this.apiClient = apiClient || _ApiClient2['default'].instance;
  }

  /**
   * @param {module:model/JobsPutJobRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobsPutJobResponse} and HTTP response
   */

  SchedulerServiceApi.prototype.putJobWithHttpInfo = function putJobWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putJob");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelJobsPutJobResponse2['default'];

    return this.apiClient.callApi('/scheduler/jobs', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * @param {module:model/JobsPutJobRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobsPutJobResponse}
   */

  SchedulerServiceApi.prototype.putJob = function putJob(body) {
    return this.putJobWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  return SchedulerServiceApi;
})();

exports['default'] = SchedulerServiceApi;
module.exports = exports['default'];