//arrangement 1
response = []
var dict = {
"c" : 3,
"e" : 5,
"a" : 1,
"d" : 4,
"b" : 2};

    var keys = Object.keys(dict);
    var i, len = keys.length; 
    keys.sort(); 
    response.push(keys);
    var sortedvalues = []
    for (i = 0; i < len; i++)
    {
        k = keys[i];
        sortedvalues.push(dict[k]);
    }
    response.push(sortedvalues);

//Result
console.log(response);

//arrangement 2
contents = []
var text = {
"e" : 'Windows',
"b" : 'google',
"a" : 'apple',
"c" : 'microsoft',
"d" : 'software'};

    var keys = Object.keys(text);
    var i, len = keys.length; 
    keys.sort(); 
    contents.push(keys);
    var sortedvalues = []
    for (i = 0; i < len; i++)
    {
        k = keys[i];
        sortedvalues.push(text[k]);
    }
    contents.push(sortedvalues);

//Result
console.log(contents);


//arrangement 3
set = []
var data = {
"key3" : 'undefined',
"key1" : 'false',
"key2" : 'true'};

    var keys = Object.keys(data);
    var i, len = keys.length; 
    keys.sort(); 
    set.push(keys);
    var sortedvalues = []
    for (i = 0; i < len; i++)
    {
        k = keys[i];
        sortedvalues.push(data[k]);
    }
    set.push(sortedvalues);

//Result
console.log(set);