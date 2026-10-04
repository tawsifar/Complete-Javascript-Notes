const user = {
    name: "Tawsif"
};

function introduce(age, university) {
    console.log(this.name);
    console.log(age);
    console.log(university);
}

introduce.apply(user, [18, "CUET"]);

// call() uses individual arguments
introduce.call(user, 18, "CUET");

// apply() is useful when arguments already exist in an array
const details = [18, "CUET"];

introduce.apply(user, details);
