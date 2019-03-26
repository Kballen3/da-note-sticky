import React from 'react'
import { connect, } from 'react-redux'
import { Header, Table, Container, Button,  } from 'semantic-ui-react'
import NoteForm from './NoteForm'
import {Link, } from 'react-router-dom'


class NoteView extends React.Component {
    state = {showForm: false}

    render() {
        const {showForm} = this.state
        const { note={} }= this.props

        return(
            <Container>
                <Link to='/notes'> View Other Notes</Link>
                <Button onClick={this.toggleForm}>
                    { showForm ? 'Cancel' : 'Edit'}
                </Button>
                { showForm ?
                    <NoteForm {...note} closeForm={this.toggleForm} />
                    :
                    <div>
                        <Header as='h3'>{ note.name}</Header>    

                    </div>
                }

            </Container>

        )
    }
}



const mapStateToProps = (state, props) => {
    return { note: state.notes.find( a => a.id === parseInt(props.match.params.id))}

}

export default connect(mapStateToProps)(NoteView)