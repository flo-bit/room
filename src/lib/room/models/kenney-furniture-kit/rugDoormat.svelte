<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@3.0.0 static/models/kenney-furniture-kit/rugDoormat.glb -t -s
-->

<script lang="ts">
	import type * as THREE from 'three';

	import type { Snippet } from 'svelte';
	import { T, type Props } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { base } from '$app/paths';

	let {
		fallback,
		error,
		children,
		ref = $bindable(),
		colors,
		opacity,
		...props
	}: Props<THREE.Group> & {
		ref?: THREE.Group;
		children?: Snippet<[{ ref: THREE.Group }]>;
		fallback?: Snippet;
		error?: Snippet<[{ error: Error }]>;
		colors?: string[];
		opacity?: number;
	} = $props();

	type GLTFResult = {
		nodes: {
			['rugDoormat(Clone)']: THREE.Mesh;
		};
		materials: {
			wood: THREE.MeshStandardMaterial;
		};
	};

	const gltf = useGltf<GLTFResult>(base + '/models/kenney-furniture-kit/rugDoormat.glb');
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Mesh
			castShadow
			receiveShadow
			geometry={gltf.nodes['rugDoormat(Clone)'].geometry}
			material={gltf.materials.wood.clone()}
			material.color={colors?.[0] ?? gltf.materials.wood.color}
			material.opacity={opacity ?? gltf.materials.wood.opacity}
			material.transparent={opacity !== undefined}
			position={[-0.22, 0, 0.11]}
		/>
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
