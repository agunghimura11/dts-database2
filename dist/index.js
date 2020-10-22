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
var mongodb_1 = __importDefault(require("mongodb"));
var mongodb_2 = require("./mongodb");
function initApp() {
    return __awaiter(this, void 0, void 0, function () {
        var app, connection, db, customerModel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = express_1.default();
                    return [4 /*yield*/, mongodb_1.default.connect("" + process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })];
                case 1:
                    connection = _a.sent();
                    db = connection.db("" + process.env.MONGODB_NAME);
                    customerModel = new mongodb_2.Customer(db);
                    app.use(body_parser_1.default.json());
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
                    app.get('/cutomer/:id', function (req, res, next) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBaUQ7QUFDakQsdUNBQW9DO0FBRXBDLGtEQUEyQjtBQUMzQixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRWYsb0RBQTZCO0FBQzdCLDREQUFvQztBQUVwQyxvREFBNkI7QUFDN0IscUNBQWdEO0FBRWhELFNBQWUsT0FBTzs7Ozs7O29CQUNkLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUE7b0JBR0YscUJBQU0saUJBQU8sQ0FBQyxPQUFPLENBQUMsS0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQWEsRUFBRSxFQUFFLGVBQWUsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQTs7b0JBQXBILFVBQVUsR0FBRyxTQUF1RztvQkFDcEgsRUFBRSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQWMsQ0FBQyxDQUFBO29CQUNqRCxhQUFhLEdBQUcsSUFBSSxrQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO29CQUV0QyxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtvQkFFMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBZSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7Ozs7Ozs7d0NBRS9DLHFCQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3Q0FBcEMsU0FBb0MsQ0FBQTs7Ozt3Q0FFcEMsc0JBQU8sSUFBSSxDQUFDLE9BQUssQ0FBQyxFQUFBOzt3Q0FHcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFB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