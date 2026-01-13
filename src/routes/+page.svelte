<script lang="ts">
	import { H1, P, H3, Container, Section, Button } from '../components/ui';
	import { Accordion } from 'bits-ui';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let leftContents: HTMLElement;
	let rightContents: HTMLElement;

	const tl = gsap.timeline();
	onMount(() => {
		tl.from(leftContents, { x: -100, opacity: 0, duration: 2, delay: 1.5 });
		tl.from(rightContents, { x: 100, opacity: 0, duration: 2 }, '<');
	});

	import Navbar from '../components/Navbar.svelte';

	let navbar: HTMLElement;

	onMount(() => {
		gsap.from(navbar, {
			y: -100,
			opacity: 0,
			duration: 1.8,
			ease: 'power2.out'
		});
	});
</script>

<header class="sticky top-0 z-200 bg-gray-950">
	<div bind:this={navbar}>
		<Navbar />
	</div>
</header>

<Section id="about" class="relative min-h-screen bg-gray-950">
	<Container>
		<div class="grid items-center gap-24 lg:grid-cols-2">
			<!-- konten sebelah kiri -->
			<div class=" space-y-6 lg:space-y-8" bind:this={leftContents}>
				<H1 class="mb-10 text-5xl lg:text-7xl">Immerse Yourself in Pure Sound</H1>

				<H3 class="mt-10 text-xl text-gray-300 lg:text-3xl">
					Discover the perfect blend of crystal-clear audio, superior comfort, and seamless
					connectivity.
				</H3>

				<P class=" mt-10 text-xl ">
					Experience music, calls, and entertainment like never before. Shop our award-winning range
					of wireless earbuds designed for every lifestyle.
				</P>

				<Button class="mt-24 px-8 py-4 text-xl">See Our Products</Button>
			</div>
			<!-- konten sebelah kanan -->
			<div class="relative" bind:this={rightContents}>
				<!-- Discount Badge -->
				<div
					class="bg-primary absolute top-0 right-0 z-20 rounded-full border bg-gray-950 px-6 py-3 text-center font-bold text-white lg:px-8 lg:py-4"
				>
					<div class="text-sm lg:text-2xl">NEW PRODUCT</div>
					<div class="text-lg lg:text-3xl">BIG 30% DISCOUNT</div>
				</div>

				<div class=" rounded-full border-white">
					<img
						class="relative z-10 mx-auto transition-all hover:-translate-y-10
						"
						src="../img/bluetooth-headset-.webp"
						alt=""
					/>
				</div>
			</div>
		</div>
	</Container>
</Section>

<Section class="min-h-screen bg-gray-900">
	<Container
		class="mt-15 flex flex-nowrap justify-between text-balance sm:flex-col lg:flex-row
	"
	>
		<div>
			<H1 class="w-100 lg:w-5xl">Why Choose Our Headsets?</H1>
			<H3 class="mb-20 w-100 lg:w-3xl ">Engineered for excellence, designed for you.</H3>
			<P class=" w-100 text-start lg:w-3xl ">
				<b> Unbeatable Sound Quality </b>
				,Rich balanced acoustics and deep bass powered by advanced audio drivers for a truly immersive
				listening experience.
			</P>
			<P class="mb-10 w-100 text-start lg:w-3xl ">
				<b> Active Noise Cancellation </b>
				, Block out the world and focus on what matters. Our hybrid ANC technology eliminates background
				noise.
			</P>
			<P class="mb-10 w-100 text-start lg:w-3xl ">
				<b> All-Day Battery Life </b>
				, Get up to 8 hours of playtime on a single charge, extended to 30+ hours with the compact charging
				case
			</P>
			<P class="mb-10 w-100 text-start lg:w-3xl ">
				<b>Perfect, Secure Fit </b>
				, balanced acoustics and deep bass powered by advanced audio drivers for a truly immersive listening
				experience.
			</P>
		</div>
		<img class="hidden w-3xl rounded-xl md:block" src="../img/earbuds1.jpg" alt="" />
	</Container>
</Section>

