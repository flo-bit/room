<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@3.0.0 static/models/loungeChair.glb -t -s
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
		colors?: (number | string)[];
		opacity?: number;
	} = $props();

	type GLTFResult = {
		nodes: {
			Mesh_loungeChair: THREE.Mesh;
			Mesh_loungeChair_1: THREE.Mesh;
		};
		materials: {
			carpet: THREE.MeshStandardMaterial;
			wood: THREE.MeshStandardMaterial;
		};
	};

	const gltf = useGltf<GLTFResult>(base + '/models/kenney-furniture-kit/loungeChair.glb');
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Mesh
			castShadow
			receiveShadow
			geometry={gltf.nodes.Mesh_loungeChair.geometry}
			material={gltf.materials.carpet.clone()}
			material.color={colors?.[0] ?? gltf.materials.carpet.color}
			position={[-0.25, 0, 0.25]}
			material.opacity={opacity ?? gltf.materials.carpet.opacity}
			material.transparent={opacity !== undefined}
		/>
		<T.Mesh
			castShadow
			receiveShadow
			geometry={gltf.nodes.Mesh_loungeChair_1.geometry}
			material={gltf.materials.wood.clone()}
			material.color={colors?.[1] ?? gltf.materials.wood.color}
			position={[-0.25, 0, 0.25]}
			material.opacity={opacity ?? gltf.materials.wood.opacity}
			material.transparent={opacity !== undefined}
		/>
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
