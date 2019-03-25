import React from 'react'
import { connect, } from 'react-redux'
import { Route, } from 'react-router-dom'
import Note from './Note'
import NoteView from './NoteView'
import { getNotes, } from '../reducers/notes'
import { Loader, Dimmer, Segment, } from 'semantic-ui-react'

class FetchNotes extends React.Component {

    state = { loaded: false}

    componentDidMount() {
        this.props.dispatch(getNotes(this.setLoaded))
    }

    setLoaded = () => {
        this.setState({ loaded: true })
    }

    render() {
        const {loaded} = this.state

        if (loaded) {
            return (
                <div>
                    <Route exact path="/notes" component={Note} />
                    <Route exact path="/notes/:id" component={NoteView} />
                </div>
            )
        } else {
            return (
                <Segment>
                    <Dimmer active>
                        <Loader />
                    </Dimmer>
                </Segment>
            )
        }
    }
}

export default connect()(FetchNotes)