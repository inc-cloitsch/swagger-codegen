/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.UserApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * This is a sample server Petstore server.  You can find out more about Swagger at &lt;a href=\&quot;http://swagger.io\&quot;&gt;http://swagger.io&lt;/a&gt; or on irc.freenode.net, #swagger.  For this sample, you can use the api key \&quot;special-key\&quot; to test the authorization filters
 * Version: 1.0.0
 * Generated at: 2016-02-02T00:45:38.616-07:00
 * Generated by: class io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
/**
 * @license Apache 2.0
 * http://www.apache.org/licenses/LICENSE-2.0.html
 */

goog.provide('API.Client.UserApi');

goog.require('API.Client.User');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.UserApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('UserApiBasePath') ?
                   /** @type {!string} */ ($injector.get('UserApiBasePath')) :
                   'http://petstore.swagger.io/v2';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('UserApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('UserApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @private {!Object} */
  this.httpParamSerializer_ = $injector.get('$httpParamSerializer');
}
API.Client.UserApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * Create user
 * This can only be done by the logged in user.
 * @param {!User=} opt_body Created user object
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.createUser = function(opt_body, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/user';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_body,
    
    
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return this.http_(httpRequestParams);
}

/**
 * Creates list of users with given input array
 * 
 * @param {!Array<!API.Client.User>=} opt_body List of user object
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.createUsersWithArrayInput = function(opt_body, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/user/createWithArray';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_body,
    
    
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return this.http_(httpRequestParams);
}

/**
 * Creates list of users with given input array
 * 
 * @param {!Array<!API.Client.User>=} opt_body List of user object
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.createUsersWithListInput = function(opt_body, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/user/createWithList';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_body,
    
    
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return this.http_(httpRequestParams);
}

/**
 * Logs user into the system
 * 
 * @param {!string=} opt_username The user name for login
 * @param {!string=} opt_password The password for login in clear text
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!string>}
 */
API.Client.UserApi.prototype.loginUser = function(opt_username, opt_password, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/user/login';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  if (opt_username !== undefined) {
    queryParameters['username'] = opt_username;
  }

  if (opt_password !== undefined) {
    queryParameters['password'] = opt_password;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
    
    
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return this.http_(httpRequestParams);
}

/**
 * Logs out current logged in user session
 * 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.logoutUser = function(opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/user/logout';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
    
    
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return this.http_(httpRequestParams);
}

/**
 * Get user by user name
 * 
 * @param {!string} username The name that needs to be fetched. Use user1 for testing.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.getUserByName = function(username, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/user/{username}'
      .replace('{' + 'username' + '}', String(username));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  // verify required parameter 'username' is set
  if (!username) {
    throw new Error('Missing required parameter username when calling getUserByName');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
    
    
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return this.http_(httpRequestParams);
}

/**
 * Updated user
 * This can only be done by the logged in user.
 * @param {!string} username name that need to be deleted
 * @param {!User=} opt_body Updated user object
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.updateUser = function(username, opt_body, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/user/{username}'
      .replace('{' + 'username' + '}', String(username));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  // verify required parameter 'username' is set
  if (!username) {
    throw new Error('Missing required parameter username when calling updateUser');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: opt_body,
    
    
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return this.http_(httpRequestParams);
}

/**
 * Delete user
 * This can only be done by the logged in user.
 * @param {!string} username The name that needs to be deleted
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.deleteUser = function(username, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/user/{username}'
      .replace('{' + 'username' + '}', String(username));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders);
  // verify required parameter 'username' is set
  if (!username) {
    throw new Error('Missing required parameter username when calling deleteUser');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'DELETE',
    url: path,
    json: true,
    
    
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return this.http_(httpRequestParams);
}