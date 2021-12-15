<script>
  import { createEventDispatcher } from "svelte";
  export let id, text, completed;

  export let lastItem;

  const dispatch = createEventDispatcher();

  function handleDoubleClick() {
    const yes = confirm("Are you sure you wish to delete this item?");

    if (yes) {
      dispatch("delete", id);
    }
  }

  function triggerUpdate() {
    dispatch("update", { id, text, completed });
  }
</script>

<div class="item" class:completed class:last-item={lastItem} on:dblclick={handleDoubleClick}>
  <input
    class="text-input"
    type="text"
    bind:value={text}
    readonly={completed}
    on:keyup={({ key, target }) => key === "Enter" && target.blur()}
    on:blur={() => triggerUpdate()}
  />
  <input
    class="completed-checkbox"
    type="checkbox"
    bind:checked={completed}
    on:change={() => triggerUpdate()}
  />
</div>

<style>
  .item {
    display: flex;
    align-items: center;
    padding: 0.2rem 0.3rem 0rem 0.3rem;
    background-color: #fff;
  }

  .last-item {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .item.completed {
    background: #ddd;
  }

  .item.completed .text-input {
    color: #555;
    text-decoration: line-through;
  }

  .item:focus-within {
    background-color: rgba(255, 255, 255, 0.8);
  }

  .text-input {
    flex-grow: 1;
    background: none;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 1rem;
  }

  .completed-checkbox {
    margin-left: 1rem;
    margin-right: 0.8rem;
  }
</style>
