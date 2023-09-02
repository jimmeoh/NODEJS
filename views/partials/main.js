Fs.readFile('movies.txt', function(err, data) {
    if (err) throw err;
    console.log(data);
});