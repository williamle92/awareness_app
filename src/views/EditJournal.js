import React from 'react'
import firebase from '../firebase'
import { Button } from '@material-ui/core'
import 'firebase/firestore';


export const EditJournals = ({ entry }) => {

    const [content, setContent] = React.useState(entry.content)

    const onEdit = () => {
        const db = firebase.firestore();
        db.collection('logs').doc(entry.id).set({ ...entry, content })
    }

    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('entries').doc(entry.id).delete()
    }

    return (
        <div className='entryContainer' >
          
            <textarea className='entry' value={content} onChange={(event) => {
                setContent(event.target.value)
            }} />
            <div className='entryOptions'>
                <Button variant='contained' className='editBtn' onClick={onEdit}>Update</Button>
                <Button variant='contained' color="secondary" className='delBtn' onClick={onDelete}>Delete</Button>
            </div>

        </div>
    )
}