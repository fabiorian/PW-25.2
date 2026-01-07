const history = document.getElementById("history");
let editingId = null;

async function loadHistory() {
  const res = await fetch("/api/words");
  const words = await res.json();

  history.innerHTML = words.map(w => `
    <div class="word">
      <h3>${w.word} <small>/${w.phonetic || ""}/</small></h3>
      <p>${w.meaning}</p>
      <i>${w.example || ""}</i>

      <button onclick='openEditModal(${JSON.stringify(w)})'>✏️</button>
      <button onclick="deleteWord('${w._id}')">🗑️</button>
    </div>
  `).join("");
}

async function deleteWord(id) {
  await fetch(`/api/words/${id}`, { method: "DELETE" });
  loadHistory();
}

function openEditModal(word) {
  editingId = word._id;
  editWord.value = word.word;
  editPhonetic.value = word.phonetic || "";
  editMeaning.value = word.meaning;
  editExample.value = word.example || "";
  editModal.classList.remove("hidden");
}

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

  closeModal();
  loadHistory();
}

function closeModal() {
  editModal.classList.add("hidden");
}

loadHistory();
