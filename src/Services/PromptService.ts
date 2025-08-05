import { ChefRecipe } from "../Models/ChefRecipe";
import { PromptModel } from "../Models/PromptModel";

class PromptService {
    public getPrompt(chef: ChefRecipe): PromptModel {
        const systemContent = "You are an expert chef with vast international knowledge in the field of culinary arts.";

        const userContent = `Plaese craete for me recip includ ${chef.target}  focusing on ${chef.focus}.
                                In your recipe write in bold ${chef.target} and ${chef.focus}.
                                order the recipe like a list.
                                Plase give max 2 recip they are the best recip.
                                Don't respons "Shur" or "*"  or "**" , just the rcipe with order
                                please hide "*" dont show at all "**" or "#"
                                Plase add empty line betweens the lines
                                if the line start with a number plaese come down row and start a new row with a number`;


        return { systemContent, userContent }
    }


}

export const promptService = new PromptService();
