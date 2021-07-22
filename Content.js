
// // More inputs
// document.getElementById("add").addEventListener("click", function() {
//     var inputs = document.createElement('input');
//     inputs.type = 'text';
//     inputs.id = 'userInput';
//     inputs.placeholder = 'URL';


//     var div_pos = document.getElementById('pos_in');
//     div_pos.appendChild(inputs);
// });
// document.getElementById("text_in").innerHTML = "Please Enter a URL";


// Saving input values
document.getElementById("save").addEventListener("click", function() {
    const input = document.getElementById("userInput").value;
    const input1 = document.getElementById("userInput1").value;
    const input2 = document.getElementById("userInput2").value;
    const input3 = document.getElementById("userInput3").value;
    const input4 = document.getElementById("userInput4").value;

    if (input == ""){
        document.getElementById("text_in").innerHTML = input;
    } else {
        chrome.storage.sync.set({key0: input}, function() {
            document.getElementById("text_in").innerHTML = input;
        });
    }
    if (input1 == ""){
        document.getElementById("text_in1").innerHTML = input1;
    } else {
        chrome.storage.sync.set({key1: input1}, function() {
            document.getElementById("text_in1").innerHTML = input1;
        });
    }
    if (input2 == ""){
        document.getElementById("text_in2").innerHTML = input2;
    } else {
        chrome.storage.sync.set({key2: input2}, function() {
            document.getElementById("text_in2").innerHTML = input2;
        });
    }
    if (input3 == ""){
        document.getElementById("text_in3").innerHTML = input3;
    } else {
        chrome.storage.sync.set({key3: input3}, function() {
            document.getElementById("text_in3").innerHTML = input3;
        });
    }
    if (input4 == ""){
        document.getElementById("text_in4").innerHTML = input4;
    } else {
        chrome.storage.sync.set({key4: input4}, function() {
            document.getElementById("text_in4").innerHTML = input4;
        });
    }


})

// Showing Values of inputs
chrome.storage.sync.get(['key0'], function(result) {
    document.getElementById("text_in").innerHTML = "link is saved";
})
chrome.storage.sync.get(['key1'], function(result) {
    document.getElementById("text_in1").innerHTML = "link is saved";
})
chrome.storage.sync.get(['key2'], function(result) {
    document.getElementById("text_in2").innerHTML = "link is saved";
})
chrome.storage.sync.get(['key3'], function(result) {
    document.getElementById("text_in3").innerHTML = "link is saved";
})
chrome.storage.sync.get(['key4'], function(result) {
    document.getElementById("text_in4").innerHTML = "link is saved";
})




document.getElementById("open").addEventListener("click", function(){
        chrome.storage.sync.get(['key0'], function(result) {
            chrome.tabs.create({ url: result.key0 })
        }
    )
})
document.getElementById("open").addEventListener("click", function(){
    chrome.storage.sync.get(['key1'], function(result) {
        chrome.tabs.create({ url: result.key1 })
    }
)
})
document.getElementById("open").addEventListener("click", function(){
    chrome.storage.sync.get(['key2'], function(result) {
        chrome.tabs.create({ url: result.key2 })
    }
)
})
document.getElementById("open").addEventListener("click", function(){
    chrome.storage.sync.get(['key3'], function(result) {
        chrome.tabs.create({ url: result.key3 })
    }
)
})
document.getElementById("open").addEventListener("click", function(){
    chrome.storage.sync.get(['key4'], function(result) {
        chrome.tabs.create({ url: result.key4 })
    }
)
})
