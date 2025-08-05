import { JSX } from "react";
import "./About.css";
import chefhat from "../../../assets/Images/chefhat.jpg"

export function About(): JSX.Element {
    return (
        <div className="About">
            
            <img id="chefatID"src={chefhat} />
            <p>
                Welcome to Chef Ai, the ultimate destination for chefs and food enthusiasts alike.<br></br>
                Our mission is to celebrate the art of cooking by showcasing talented chefs, sharing culinary inspirations, and providing expert tips from the kitchen.<br></br>

                Whether you're a professional chef, a home cook, or simply someone who loves food, we bring you closer to the world of gastronomy. <br></br>
                From unique recipes and kitchen hacks to chef interviews and industry insights, our platform is designed to inspire and elevate your cooking experience.
            </p>
        </div>
    );
}
