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
// register root file untuk menggunakan sourcemap
require("source-map-support/register");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
// import mongodb from 'mongodb'
var mongoose_1 = __importDefault(require("mongoose"));
// import {Customer, CustomerType} from './mongodb'
var mongoose_2 = require("./mongoose");
function initApp() {
    return __awaiter(this, void 0, void 0, function () {
        var app, error_1, customerModel, accountModel, transactionModel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = express_1.default();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongoose_1.default.connect("" + process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
                            if (err) {
                                console.log("DB CONNECTION ERROR");
                            }
                            else {
                                console.log("DB Connection Success");
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log('DB Connection Failed');
                    return [3 /*break*/, 4];
                case 4:
                    customerModel = new mongoose_2.Customer();
                    accountModel = new mongoose_2.Account();
                    transactionModel = new mongoose_2.Transaction();
                    app.use(body_parser_1.default.json());
                    //Customer
                    app.post('/customer', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, customerModel.create(req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_2 = _a.sent();
                                        return [2 /*return*/, next(error_2)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.get('/customer', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var customers, error_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, customerModel.getAll()];
                                    case 1:
                                        customers = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_3 = _a.sent();
                                        return [2 /*return*/, next(error_3)];
                                    case 3: return [2 /*return*/, res.send(customers)];
                                }
                            });
                        });
                    });
                    app.get('/customer/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var customer, error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, customerModel.getByID(req.params.id)];
                                    case 1:
                                        customer = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_4 = _a.sent();
                                        return [2 /*return*/, next(error_4)];
                                    case 3: return [2 /*return*/, res.send(customer)];
                                }
                            });
                        });
                    });
                    app.put('/customer/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_5;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, customerModel.update(req.params.id, req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_5 = _a.sent();
                                        return [2 /*return*/, next(error_5)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.delete('/customer/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_6;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, customerModel.delete(req.params.id)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_6 = _a.sent();
                                        return [2 /*return*/, next(error_6)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    // Account
                    app.post('/account', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_7;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, accountModel.create(req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_7 = _a.sent();
                                        return [2 /*return*/, next(error_7)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.get('/account', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var accounts, error_8;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, accountModel.getAll()];
                                    case 1:
                                        accounts = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_8 = _a.sent();
                                        return [2 /*return*/, next(error_8)];
                                    case 3: return [2 /*return*/, res.send(accounts)];
                                }
                            });
                        });
                    });
                    app.get('/account/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var account, error_9;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, accountModel.getByID(req.params.id)];
                                    case 1:
                                        account = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_9 = _a.sent();
                                        return [2 /*return*/, next(error_9)];
                                    case 3: return [2 /*return*/, res.send(account)];
                                }
                            });
                        });
                    });
                    app.put('/account:/id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_10;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, accountModel.update(req.params.id, req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_10 = _a.sent();
                                        return [2 /*return*/, next(error_10)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.delete('/account/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_11;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, accountModel.delete(req.params.id)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_11 = _a.sent();
                                        return [2 /*return*/, next(error_11)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    // Transaction
                    // create transaction
                    app.post('/trans', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_12;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, transactionModel.create(req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_12 = _a.sent();
                                        return [2 /*return*/, next(error_12)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    // get all transaction
                    app.get('/trans', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var transc, error_13;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, transactionModel.getAll()];
                                    case 1:
                                        transc = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_13 = _a.sent();
                                        return [2 /*return*/, next(error_13)];
                                    case 3: return [2 /*return*/, res.send(transc)];
                                }
                            });
                        });
                    });
                    // get transaction by id
                    app.get('/trans/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var transc, error_14;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, transactionModel.getByID(req.params.id)];
                                    case 1:
                                        transc = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_14 = _a.sent();
                                        return [2 /*return*/, next(error_14)];
                                    case 3: return [2 /*return*/, res.send(transc)];
                                }
                            });
                        });
                    });
                    // update transaction by id
                    app.put('/trans/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_15;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, transactionModel.update(req.params.id, req.body)];
                                    case 1:
                                        _a.sent();
                                        res.send({ success: true });
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_15 = _a.sent();
                                        return [2 /*return*/, next(error_15)];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        });
                    });
                    // delete transaction
                    app.delete('/trans/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_16;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, transactionModel.delete(req.params.id)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_16 = _a.sent();
                                        return [2 /*return*/, next(error_16)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.use(function (err, req, res, next) {
                        res.status(500).send({
                            success: false,
                            message: err.message
                        });
                    });
                    app.listen(process.env.PORT || 8000, function () {
                        console.log("App listen on port " + (process.env.PORT || 8000));
                    });
                    return [2 /*return*/];
            }
        });
    });
}
initApp();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBaUQ7QUFDakQsdUNBQW9DO0FBRXBDLGtEQUEyQjtBQUMzQixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRWYsb0RBQTZCO0FBQzdCLDREQUFvQztBQUVwQyxnQ0FBZ0M7QUFDaEMsc0RBQStCO0FBQy9CLG1EQUFtRDtBQUNuRCx1Q0FBcUc7QUFFckcsU0FBZSxPQUFPOzs7Ozs7b0JBQ2QsR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQTs7OztvQkFHbkIscUJBQU0sa0JBQVEsQ0FBQyxPQUFPLENBQUMsS0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQWEsRUFBRSxFQUFFLGVBQWUsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLEVBQUUsVUFBQSxHQUFHOzRCQUMxRyxJQUFHLEdBQUcsRUFBQztnQ0FDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7NkJBQ25DO2lDQUFJO2dDQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTs2QkFDckM7d0JBQ0gsQ0FBQyxDQUFDLEVBQUE7O29CQU5GLFNBTUUsQ0FBQTs7OztvQkFFRixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7OztvQkFVL0IsYUFBYSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO29CQUM5QixZQUFZLEdBQUcsSUFBSSxrQkFBTyxFQUFFLENBQUE7b0JBQzVCLGdCQUFnQixHQUFHLElBQUksc0JBQVcsRUFBRSxDQUFBO29CQUUxQyxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtvQkFHMUIsVUFBVTtvQkFDVixHQUFHLENBQUMsSUFBSSxDQUFD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