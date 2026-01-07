const history = document.getElementById("history");
let editingId = null;

// Criar palavra
async function createWord() {
  await fetch("/api/words", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      word: word.value,
      phonetic: phonetic.value,
      meaning: meaning.value,
      example: example.value
    })
  });

  loadHistory();
}

// Carregar histórico (3 últimas)
async function loadHistory() {
  const res = await fetch("/api/words?limit=3");
  const words = await res.json();

  history.innerHTML = words.map(w => `
    <div class="word">
      <h3>${w.word} <small>/${w.phonetic || ""}/</small></h3>
      <p>${w.meaning}</p>
      <i>${w.example || ""}</i>

      <button onclick='openEdit(${JSON.stringify(w)})'>✏️</button>
      <button onclick="deleteWord('${w._id}')">🗑️</button>
    </div>
  `).join("");
}

// Apagar palavra
async function deleteWord(id) {
  await fetch(`/api/words/${id}`, { method: "DELETE" });
  loadHistory();
}

// Abrir edição
function openEdit(word) {
  editingId = word._id;

  editWord.value = word.word;
  editPhonetic.value = word.phonetic || "";
  editMeaning.value = word.meaning;
  editExample.value = word.example || "";

  document.getElementById("editSection").classList.remove("hidden");
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

// Salvar edição
async function saveEdit() {
  await fetch(`/api/words/${editingId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      word: editWord.value,
      phonetic: editPhonetic.value,
      meaning: editMeaning.value,
      example: editExample.value
    })
  });

  closeEdit();
  loadHistory();
}

// Cancelar edição
function closeEdit() {
  document.getElementById("editSection").classList.add("hidden");
  editingId = null;
}

loadHistory();
