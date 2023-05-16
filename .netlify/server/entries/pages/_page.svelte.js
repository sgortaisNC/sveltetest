import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../chunks/index2.js";
const square_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".square.svelte-15dt83c{background:grey;display:flex;aspect-ratio:1;width:90px;align-items:center;justify-content:center}.square.bad.svelte-15dt83c{background:red}",
  map: null
};
const Square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { property } = $$props;
  if ($$props.property === void 0 && $$bindings.property && property !== void 0)
    $$bindings.property(property);
  $$result.css.add(css$1);
  return `<div class="${"square " + escape(property.valid ? "good" : "bad", true) + " svelte-15dt83c"}">${escape(property.value)}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--orange:#eeC198;--brown:#e8B07F;--grey:#7F707A;--darkgrey:#3b313B;--radius:1rem}body, html{overflow:hidden}body{background:linear-gradient(45deg, var(--orange), var(--brown));font:1rem Arial;color:#333;margin:0;padding:0}#app.svelte-tiek0o{padding:2rem 10rem;display:grid;height:calc(100vh - 4rem);grid-template-columns:repeat(2,1fr);grid-template-rows:1fr;gap:1.5rem}.logo.svelte-tiek0o{display:block;margin:0 auto}.card.svelte-tiek0o{background:linear-gradient(214deg, #F0D8B8, #E0BF99);padding:1.5rem;position:relative;z-index:1;border-radius:var(--radius);box-shadow:-60px 45px 100px rgba(0,0,0,0.2)}.card.svelte-tiek0o:first-child{z-index:2;background:linear-gradient(214deg, var(--grey), var(--darkgrey));color:var(--orange)}.squares.svelte-tiek0o{display:flex;gap:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentGuess = "";
  let guesses = [];
  $$result.css.add(css);
  return `<div id="app" class="svelte-tiek0o"><div class="card card-left svelte-tiek0o"><h1>Champ Guessr</h1>
        <img class="logo svelte-tiek0o" src="/logo.png" alt="">
        <input type="text"${add_attribute("value", currentGuess, 0)}>
        <button>Ajouter</button></div>
    <div class="card card-right svelte-tiek0o"><h1>Guesses :</h1>
        ${each(guesses, (guess) => {
    return `<div class="squares svelte-tiek0o">${validate_component(Square, "Square").$$render($$result, { property: guess.nom }, {}, {})}
            ${validate_component(Square, "Square").$$render($$result, { property: guess.sexe }, {}, {})}
            ${validate_component(Square, "Square").$$render($$result, { property: guess.role }, {}, {})}
            ${validate_component(Square, "Square").$$render($$result, { property: guess.region }, {}, {})}
        </div>`;
  })}</div>
</div>`;
});
export {
  Page as default
};
