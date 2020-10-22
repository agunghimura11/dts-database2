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
        var app, customerModel, accountModel, transactionModel;
        return __generator(this, function (_a) {
            app = express_1.default();
            // //init db
            // const connection = await mongodb.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser:true, useUnifiedTopology: true })
            // const db = connection.db(`${process.env.MONGODB_NAME}`)
            // const customerModel = new Customer(db)
            // init mongose db
            mongoose_1.default.connect("" + process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
            customerModel = new mongoose_2.Customer();
            accountModel = new mongoose_2.Account();
            transactionModel = new mongoose_2.Transaction();
            app.use(body_parser_1.default.json());
            //Customer
            app.post('/customer', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, customerModel.create(req.body)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                return [2 /*return*/, next(error_1)];
                            case 3:
                                res.send({ success: true });
                                return [2 /*return*/];
                        }
                    });
                });
            });
            app.get('/customer', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var customers, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, customerModel.getAll()];
                            case 1:
                                customers = _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _a.sent();
                                return [2 /*return*/, next(error_2)];
                            case 3: return [2 /*return*/, res.send(customers)];
                        }
                    });
                });
            });
            app.get('/customer/:id', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var customer, error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, customerModel.getByID(req.params.id)];
                            case 1:
                                customer = _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_3 = _a.sent();
                                return [2 /*return*/, next(error_3)];
                            case 3: return [2 /*return*/, res.send(customer)];
                        }
                    });
                });
            });
            app.put('/customer', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var error_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, customerModel.update(req.params.id, req.body)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_4 = _a.sent();
                                return [2 /*return*/, next(error_4)];
                            case 3:
                                res.send({ success: true });
                                return [2 /*return*/];
                        }
                    });
                });
            });
            app.delete('/customer', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var error_5;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, customerModel.delete(req.params.id)];
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
            // Account
            app.post('/account', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var error_6;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, accountModel.create(req.body)];
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
            app.get('/account', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var accounts, error_7;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, accountModel.getAll()];
                            case 1:
                                accounts = _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_7 = _a.sent();
                                return [2 /*return*/, next(error_7)];
                            case 3: return [2 /*return*/, res.send(accounts)];
                        }
                    });
                });
            });
            app.get('/account/:id', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var account, error_8;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, accountModel.getByID(req.params.id)];
                            case 1:
                                account = _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_8 = _a.sent();
                                return [2 /*return*/, next(error_8)];
                            case 3: return [2 /*return*/, res.send(account)];
                        }
                    });
                });
            });
            app.put('/account', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var error_9;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, accountModel.update(req.params.id, req.body)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_9 = _a.sent();
                                return [2 /*return*/, next(error_9)];
                            case 3:
                                res.send({ success: true });
                                return [2 /*return*/];
                        }
                    });
                });
            });
            app.delete('/account', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var error_10;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, accountModel.delete(req.params.id)];
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
            // Transaction
            app.post('/trans', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            });
            app.get('/trans', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            });
            app.get('/trans/:id', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            });
            app.put('/trans/:id', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                });
            });
            app.delete('/trans/:id', function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/];
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
        });
    });
}
initApp();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBaUQ7QUFDakQsdUNBQW9DO0FBRXBDLGtEQUEyQjtBQUMzQixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRWYsb0RBQTZCO0FBQzdCLDREQUFvQztBQUVwQyxnQ0FBZ0M7QUFDaEMsc0RBQStCO0FBQy9CLG1EQUFtRDtBQUNuRCx1Q0FBcUc7QUFFckcsU0FBZSxPQUFPOzs7O1lBQ2QsR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQTtZQUVyQixZQUFZO1lBQ1osNkhBQTZIO1lBQzdILDBEQUEwRDtZQUMxRCx5Q0FBeUM7WUFFekMsa0JBQWtCO1lBQ2xCLGtCQUFRLENBQUMsT0FBTyxDQUFDLEtBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFhLEVBQUUsRUFBRSxlQUFlLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7WUFDNUYsYUFBYSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1lBQzlCLFlBQVksR0FBRyxJQUFJLGtCQUFPLEVBQUUsQ0FBQTtZQUM1QixnQkFBZ0IsR0FBRyxJQUFJLHNCQUFXLEVBQUUsQ0FBQTtZQUUxQyxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtZQUcxQixVQUFVO1lBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBZSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7Ozs7Ozs7Z0NBRS9DLHFCQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFBOztnQ0FBcEMsU0FBb0MsQ0FBQTs7OztnQ0FFcEMsc0JBQU8sSUFBSSxDQUFDLE9BQUssQ0FBQyxFQUFBOztnQ0FHcEIsR0FB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