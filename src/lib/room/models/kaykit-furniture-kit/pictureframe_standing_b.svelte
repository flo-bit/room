<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@3.0.0 -t -s -u models/kaykit-furniture-kit/pictureframe_standing_b.glb -r /room/
-->

<script lang="ts">
	import type * as THREE from 'three';

	import type { Snippet } from 'svelte';
	import { T, type Props } from '@threlte/core';
	import { useGltf, useSuspense } from '@threlte/extras';

	import { type ExtraRoomObjectProps } from '../types';
	import RoomObjectMaterial from '../RoomObjectMaterial.svelte';
	import { base } from '$app/paths';
	import Image from '$lib/room/models/Image.svelte';

	let {
		fallback,
		error,
		children,
		ref = $bindable(),
		colors,
		opacity,
		image,
		...props
	}: Props<THREE.Group> & {
		ref?: THREE.Group;
		children?: Snippet<[{ ref: THREE.Group }]>;
		fallback?: Snippet;
		error?: Snippet<[{ error: Error }]>;
	} & ExtraRoomObjectProps = $props();

	const suspend = useSuspense();

	type GLTFResult = {
		nodes: {
			Cube023: THREE.Mesh;
			Cube023_1: THREE.Mesh;
		};
		materials: {
			a: THREE.MeshStandardMaterial;
			image: THREE.MeshStandardMaterial;
		};
	};

	const gltf = suspend(
		useGltf<GLTFResult>(base + '/models/kaykit-furniture-kit/pictureframe_standing_b.glb')
	);
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Mesh castShadow receiveShadow geometry={gltf.nodes.Cube023.geometry}
			><RoomObjectMaterial index={0} {colors} {opacity} /></T.Mesh
		>

		<Image {image} position={[0, 0.25, 0.05]} size={[270 * 0.7, 150 * 0.6]} rotation.x={-0.35} />
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
