<script lang="ts">
	import type { Font, FontVariant } from './WebFontImporterTypes';
	import WebFontImporter from '../lib/WebFontImporter.svelte';
	let fontFamily = 'Playball';
	let fontVariant:FontVariant = '400';
	let fontItalics = false;
  let showStyled = true;
</script>

<svelte:head>
	<WebFontImporter fonts="{[{family: fontFamily, variants:[{variant: fontVariant, italics: fontItalics}]}]}"/>
</svelte:head>

<h2 class="ml-3 font-bold">Options:</h2>
<div class="border p-3 shadow-lg mb-3">
  <div class="w-100">
    <label for="fontFamily" class="font-bold w-1/3 inline-block">Font Family: </label>
    <input id="fontFamily" type="text" class="inset border-2 w-3/5 inline-block" bind:value="{fontFamily}"/>
  </div>
  <div class="w-100 mt-2 mb-2">
    <label for="fontVariant" class="font-bold w-1/3 inline-block">Variant: </label>
    <input id="fontVariant" type="text" class="inset border-2 w-3/5 inline-block" bind:value="{fontVariant}"/>
  </div>
  <div class="w-100">
    <input id="fontItalics" type="checkbox" class="inset border-2" bind:checked="{fontItalics}"/>
    <label for="fontItalics" class="font-bold">Italics</label>
  </div>
</div>

<h2 class="ml-3 font-bold">Code:</h2>
<div class="border p-3 shadow-lg mb-3">
  <code>
  &lt;WebFontImporter fonts="{'{'}[{'{'}family: "{fontFamily}", variants:[{'{'}variant: "{fontVariant}", italics: {fontItalics}{'}'}]{'}'}]{'}'}"/&gt;
  </code>
</div>

<h2 class="ml-3 font-bold">    
  <input id="showStyled" type="checkbox" class="inset border-2" bind:checked="{showStyled}"/>
  <label for="showStyled" class="font-bold">Styled Text:</label>
</h2>
<div class="border p-3 shadow-lg mb-3" style="{showStyled ? `font-family:${fontFamily}` : ''}">
	<p>
		I'm baby hella listicle mustache cold-pressed DSA quinoa. Farm-to-table letterpress organic
		cronut, gentrify asymmetrical chia. Kickstarter schlitz air plant disrupt vice 90's. Live-edge
		celiac kale chips twee authentic synth. Cloud bread stumptown tacos disrupt sartorial 3 wolf
		moon DSA pabst fingerstache subway tile brooklyn listicle succulents scenester 8-bit.
	</p>
	<p>
		Cornhole polaroid butcher, selvage succulents chambray sriracha tbh narwhal sartorial
		letterpress. Af lo-fi irony, single-origin coffee tousled yuccie stumptown four dollar toast
		bicycle rights post-ironic sriracha disrupt portland vaporware enamel pin. Single-origin coffee
		fixie selfies, activated charcoal readymade cornhole chia man bun.
	</p>
</div>
