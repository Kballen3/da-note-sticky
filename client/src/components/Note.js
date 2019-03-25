import React from 'react'
import { connect, } from 'react-redux'
import { Link, } from 'react-router-dom'
import { getNotes, } from '../reducers/notes'
import { Container, Header, Card, } from 'semantic-ui-react'

class Notes extends React.Component {
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
        return (
            <Container backgroundColor="blue">
                <Header as='h2' textAlign="center">Dem Notes</Header>
                    <Card.Group itemsPerRow={3}>
                        {this.notes() }
                    </Card.Group>
            </Container>
        )
    }
}

const mapStateToProps =(state) => {
    return { notes: state.notes,}
}

export default connect(mapStateToProps)(Notes)

