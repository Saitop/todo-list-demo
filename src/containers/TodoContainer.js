import { connect } from 'react-redux'
import TodoWrapper from '../components/Todo/TodoWrapper';

const mapStateToProps = state => ({
  todos: state.todoResource.todos
});

const mapDispatchToProps =  dispatch => ({
  addNewTodo: newTodo => dispatch({
    type: 'ADD_TODO',
    payload: newTodo
  }),
  refreshTodos: todos => dispatch({
    type: 'REFRESH_TODOS',
    payload: todos
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoWrapper)
