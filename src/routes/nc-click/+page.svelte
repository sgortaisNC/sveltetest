<script>
let data = [];
function updateData(newObj) {
  data.push(newObj);
  const jsonString = JSON.stringify(data);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'data.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
</script>

<button on:click={() => updateData({ name: 'John', age: 30 })}>Add Data</button>
