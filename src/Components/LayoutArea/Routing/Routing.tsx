import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../PageArea/Home/Home";
import { JSX } from "react";

import { Page404 } from "../../PageArea/Page404/Page404";
import { About } from "../../PageArea/About/About";
import { Chefe } from "../../PageArea/ChefArea/Chefe/Chefe";
import { Contact } from "../../PageArea/Contact/Contact";
import { VipArea } from "../../PageArea/VipArea/VipArea";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/vip" element={<VipArea/>}/>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="chef-ai" element={<Chefe/>} />
                <Route path="about" element={<About/>} />
                <Route path="" element={<Navigate to="/home"/> } />
                < Route path="*" element={<Page404 />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}
