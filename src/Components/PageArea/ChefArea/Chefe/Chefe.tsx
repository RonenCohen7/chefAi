import { useForm } from "react-hook-form";
import "./Chefe.css";
import { ChefRecipe } from "../../../../Models/ChefRecipe";
import { JSX, useState } from "react";
import { gptService } from "../../../../Services/GptService";
import { promptService } from "../../../../Services/PromptService";

import { Spinner } from "../../../SharedArea/Spinner/Spinner";

export function Chefe(): JSX.Element {

    const {register, handleSubmit} = useForm<ChefRecipe>();

    const [completion, setCompletion] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    


    async function send(chefe: ChefRecipe) {
        try{
            setLoading(true);
            const prompt = promptService.getPrompt(chefe);
            const competion = await gptService.getCompletion(prompt.systemContent, prompt.userContent);
            setCompletion(competion)
            setLoading(false);
            
        }
        catch(err: any){
            alert(err.message)
        }
        
    }


    return (
        <div className="Chefe">
            <form onSubmit={handleSubmit(send)}>
                <label>what you like to eat?</label>
                <input type="text" {...register("target")}/>

                <label>Select from table: </label>
                <br></br>
                <select {...register("focus")}>
                    <option>Pasta</option>
                    <option>Pasties</option>
                    <option>Gurmet</option>
                    <option>Meat</option>
                    <option>Vegetables</option>
                    <option>Fruits</option>
                    <option>Dessert</option>
                    
                </select>
                <button>Cook</button>

            </form>
            {completion && <section dangerouslySetInnerHTML={{__html:completion}}></section>}

            {loading && <Spinner />}
                
		
        </div>
    );
}
