import React from 'react'
import { connect, } from 'react-redux'
import { Link, } from 'react-router-dom'
import { getNotes, } from '../reducers/notes'
import { Container, Header, Card, Button} from 'semantic-ui-react'
import NoteForm from './NoteForm'

class Notes extends React.Component {
    state = { showForm: false, }

    toggleForm = () => {
        this.setState( state => {
            return {showForm: !state.showForm, }
        })
    }

    componentDidMount() {
        this.props.dispatch(getNotes())
    }

    notes = () => {
        return this.props.notes.map( note => 
        <Card key={note.id}>
            <Card.Content>
                <Card.Header>
                    {note.name}
                </Card.Header>
                <Card.Description>
                    {note.description}
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Link to={`/notes/${note.id}`}>
                    Examen Note
                </Link>
            </Card.Content>
        </Card>
        )
    }

    render() {
        const { showForm, } = this.state

        return (
            <Container>
                <Header as='h2' textAlign="center">Dem Notes</Header>
                <Button onClick={this.toggleForm}>
                    { showForm ? 'Hide Form' : 'Make Note Form'}
                </Button>
                { showForm ?
                    <NoteForm closeForm={this.toggleForm} />
                    :
                    <Card.Group itemsPerRow={3}>
                        {this.notes() }
                    </Card.Group>
                }
            </Container>
        )
    }
}

const mapStateToProps =(state) => {
    return { notes: state.notes,}
}

export default connect(mapStateToProps)(Notes)

