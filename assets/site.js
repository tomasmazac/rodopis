(() => {
  const MAX = 10;
  const input = document.getElementById("search");
  const list = document.getElementById("suggestions");
  const indexUrl = document.currentScript.dataset.index;
  let index = null;
  let results = [];
  let focused = 0;

  // "sistek" must find "Šístek".
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  const load = () => {
    index ??= fetch(indexUrl)
      .then((r) => r.json())
      .then((items) => items.map((i) => ({ ...i, n: norm(i.t) })));
    return index;
  };

  const lifespan = (i) => (i.b || i.d ? `${i.b || "?"}–${i.d || "?"}` : "");

  const render = () => {
    list.replaceChildren(
      ...results.map((r, i) => {
        const li = document.createElement("li");
        li.classList.toggle("focused", i === focused);
        const a = document.createElement("a");
        a.href = r.u;
        a.textContent = r.t;
        const span = lifespan(r);
        if (span) {
          const s = document.createElement("span");
          s.className = "lifespan";
          s.textContent = `(${span})`;
          a.append(s);
        }
        li.append(a);
        li.addEventListener("mouseenter", () => { focused = i; render(); });
        return li;
      })
    );
    list.hidden = results.length === 0 || document.activeElement !== input;
  };

  const search = async () => {
    const words = norm(input.value.trim()).split(/\s+/).filter(Boolean);
    if (!words.length) { results = []; render(); return; }
    const items = await load();
    results = items.filter((i) => words.every((w) => i.n.includes(w))).slice(0, MAX);
    focused = 0;
    render();
  };

  input.addEventListener("focus", () => { load(); render(); });
  input.addEventListener("input", search);
  input.addEventListener("blur", () => setTimeout(() => { list.hidden = true; }, 150));
  input.addEventListener("keydown", (e) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") { focused = (focused + 1) % results.length; render(); e.preventDefault(); }
    else if (e.key === "ArrowUp") { focused = (focused - 1 + results.length) % results.length; render(); e.preventDefault(); }
    else if (e.key === "Enter") { location.href = results[focused].u; }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== input) { input.focus(); e.preventDefault(); }
  });

  // Hovering a photo with a colorized variant shows the colorized version.
  document.querySelectorAll("img[data-colorized]").forEach((img) => {
    const original = img.src;
    new Image().src = img.dataset.colorized;
    img.addEventListener("mouseenter", () => { img.src = img.dataset.colorized; });
    img.addEventListener("mouseleave", () => { img.src = original; });
  });
})();
