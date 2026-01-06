const form = document.getElementById("form");
const history = document.getElementById("history");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

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

  form.reset();
  loadHistory();
});

async function loadHistory() {
  const res = await fetch("/api/words");
  const words = await res.json();

  history.innerHTML = words.map(w => `
    <div class="word">
      <h3>${w.word} <small>${w.phonetic || ""}</small></h3>
      <p>${w.meaning}</p>
      <i>${w.example || ""}</i>
      <div class="date">
        Criada em: ${new Date(w.createdAt).toLocaleString("pt-BR")}
      </div>
    </div>
  `).join("");
}

loadHistory();
