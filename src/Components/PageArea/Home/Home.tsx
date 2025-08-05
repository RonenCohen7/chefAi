import "./Home.css";
import chefCock1 from "../../../assets/Images/chefCock1.jpg"
import { JSX } from "react";

export function Home(): JSX.Element {
    return (
        <div className="Home">
			<img src={chefCock1} />
            <a>Chef AI Serve You ❤️</a>
        </div>
    );
}
