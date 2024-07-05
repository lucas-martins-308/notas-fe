import './SideBar.css';

export default function SideBar({ setShowNote }) {
    return (
        <div className="sidebar">
            <div className='sidebar-content'>
                <h2 className='my-notes'>Suas notas</h2>
                <button className='sidebar-add-btn' onClick={() => setShowNote(true)}>Adicionar anotação</button>
            </div>
        </div>
    );
}
