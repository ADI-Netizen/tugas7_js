var tinggi = ["154", "159", "161", "164", "162", "170", "168", "174", "179", "177"]

console.log("Looping Biasa")
for (var i = 0; i < tinggi.length; i++) {
    console.log(tinggi[i])
}

console.log("Looping For Of")
for (const x of tinggi) {
    console.log(x)
}