<template>

  <div class="home">




    <div class="todo-box">
      <div class="home-todo-input">

        <div class="newtodo-title">Todos</div>

        <div class="todos-input-add">
          <div class="todos-input-control">
            <input @keypress.enter="addTodo" class="input-control-style" id="newTodo" name="newTodo" type="text" v-model="newTodo"
              placeholder="Add Task ..." />
          </div>
          <img :src="require('./assets/svg/Plus.svg')" @click="addTodo" width="44" />
        </div>
      </div>


      <div v-for="(todo, index) in $store.state.todos" :key="todo.id" class="todo-context-bac">
        <TodoItem :todo="todo" :index="index" />
      </div>

    </div>

  </div>

</template>

<script>
// @ is an alias to /src

import TodoItem from './components/TodoItem.vue';
export default {
  name: 'App',
  components: {
    TodoItem
  },

  computed: {
    items() {

      return this.$store.state.todos
    }
  },

  data() {
    return {
      newTodo: '',
    }
  },

  

  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$store.dispatch('addTodo', this.newTodo);

        this.newTodo = '';
      }

    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #202033;
}


.home {
  margin: 60px;
  border-radius: 20px;
  height: 100vh;
  // background-color: #333347;


  .todo-box {
    flex-direction: column;
    align-items: center;

    .home-todo-input {
      .todos-input-add {
        display: flex;
        justify-content: center;
        align-items: center;

        .todos-input-control {

          .input-control-style {
            width: 600px;
            height: 44px;
            border-radius: 8px;
            outline: none;

            &:focus {
              border-bottom-color: rgb(47, 214, 111);
            }

            &::placeholder {
              font-family: 'SFProDisplay-medium', sans-serif;
              color: #000000;
              font-size: 16px;
              padding-left: 10px;
            }
          }
        }
      }

      .newtodo-title {
        padding: 20px 0;
        font-size: 26px;
        font-weight: 700;
        color: #ffffff;
      }
    }



    .todo-context-bac {
      display: flex;
      justify-content: center;

    }
  }


}
</style>
