"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.serialize = function (userJSON) {
        this.orgs = [];
        this.orgIds = [];
        this.dateCreated = new Date();
        this.username = userJSON.username;
        this.password = userJSON.password;
        this.createId();
    };
    // getters
    User.prototype.getId = function () { return this.userId; };
    User.prototype.getUsername = function () { return this.username; };
    User.prototype.getFirstName = function () { return this.firstName; };
    User.prototype.getMiddleName = function () { return this.middleName; };
    User.prototype.getLastName = function () { return this.lastName; };
    User.prototype.getBirthDate = function () { return this.birthDate; };
    User.prototype.getSex = function () { return this.sex; };
    User.prototype.getDateCreated = function () { return this.dateCreated; };
    User.prototype.getPrivilegeLevel = function () { return this.privilegeLevel; };
    User.prototype.getOrgs = function () { return this.orgs; };
    User.prototype.getOrgIds = function () { return this.orgIds; };
    // setters
    User.prototype.setUsername = function (newUsername) { this.username = newUsername; };
    User.prototype.setFirstName = function (newFirstName) { this.firstName = newFirstName; };
    User.prototype.setMiddleName = function (newMiddleName) { this.middleName = newMiddleName; };
    User.prototype.setLastName = function (newLastName) { this.lastName = newLastName; };
    User.prototype.setBirthDate = function (newBirthDate) { this.birthDate = newBirthDate; };
    User.prototype.setSex = function (newSex) { this.sex = newSex; };
    User.prototype.setPrivilegeLevel = function (newLevel) { this.privilegeLevel = newLevel; };
    // add
    User.prototype.addOrgId = function (orgId) { this.orgIds.push(orgId); };
    User.prototype.addOrg = function (org) { this.orgs.push(org); };
    // remove
    User.prototype.removeOrgId = function (orgId) {
        var index = this.orgIds.indexOf(orgId);
        if (index !== -1) {
            this.orgIds.splice(index, 1);
        } // if not found do nothing
    };
    User.prototype.removeOrg = function (orgId) {
        var index = -1;
        for (var i = 0; i < this.orgs.length; i += 1) {
            if (this.orgs[i].getId() === orgId) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.orgs.splice(index, 1);
        } // if not found do nothing
    };
    User.prototype.createId = function () {
        var json = JSON.parse(fs_1.readFileSync('./counter.json', 'utf8'));
        this.userId = json.userId;
        json.userId += 1;
        fs_1.writeFileSync('./counter.json', json);
    };
    return User;
}());
exports.User = User;
