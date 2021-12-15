<script>
  import { onMount } from "svelte";
  import ToDo from "../todo-api";
  import { items } from "../stores";
  import Item from "./Item.svelte";
  import NewItem from "./NewItem.svelte";
  import { v4 as uuidv4 } from "uuid";

  let itemsSorted = [];

  $: {
    itemsSorted = [...$items];
    itemsSorted.sort((a, b) => {
      if (a.completed && b.completed) return 0;
      if (a.completed) return 1;
      return -1;
    });
  }

  function handleNewItem(e) {
    $items = [
      {
        id: uuidv4(),
        text: e.detail,
        completed: false,
      },
      ...$items,
    ];

    ToDo.save($items);
  }

  function handleUpdate(e) {
    const index = $items.findIndex((item) => item.id === e.detail.id);
    $items[index] = e.detail;
    ToDo.save($items);
  }

  function handleDelete(e) {
    $items = $items.filter((item) => item.id !== e.detail);
    ToDo.save($items);
  }

  onMount(async () => {
    $items = await ToDo.getAll();
  });
</script>

<div class="list">
  <NewItem on:newitem={handleNewItem} />
  {#each itemsSorted as item, i (item)}
    <Item {...item} on:update={handleUpdate} on:delete={handleDelete} lastItem={i===itemsSorted.length - 1} />
  {:else}
    <p class="list-status">No items lol</p>
  {/each}
</div>

<style>
  .list {
    padding: 1.2rem;
  }

  .list-status {
    margin: 0;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
  }
</style>
