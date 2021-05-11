let dbname = "Product";
let username = "george";
let password = "root";

// with backticks
exports.atlasURL = `mongodb+srv://${username}:${password}@cluster0.by58f.mongodb.net/${dbname}?retryWrites=true&w=majority`;
