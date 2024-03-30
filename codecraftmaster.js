// Create a class named CodeCraftMaster
class CodeCraftMaster {
    constructor() {
        this.skills = [];
    }

    // Method: add a skill to the CodeCraftMaster
    addSkill(skill) {
        this.skills.push(skill);
        console.log(`Added ${skill} to the CodeCraftMaster's skills.`);
    }

    // Method: remove a skill from the CodeCraftMaster
    removeSkill(skill) {
        const index = this.skills.indexOf(skill);
        if (index !== -1) {
            this.skills.splice(index, 1);
            console.log(`Removed ${skill} from the CodeCraftMaster's skills.`);
        } else {
            console.log(`${skill} is not found in the CodeCraftMaster's skills.`);
        }
    }

    // Method: list all skills of the CodeCraftMaster
    listSkills() {
        console.log("Skills of the CodeCraftMaster:");
        this.skills.forEach(skill => {
            console.log(skill);
        });
    }
}

// Create an instance of CodeCraftMaster named myCodeCraftMaster
const myCodeCraftMaster = new CodeCraftMaster();

// Add skills to the CodeCraftMaster
myCodeCraftMaster.addSkill("JavaScript");
myCodeCraftMaster.addSkill("Python");
myCodeCraftMaster.addSkill("SQL");

// List all skills of the CodeCraftMaster
myCodeCraftMaster.listSkills();

// Remove a skill from the CodeCraftMaster
myCodeCraftMaster.removeSkill("Python");

// List all skills of the CodeCraftMaster after removal
myCodeCraftMaster.listSkills();
