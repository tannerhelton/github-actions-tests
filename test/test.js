import request from "supertest";
import { expect } from "chai";
import app from "../index.js";

describe("GET /", function () {
  it("responds with Hello World", function (done) {
    request(app)
      .get("/")
      .expect("Content-Type", /text/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.text).to.equal("Hello World");
        done();
      });
  });
});
