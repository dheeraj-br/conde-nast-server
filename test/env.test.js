require('dotenv').config();

test("check if api key exists", () => {
    expect(process.env.KEY).not.toBeNull();
})

test("check if port is set", () => {
    expect(process.env.PORT).not.toBeNull();
})

test("check if host is set", () => {
    expect(process.env.HOST).not.toBeNull();
})

test("check if headline base url is set", () => {
    expect(process.env.baseUrlHeadlines).not.toBeNull();
})

test("check if everything base url is set", () => {
    expect(process.env.baseUrlEverything).not.toBeNull();
})

test("check if page size is set", () => {
    expect(process.env.pageSize).not.toBeNull();
})

