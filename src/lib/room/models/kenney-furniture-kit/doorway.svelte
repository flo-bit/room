<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@3.0.0 static/models/kenney-furniture-kit/doorway.glb -t -s
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
			['doorway(Clone)']: THREE.Mesh;
			Mesh_door: THREE.Mesh;
			Mesh_door_1: THREE.Mesh;
		};
		materials: {
			wood: THREE.MeshStandardMaterial;
			metal: THREE.MeshStandardMaterial;
		};
	};

	const gltf = useGltf<GLTFResult>(base + '/models/kenney-furniture-kit/doorway.glb');
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Mesh
			castShadow
			receiveShadow
			geometry={gltf.nodes['doorway(Clone)'].geometry}
			material={gltf.materials.wood.clone()}
			material.color={colors?.[1] ?? gltf.materials.wood.color}
			material.opacity={opacity ?? gltf.materials.wood.opacity}
			material.transparent={opacity !== undefined}
			position={[-0.23, 0.0, 0.0]}
		>
			<T.Group position={[0.03, 0, -0.04]}>
				<T.Mesh
					castShadow
					receiveShadow
					geometry={gltf.nodes.Mesh_door.geometry}
					material={gltf.materials.wood.clone()}
					material.color={colors?.[0] ?? gltf.materials.wood.color}
					material.opacity={opacity ?? gltf.materials.wood.opacity}
					material.transparent={opacity !== undefined}
				/>
				<T.Mesh
					castShadow
					receiveShadow
					geometry={gltf.nodes.Mesh_door_1.geometry}
					material={gltf.materials.metal.clone()}
					material.color={colors?.[2] ?? gltf.materials.metal.color}
					material.opacity={opacity ?? gltf.materials.metal.opacity}
					material.transparent={opacity !== undefined}
				/>
			</T.Group>
		</T.Mesh>
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
