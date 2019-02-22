var users = [{
    name:"Juan David Ramirez Mendoza",
    career:"computer software engineer",
    gpa:3.78,
    }, 
    {
        name:"Juan Nicolas Gomez",
        career:"computer software engineer",
        gpa:3.8,
        }, {
            name:"Camilo Ramirez",
            career:"Industrial Engineer",
            gpa:4.5,
            }, {
                name:"Andres Lopez",
                career:"Mechanical Engineer",
                gpa:3.78,
                }, {
                    name:"Carlos Ramirez",
                    career:"Mechanical Engineer",
                    gpa:3.78,
                    },{
                        name:"Ricardo Pinto",
                        career:"Mechanical Engineer",
                        gpa:3.78,
                        },{
                            name:"Pedro Rodriguez",
                            career:"Mechanical Engineer",
                            gpa:3.78,
                            },{
                                name:"dsaasd",
                                career:"Mechanical Engineer",
                                gpa:3.78,
                                },{
                                    name:"Felipe",
                                    career:"Mechanical Engineer",
                                    gpa:3.78,
                                    }]


var result = []

for(var i = 0; i < users.length; i++){
    if(users[i].career === "computer software engineer"){
        result.push(users[i]);
    }
}


exports.users = users;