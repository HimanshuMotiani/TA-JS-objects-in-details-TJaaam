function project(name,id,noOfProjects){
    let project = {}
    project.name = name;
    project.id = id;
    project.noOfProjects = noOfProjects;
    
    project.getProjects = function(){
        return project.noOfProjects
    };
    project.changeName = function(name){
        return project.name
    };
    project.incrementProject = function(val = 1){
        return project.noOfProjects + val;
    };
    project.decrementProject = function(val = 1){
        return project.noOfProjects - val;
    };
    return project;
}
let firstProject = project("Himanshu",1,10);

projectMethods = {
    getProjects: function(){
        return this.noOfProjects
    },
    changeName:function(name){
        return name
    },
    incrementProject : function(val = 1){
        return this.noOfProjects + val;
    },
    decrementProject:function(val = 1){
        return this.noOfProjects - val;
    }
}
function project(name,id,noOfProjects){
    let project = Object.create(projectMethods)
    project.name = name;
    project.id = id;
    project.noOfProjects = noOfProjects;
    return project;
}

let secondProject = project("Him",1,10);

Project.prototype = {
    getProjects: function(){
        return this.noOfProjects
    },
    changeName:function(name){
        return name
    },
    incrementProject : function(val = 1){
        return this.noOfProjects + val;
    },
    decrementProject:function(val = 1){
        return this.noOfProjects - val;
    }
}
function Project(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}

let thirdProject = new Project("Rohit",2,20);

class Project{
    constructor(name,id,noOfProjects){
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    changeName(name){
        return name;
    }
    incrementProject(val = 1){
        return this.noOfProjects + val;
    }
    decrementProject(val = 1){
        return this.noOfProjects - val;
    };

}
let fourthProject = new Project("aditya",2,3);


