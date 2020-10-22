"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.Account = exports.Customer = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
// customer schema definition
var CustomerSchema = new mongoose_1.default.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    customer_type: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip_code: { type: String, required: true },
    phone_number: { type: String, default: '808080808080' },
});
//account schema definition
var AccountSchema = new mongoose_1.default.Schema({
    customer_id: { type: String, required: true },
    balance: { type: Number, required: true },
    account_type: { type: String, required: true },
});
//transaction schema definition
var TransactionSchema = new mongoose_1.default.Schema({
    customer_id: { type: String, required: true },
    transc_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: Date.now },
    type: { type: String, required: true },
    details: {
        acc_from: { type: String, required: true },
        acc_to: { type: String, required: true },
        amount: { type: Number, required: true },
    }
});
// CRUD customer
var Customer = /** @class */ (function () {
    function Customer() {
        this.model = mongoose_1.default.model('customer', CustomerSchema);
    }
    Customer.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.create(data)];
                    case 1:
                        result = _a.sent();
                        console.log('Insert result %j', result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Customer.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customers, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.find({})];
                    case 1:
                        customers = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/, customers];
                }
            });
        });
    };
    Customer.prototype.getByID = function (customerID) {
        return __awaiter(this, void 0, void 0, function () {
            var customer, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findById(customerID)];
                    case 1:
                        customer = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/, customer];
                }
            });
        });
    };
    Customer.prototype.update = function (customerID, data) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findByIdAndUpdate(customerID, { $set: data })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Customer.prototype.delete = function (customerID) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findByIdAndDelete(customerID)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Customer;
}());
exports.Customer = Customer;
// account CRUD
var Account = /** @class */ (function () {
    function Account() {
        this.model = mongoose_1.default.model('account', AccountSchema);
    }
    // create accout
    Account.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.create(data)];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //get all account
    Account.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var accounts, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.find({})];
                    case 1:
                        accounts = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        throw error_7;
                    case 3: return [2 /*return*/, accounts];
                }
            });
        });
    };
    // get account by id
    Account.prototype.getByID = function (accountID) {
        return __awaiter(this, void 0, void 0, function () {
            var account, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findById(accountID)];
                    case 1:
                        account = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_8 = _a.sent();
                        throw error_8;
                    case 3: return [2 /*return*/, account];
                }
            });
        });
    };
    // update account
    Account.prototype.update = function (accountID, data) {
        return __awaiter(this, void 0, void 0, function () {
            var error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findByIdAndUpdate(accountID, { $set: data })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_9 = _a.sent();
                        throw error_9;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // delete account
    Account.prototype.delete = function (accountID) {
        return __awaiter(this, void 0, void 0, function () {
            var error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findByIdAndDelete(accountID)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_10 = _a.sent();
                        throw error_10;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Account;
}());
exports.Account = Account;
// Transaction CRUD
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.model = mongoose_1.default.model('transaction', TransactionSchema);
    }
    // get transaction
    Transaction.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.create(data)];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_11 = _a.sent();
                        throw error_11;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // get all transaction
    Transaction.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var transc, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.find({})];
                    case 1:
                        transc = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_12 = _a.sent();
                        throw error_12;
                    case 3: return [2 /*return*/, transc];
                }
            });
        });
    };
    // get transaction by id
    Transaction.prototype.getByID = function (transcID) {
        return __awaiter(this, void 0, void 0, function () {
            var transc, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findById(transcID)];
                    case 1:
                        transc = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_13 = _a.sent();
                        throw error_13;
                    case 3: return [2 /*return*/, transc];
                }
            });
        });
    };
    // update transaction
    Transaction.prototype.update = function (transcID, data) {
        return __awaiter(this, void 0, void 0, function () {
            var error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data.update_date = new Date; //save date update
                        return [4 /*yield*/, this.model.findByIdAndUpdate(transcID, { $set: data })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_14 = _a.sent();
                        throw error_14;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // delete transaction
    Transaction.prototype.delete = function (transcID) {
        return __awaiter(this, void 0, void 0, function () {
            var error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findByIdAndDelete(transcID)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_15 = _a.sent();
                        throw error_15;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Transaction;
}());
exports.Transaction = Transaction;
// arisudana
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbW9uZ29vc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0RBQTJDO0FBb0MzQyw2QkFBNkI7QUFDN0IsSUFBTSxjQUFjLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDMUMsU0FBUyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ3hDLEdBQUcsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUNsQyxhQUFhLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDNUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ3JDLElBQUksRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUNuQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDcEMsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ3ZDLFlBQVksRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBQztDQUNyRCxDQUFDLENBQUE7QUFFRiwyQkFBMkI7QUFDM0IsSUFBTSxhQUFhLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQztJQUN4QyxXQUFXLEVBQUcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDM0MsT0FBTyxFQUFHLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ3ZDLFlBQVksRUFBRyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztDQUM3QyxDQUFDLENBQUE7QUFFRiwrQkFBK0I7QUFDL0IsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDO0lBQzVDLFdBQVcsRUFBRyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUMzQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ2hELFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDaEQsSUFBSSxFQUFHLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ3BDLE9BQU8sRUFBRztRQUNSLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztRQUN2QyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7UUFDckMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0tBQ3RDO0NBQ0YsQ0FBQyxDQUFBO0FBRUYsZ0JBQWdCO0FBQ2hCO0lBR0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUsseUJBQU0sR0FBWixVQUFhLElBQWtCOzs7Ozs7O3dCQUVaLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBdEMsTUFBTSxHQUFHLFNBQTZCO3dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFBOzs7O3dCQUV2QyxNQUFNLE9BQUssQ0FBQTs7Ozs7S0FFZDtJQUVLLHlCQUFNLEdBQVo7Ozs7Ozs7d0JBSWdCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBckMsU0FBUyxHQUFHLFNBQXlCLENBQUE7Ozs7d0JBRXJDLE1BQU0sT0FBSyxDQUFBOzRCQUdiLHNCQUFPLFNBQVMsRUFBQTs7OztLQUNqQjtJQUVLLDBCQUFPLEdBQWIsVUFBYyxVQUFrQjs7Ozs7Ozt3QkFHakIscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFoRCxRQUFRLEdBQUcsU0FBcUMsQ0FBQTs7Ozt3QkFFaEQsTUFBTSxPQUFLLENBQUE7NEJBR2Isc0JBQU8sUUFBUSxFQUFBOzs7O0tBQ2hCO0lBRUsseUJBQU0sR0FBWixVQUFhLFVBQWtCLEVBQUUsSUFBMkI7Ozs7Ozs7d0JBR3hELHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUE7O3dCQUE5RCxTQUE4RCxDQUFBOzs7O3dCQUU5RCxNQUFNLE9BQUssQ0FBQTs7Ozs7S0FFZDtJQUVLLHlCQUFNLEdBQVosVUFBYSxVQUFrQjs7Ozs7Ozt3QkFHM0IscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQTlDLFNBQThDLENBQUE7Ozs7d0JBRTlDLE1BQU0sT0FBSyxDQUFBOzs7OztLQUVkO0lBQ0gsZUFBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUF4RFksNEJBQVE7QUEwRHJCLGVBQWU7QUFDZjtJQUdFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUVELGdCQUFnQjtJQUNWLHdCQUFNLEdBQVosVUFBYSxJQUFpQjs7Ozs7Ozt3QkFFWCxxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXRDLE1BQU0sR0FBRyxTQUE2Qjs7Ozt3QkFFNUMsTUFBTSxPQUFLLENBQUE7Ozs7O0tBRWQ7SUFFRCxpQkFBaUI7SUFDWCx3QkFBTSxHQUFaOzs7Ozs7O3dCQUllLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBcEMsUUFBUSxHQUFHLFNBQXlCLENBQUE7Ozs7d0JBRXBDLE1BQU0sT0FBSyxDQUFBOzRCQUdiLHNCQUFPLFFBQVEsRUFBQTs7OztLQUNoQjtJQUVELG9CQUFvQjtJQUNkLHlCQUFPLEdBQWIsVUFBYyxTQUFpQjs7Ozs7Ozt3QkFHakIscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUE5QyxPQUFPLEdBQUcsU0FBb0MsQ0FBQTs7Ozt3QkFFOUMsTUFBTSxPQUFLLENBQUE7NEJBR2Isc0JBQU8sT0FBTyxFQUFBOzs7O0tBQ2Y7SUFFRCxpQkFBaUI7SUFDWCx3QkFBTSxHQUFaLFVBQWEsU0FBaUIsRUFBRSxJQUE4Qjs7Ozs7Ozt3QkFFMUQscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQTs7d0JBQTdELFNBQTZELENBQUE7Ozs7d0JBRTdELE1BQU0sT0FBSyxDQUFBOzs7OztLQUVkO0lBRUQsaUJBQWlCO0lBQ1gsd0JBQU0sR0FBWixVQUFhLFNBQWlCOzs7Ozs7O3dCQUUxQixxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBN0MsU0FBNkMsQ0FBQTs7Ozt3QkFFN0MsTUFBTSxRQUFLLENBQUE7Ozs7O0tBRWQ7SUFFSCxjQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSwwQkFBTztBQTZEcEIsbUJBQW1CO0FBQ25CO0lBR0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFFRCxrQkFBa0I7SUFDWiw0QkFBTSxHQUFaLFVBQWEsSUFBcUI7Ozs7Ozs7d0JBRWYscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF0QyxNQUFNLEdBQUcsU0FBNkI7Ozs7d0JBRTVDLE1BQU0sUUFBSyxDQUFBOzs7OztLQUVkO0lBRUQsc0JBQXNCO0lBQ2hCLDRCQUFNLEdBQVo7Ozs7Ozs7d0JBSWEscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUE7O3dCQUFsQyxNQUFNLEdBQUcsU0FBeUIsQ0FBQTs7Ozt3QkFFbEMsTUFBTSxRQUFLLENBQUE7NEJBR2Isc0JBQU8sTUFBTSxFQUFBOzs7O0tBQ2Q7SUFFRCx3QkFBd0I7SUFDbEIsNkJBQU8sR0FBYixVQUFjLFFBQWdCOzs7Ozs7O3dCQUdqQixxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0JBQTVDLE1BQU0sR0FBRyxTQUFtQyxDQUFBOzs7O3dCQUU1QyxNQUFNLFFBQUssQ0FBQTs0QkFHYixzQkFBTyxNQUFNLEVBQUE7Ozs7S0FDZDtJQUVELHFCQUFxQjtJQUNmLDRCQUFNLEdBQVosVUFBYSxRQUFnQixFQUFFLElBQWtDOzs7Ozs7O3dCQUU3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFBLENBQUMsa0JBQWtCO3dCQUM5QyxxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFBOzt3QkFBNUQsU0FBNEQsQ0FBQTs7Ozt3QkFFNUQsTUFBTSxRQUFLLENBQUE7Ozs7O0tBRWQ7SUFFRCxxQkFBcUI7SUFDZiw0QkFBTSxHQUFaLFVBQWEsUUFBZ0I7Ozs7Ozs7d0JBR3pCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUE1QyxTQUE0QyxDQUFBOzs7O3dCQUU1QyxNQUFNLFFBQUssQ0FBQTs7Ozs7S0FFZDtJQUVILGtCQUFDO0FBQUQsQ0FBQyxBQTdERCxJQTZEQztBQTdEWSxrQ0FBVztBQStEeEIsWUFBWSJ9