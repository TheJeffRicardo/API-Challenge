// The Request from the JSON file
fetch("../data/data.json")

// The Response from that JSON file
.then(res=> {
    return res.json()
})

// After the JSON has responded
.then((data)=> {
    let laptop = data.laptop
    console.table(laptop)
})
