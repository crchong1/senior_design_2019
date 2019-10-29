"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var Organization = /** @class */ (function () {
    // getter and setter methods
    function Organization() {
        this.orgAdminIds = [];
        this.orgWorkerIds = [];
        this.orgClients = [];
        this.orgWorkers = [];
        this.createId();
    }
    // getters
    Organization.prototype.getId = function () { return this.orgId; };
    Organization.prototype.getName = function () { return this.orgName; };
    Organization.prototype.getDescription = function () { return this.orgDescription; };
    Organization.prototype.getAdminIds = function () { return this.orgAdminIds; };
    Organization.prototype.getWorkerIds = function () { return this.orgWorkerIds; };
    Organization.prototype.getWorkers = function () { return this.orgWorkers; };
    Organization.prototype.getClients = function () { return this.orgClients; };
    Organization.prototype.getClientIds = function () { return this.orgClientIds; };
    Organization.prototype.addWorker = function (orgWorker) {
        this.orgWorkers.push(orgWorker);
        this.orgWorkerIds.push(orgWorker.getId());
    };
    Organization.prototype.addClient = function (client) {
        this.orgClients.push(client);
        this.orgClientIds.push(client.getId());
    };
    Organization.prototype.createId = function () {
        var json = JSON.parse(fs_1.readFileSync('./counter.json', 'utf8'));
        this.orgId = json.orgId;
        json.orgId += 1;
        fs_1.writeFileSync('./counter.json', json);
    };
    Organization.prototype.toJSON = function () {
        return JSON.stringify({
            orgId: this.orgId,
            orgName: this.orgName,
            orgDescription: this.orgDescription,
            orgAdminIds: this.orgAdminIds,
            orgWorkerIds: this.orgWorkerIds,
            orgClientsIds: this.orgClientIds
        });
    };
    return Organization;
}());
exports["default"] = Organization;
