import './Note.css';

export default function Note() {


    return (
        <div className='Note'>
            <form>
                <textarea class="note-ipt" id="textarea" name="textarea" rows="4" cols="50"></textarea>
            </form>
        </div>
    )
}