const valueEl = document.getElementById("value");
const copyBtn = document.getElementById("copy");
const refreshBtn = document.getElementById("refresh");
const statusEl = document.getElementById("status");

let currentValue = null;

function setStatus(text) {
  statusEl.textContent = text;
  if (text) setTimeout(() => {
    if (statusEl.textContent === text) statusEl.textContent = "";
  }, 2000);
}

function loadCookie() {
  currentValue = null;
  copyBtn.disabled = true;
  valueEl.className = "muted";
  valueEl.textContent = "Loading…";

  chrome.cookies.get({ url: "https://www.warframe.com/", name: "gid" }, (cookie) => {
    if (chrome.runtime.lastError) {
      valueEl.textContent = "Error: " + chrome.runtime.lastError.message;
      return;
    }
    if (!cookie) {
      valueEl.textContent = "No 'gid' cookie found. Make sure you're logged in at www.warframe.com.";
      return;
    }
    currentValue = cookie.value;
    valueEl.className = "";
    valueEl.textContent = cookie.value;
    copyBtn.disabled = false;
  });
}

async function copyValue() {
  if (currentValue === null) return;
  try {
    await navigator.clipboard.writeText(currentValue);
    setStatus("Copied!");
  } catch (err) {
    // Fallback: select the text so the user can copy manually.
    const range = document.createRange();
    range.selectNodeContents(valueEl);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    setStatus("Press Ctrl+C / Cmd+C to copy");
  }
}

copyBtn.addEventListener("click", copyValue);
refreshBtn.addEventListener("click", loadCookie);
loadCookie();
