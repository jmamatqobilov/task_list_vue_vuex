import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem("tasks"))
    ? JSON.parse(localStorage.getItem("tasks"))
    : [],
  },
  getters: {
    
  },
  mutations: {
    addTodo(state,payload){
      state.todos.push(
        {
          message:payload,
          date: new Date ().toUTCString(),
          done:false
        }
      );
     
      localStorage.setItem('tasks', JSON.stringify(state.todos));
      state.todos = JSON.parse(localStorage.getItem("tasks"));
      
      
    },
    removeTodo(state,index){
      state.todos.splice(index,1);
      localStorage.setItem("tasks", JSON.stringify(state.todos));
      state.todos = JSON.parse(localStorage.getItem("tasks"));
    },

    downTodo(state,payload){
      payload.done = !payload.done

      localStorage.setItem('tasks',JSON.stringify(state.todos));
      state.todos = JSON.parse(localStorage.getItem('tasks'));
    }
    
  },
  actions: {
    addTodo(context,payload){
      context.commit('addTodo',payload);
      
      
    },
    removeTodoByIndex(context,index){
      context.commit('removeTodo',index);
    }
  },
  modules: {
  }
})
