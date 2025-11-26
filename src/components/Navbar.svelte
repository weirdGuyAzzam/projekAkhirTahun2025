<script>
	// @ts-nocheck

	import { Button, NavLink, Container } from './ui';
	import { Dialog } from 'bits-ui';
</script>

<nav class="sticky top-0 z-200 bg-gray-950">
	<Container>
		<div class="sticky top-0 left-0 flex h-16 items-center justify-between">
			<a
				href="/"
				class="text-secondary stcky-0 text-2xl font-bold text-white transition-opacity hover:opacity-80"
			>
				BRANDNAME.
			</a>

			<div class="sticky-0 top-0 hidden items-center gap-8 md:flex">
				<NavLink href="/">About us</NavLink>
				<NavLink href="/">Our Products</NavLink>
				<NavLink href="/">Contacts</NavLink>
				<Button>Shop Now</Button>
			</div>

			<div class="sticky top-0 left-0 md:hidden">
				<Dialog.Root>
					<Dialog.Trigger>
						<buttom>
							<img
								class="m-2 w-10 rounded bg-gray-800 p-1 hover:bg-gray-600"
								src="../img/nav-icon-list-white.svg"
								alt="harusnya ada icon"
							/>
						</buttom>
					</Dialog.Trigger>

					<Dialog.Portal>
						<Dialog.Content
							class="fixed top-0 right-0 bottom-0 z-300 m-3 flex h-fit w-35 flex-col items-end justify-end rounded-2xl bg-gray-600 p-4"
						>
							<Dialog.Close>
								<button>
									<img
										class=" w-7 rounded bg-gray-800 p-1 hover:bg-gray-600"
										src="../img/close-icon-white.svg"
										alt="harusnya ada icon"
									/>
								</button>
							</Dialog.Close>
							<div class="flex flex-col items-center gap-4">
								<NavLink href="/">About us</NavLink>
								<NavLink href="/">Our Products</NavLink>
								<NavLink href="/">Contacts</NavLink>
							</div>
							<Button class="mt-4">Shop Now</Button>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			</div>
		</div>
	</Container>
</nav>
