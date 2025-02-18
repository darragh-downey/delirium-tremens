<script lang="ts">
	export let id: string;
	export let title: string;
</script>

<section {id} class="scroll-mt-24">
	<h2 class="group relative">
		{title}
		<a
			href="#{id}"
			class="absolute -left-6 top-0 hidden px-2 text-[var(--primary)]/40 no-underline hover:text-[var(--primary)] group-hover:inline-block"
			aria-label="Link to this section"
		>
			#
		</a>
	</h2>
	<slot />
</section> 