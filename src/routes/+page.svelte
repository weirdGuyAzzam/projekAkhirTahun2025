<script lang>
	import Navbar from '../components/Navbar.svelte';
	import { H1, P, H3, Container, Section } from '../components/ui';
	import Button from '../components/ui/Button.svelte';
</script>

<header class=" sticky top-0 z-100000 m-0 p-0">
	<Navbar />
</header>
<Section class="relative inline min-h-0">
	<div class=" m-10 mt-20 ml-20">
		<H1 class="mb-10 w-150 md:text-7xl">Immerse Yourself in Pure Sound</H1>
		<H3 class="mb-10 w-130 md:text-3xl"
			>Discover the perfect blend of crystal-clear audio, superior comfort, and seamless
			connectivity.</H3
		>
		<P class="mb-25 w-70 md:text-7xl">
			Experience music, calls, and entertainment like never before. Shop our award-winning range of
			wireless earbuds designed for every lifestyle.</P
		>
		<Button class="z-1000000000 h-15 w-60 text-2xl hover:bg-gray-950">See Our Products</Button>
	</div>
	<div class="-translate-y-200">
		<H1
			class="relative z-150 inline-block translate-x-325 translate-y-20 rounded-full border bg-black p-10 text-balance"
			>NEW PRODUCT<br />BIG 30% DISCOUNT</H1
		>
		<img
			class="relative z-100 m-auto flex w-2xl -translate-20 translate-x-75 md:w-6xl"
			src="../img/bluetooth-headset-.webp"
			alt=""
		/>
		<div
			class="-z-100 flex translate-x-75 -translate-y-28/24 flex-row items-center justify-center gap-24"
		>
			<div class="-z-100 h-70 w-10 rounded-2xl bg-white"></div>
			<div class="-z-100 h-160 w-10 rounded-2xl bg-white"></div>
			<div class="-z-100 h-180 w-10 rounded-2xl bg-white"></div>
			<div class="-z-100 h-130 w-10 rounded-2xl bg-white"></div>
			<div class="-z-100 h-170 w-10 rounded-2xl bg-white"></div>
			<div class="-z-100 h-190 w-10 rounded-2xl bg-white"></div>
			<div class="-z-100 h-120 w-10 rounded-2xl bg-white"></div>
			<div class="-z-100 h-70 w-10 rounded-2xl bg-white"></div>
		</div>
	</div>
</Section>

<Section class="-translate-y-400">
	<Container>
		<H1>Lorem, ipsum dolor.</H1>
		<P>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ut temporibus itaque
			doloremque? Asperiores ullam possimus repudiandae eum maxime laboriosam aliquid? Quisquam
			libero rerum, ad fugit explicabo in consequuntur molestiae officiis necessitatibus dolores
			recusandae error.
		</P>
	</Container>
</Section>
