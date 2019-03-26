import React from 'react'
import { connect, } from 'react-redux'
import { updateNote, addNote, } from '../reducers/notes'
import { Form, } from 'semantic-ui-react'

class NoteForm extends React.Component {
    intitialState = {
        name: '',
        description: '',
    }
    state = {...this.intitialState}
    
    componentDidMount() {
        if (this.props.id)
        this.setState({...this.props, })
    }

    handleChange = (e) => {
        const { name, value, } = e.target
        this.setState({ [name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const note = {...this.state, }
        const { closeForm, dispatch, } = this.props
        const func = this.props.id ? updateNote : addNote
        dispatch(func(note))
        closeForm()
    }

    render() {
        const { name, description, } = this.props
    
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                name="name"
                required
                defaultValue={name}
                onChange={this.handleChange}
                label="Name"
                />
                <Form.Input
                name="description"
                required
                defaultValue={description}
                onChange={this.handleChange}
                label="Note Body"
                />
                <Form.Button>Save</Form.Button>
            </Form>
        )
    }
}



export default connect()(NoteForm)