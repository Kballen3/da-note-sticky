import React from 'react'
import { connect, } from 'react-redux'
import { Header, Card, Button, } from 'semantic-ui-react'


const NoteView = ({ note = {} }) => (
    <Header as='h3'>{ note.name}</Header>
)

const mapStateToProps = (state, props) => {
    return { note: state.notes.find( a => a.id === parseInt(props.match.params.id))}

}

export default connect(mapStateToProps)(NoteView)