<section id="products">
	<div class="mt-20 mb-20 flex flex-col items-center gap-70 md:flex-row">
		<div class="w-84 rounded-2xl bg-gray-950 p-2 md:w-xl">
			<img src="../img/card1.webp" alt="" />
			<div class="text-center">
				<H1>Product 1</H1>
				<P>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,culpa. Eius possimus pariatur
					beatae officiis quis eos reiciendis adipisci alias suscipit aliquam.
				</P>
			</div>
		</div>
		<div class="w-84 rounded-2xl bg-gray-950 p-2 md:w-xl">
			<img src="../img/card2.webp" alt="" />
			<div class="text-center">
				<H1>Product 2</H1>
				<P>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,culpa. Eius possimus pariatur
					beatae officiis quis eos reiciendis adipisci alias suscipit aliquam.
				</P>
			</div>
		</div>
		<div class="w-84 rounded-2xl bg-gray-950 p-2 md:w-xl">
			<img class="w-xl" src="../img/card3.webp" alt="" />
			<div class="text-center">
				<H1>Product 3</H1>
				<P>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,culpa. Eius possimus pariatur
					beatae officiis quis eos reiciendis adipisci alias suscipit aliquam.
				</P>
			</div>
		</div>
	</div>
</section>
<Section class="min-h-1/8  bg-gray-900">
	<Container
		class="mt-10 flex flex-nowrap justify-between text-balance sm:flex-col lg:flex-row-reverse
	"
	>
		<div>
			<H1 class="no-scrollbar w-100 overflow-hidden md:w-200">HASSLE-FREE SHIPPING & RETURNS</H1>
			<H3 class="no-scrollbar mb-20 overflow-hidden">Shop with confidence</H3>
			<P class="mb-10 w-100 ">
				We offer free standard on all orders over $50. Not happy with your purchase? We provide a
				30-day money-back guarantee.
			</P>
		</div>
		<img class="hidden w-3xl rounded-xl md:block" src="../img/Shipping.png" alt="" />
	</Container>
</Section>

<Section class=" min-h-screen bg-gray-950 ">
	<Accordion.Root class="mt-40 flex flex-col items-center gap-10" type="single">
		<H3 class="text-center"><b>FREQUENTLY ASKED QUESTIONS</b></H3>
		<Accordion.Item value="item-3" class="mr-4 ml-4 rounded-2xl border border-white p-5">
			<Accordion.Header>
				<Accordion.Trigger>
					<div>
						<P><b> Are they compatible with both IPhone and Android ? </b> ▽</P>
					</div></Accordion.Trigger
				>
			</Accordion.Header>
			<Accordion.Content>
				<P class="mr-4 ml-4  w-60 sm:w-100"
					>Yes! Our earbuds use Bluetooth technology and are fully compatible with both iOS and
					Android devices
				</P>
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-1" class="mr-4 ml-4 rounded-2xl border border-white p-5">
			<Accordion.Header>
				<Accordion.Trigger><P><b>How do I pair earbuds to my device ? </b> ▽</P></Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				<P class="mr-4 ml-4  w-60 sm:w-100"
					>Simply open the case, enter pairing mode, and select the earbuds from your device's
					Bluetooth menu. Detailed instructions are in our quick start giude.</P
				>
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2" class="mr-4 ml-4 rounded-2xl border border-white p-5">
			<Accordion.Header>
				<Accordion.Trigger><P><b>What is the warranty period ?</b> ▽</P></Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				<P class="mr-4 ml-4  w-60 sm:w-100"
					>All our earbuds come with a standard 1-year limited warranty against manufacturing
					defects</P
				>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</Section>

<Section id="contacts" class=" flex min-h-1/4 justify-between bg-black p-8">
	<P>© 09/12/2025</P>
	<div class="flex flex-row gap-x-16">
		<img src="../img/FB.webp" alt="facebook icon" class="h-7 w-7 md:h-14 md:w-14" />
		<img src="../img/IG.png" alt="insta icon" class="h-7 w-7 md:h-14 md:w-14" />
	</div>
</Section>
