const valueEl = document.getElementById("value");
const copyBtn = document.getElementById("copy");
const refreshBtn = document.getElementById("refresh");
const statusEl = document.getElementById("status");
const platformEl = document.getElementById("platform");
const fetchDataBtn = document.getElementById("fetchData");

const API_HOSTS = {
  pc: "https://api.warframe.com",
  ps4: "https://api-ps4.warframe.com",
  xb1: "https://api-xb1.warframe.com",
  swi: "https://api-swi.warframe.com",
  mob: "https://api-mob.warframe.com",
  and: "https://api-and.warframe.com",
};

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
  fetchDataBtn.disabled = true;
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
    fetchDataBtn.disabled = false;
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

function openAccountData() {
  if (currentValue === null) return;
  const platform = platformEl.value;
  const url = `${API_HOSTS[platform]}/cdn/getProfileViewingData.php?playerId=${encodeURIComponent(currentValue)}`;
  chrome.tabs.create({ url });
}

copyBtn.addEventListener("click", copyValue);
refreshBtn.addEventListener("click", loadCookie);
fetchDataBtn.addEventListener("click", openAccountData);
loadCookie();
