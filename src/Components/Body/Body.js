import './Body.css';
import Note from "../Note/Note";
import SideBar from "../SideBar/SideBar";
import { useState } from 'react'; // Importe o useState

export default function Body() {
    const [showNote, setShowNote] = useState(false);

    return (
        <div className="Body">
            <SideBar setShowNote={setShowNote} />
            {showNote && <Note />}
        </div>
    )
}
