import { JSX } from "react";
import "./Spinner.css";
import videoChef from "../../../assets/Video/vidoeChef.mp4"
export function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<video src={videoChef}></video>
        </div>
    );
}
