<template>
  <li :class="`item-todo ${todo.done ? 'active' : ''}`">
    <div class="todo-index-number">{{ index+ 1 }}</div>
    <div class="todo-message" :class="todo.done ? 'active' : ''">
      {{ todo.message }}
    </div>
    <div class="todo-date-icons">

      <div class="todo-date">
        {{ todo.date }}.
      </div>

      <div class="icon-delete-edit">
        <div class="button-edit" @click="isDone()">
          <!-- <img :src="require('../assets/svg/Edit.svg')"/> -->
          {{ todo.done ? "isDone" : "Done" }}

        </div>
        <div class="button-delete" @click="removeByIndex(index)">
          <img :src="require('../assets/svg/Delete.svg')" />
        </div>
      </div>


    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {},
    index: Number
  },

  methods: {
    removeByIndex(index) {
      this.$store.dispatch('removeTodoByIndex', index);
    },

    isDone() {
      this.$store.commit('downTodo', this.todo)
    },
  }

}
</script>

<style lang="scss">
li {
  text-decoration: none;
  list-style: none;
  color: white;
}

.item-todo {
  width: 800px;
  margin: 10px 0;
  padding: 14px 20px;
  border-radius: 10px;
  background: #3d4756;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.active {
    opacity: 0.5;
  }

  .todo-index-number {
    flex-basis: 5%;
  }

  .todo-message {
    flex-basis: 65%;
    text-align: start;
    font-size: 14px;
    max-lines: 1;
    overflow: hidden;
    padding-left: 10px;

    &.active {
      text-decoration: line-through;

    }
  }

  .todo-date-icons {
    flex-basis: 30%;
    display: flex;
    align-items: center;

    .todo-date {
      color: #a4a4a4;
      font-size: 12px;
    }

    .icon-delete-edit {
      display: flex;
      align-items: center;
      cursor: pointer;

      .button-edit {
        margin: 0 20px 0;
        width: 70px;
        padding: 6px;
        font-size: 14px;
        border-radius: 8px;
        background-color: green;
        cursor: pointer;
      }
    }
  }


}




@media screen and (min-width: 645px) {
  li {
    text-decoration: none;
    list-style: none;
    color: white;
  }

  .item-todo {
    // width: 800px;
    margin: 10px 0;
    padding: 14px 20px;
    border-radius: 10px;
    background: #3d4756;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.active {
      opacity: 0.5;
    }

    .todo-index-number {
      flex-basis: 5%;
    }

    .todo-message {
      flex-basis: 55%;
      text-align: start;
      font-size: 14px;
      max-lines: 1;
      overflow: hidden;
      padding-left: 10px;

      &.active {
        text-decoration: line-through;

      }
    }

    .todo-date-icons {
      flex-basis: 40%;
      display: flex;
      align-items: center;

      .todo-date {
        color: #a4a4a4;
        font-size: 12px;
      }

      .icon-delete-edit {
        display: flex;
        align-items: center;
        cursor: pointer;

        .button-edit {
          margin: 0 20px 0;
          width: 70px;
          padding: 6px;
          font-size: 14px;
          border-radius: 8px;
          background-color: green;
          cursor: pointer;
        }
      }
    }


  }
}
@media screen and (max-width: 445px) {
  li {
    text-decoration: none;
    list-style: none;
    color: white;
  }

  .item-todo {
    width: 800px;
    height: 200px;
    margin: 10px 0;
    padding: 14px 20px;
    border-radius: 10px;
    background: #3d4756;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.active {
      opacity: 0.5;
    }

    .todo-index-number {
      flex-basis: 5%;
    }

    .todo-message {
      flex-basis: 55%;
      text-align: start;
      font-size: 14px;
      max-lines: 1;
      overflow: hidden;
      padding-left: 10px;

      &.active {
        text-decoration: line-through;

      }
    }

    .todo-date-icons {
      flex-basis: 40%;
      display: flex;
      align-items: center;

      .todo-date {
        color: #a4a4a4;
        font-size: 12px;
      }

      .icon-delete-edit {
        display: flex;
        align-items: center;
        cursor: pointer;

        .button-edit {
          margin: 0 20px 0;
          width: 70px;
          padding: 6px;
          font-size: 14px;
          border-radius: 8px;
          background-color: green;
          cursor: pointer;
        }
      }
    }


  }
}
</style>