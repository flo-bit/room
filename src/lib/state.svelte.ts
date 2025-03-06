import type { TransformControls } from '@threlte/extras';
import Table from './models/kenney-furniture-kit/table.svelte';
import LampRoundFloor from './models/kenney-furniture-kit/lampRoundFloor.svelte';
import LoungeChair from './models/kenney-furniture-kit/loungeChair.svelte';
import LoungeSofa from './models/kenney-furniture-kit/loungeSofa.svelte';
import PottedPlant from './models/kenney-furniture-kit/pottedPlant.svelte';
import SideTable from './models/kenney-furniture-kit/sideTable.svelte';
import BedBunk from './models/kenney-furniture-kit/bedBunk.svelte';
import BedDouble from './models/kenney-furniture-kit/bedDouble.svelte';
import BedSingle from './models/kenney-furniture-kit/bedSingle.svelte';
import Bench from './models/kenney-furniture-kit/bench.svelte';
import BenchCushion from './models/kenney-furniture-kit/benchCushion.svelte';
import BenchCushionLow from './models/kenney-furniture-kit/benchCushionLow.svelte';
import BookcaseClosed from './models/kenney-furniture-kit/bookcaseClosed.svelte';
import CabinetBed from './models/kenney-furniture-kit/cabinetBed.svelte';
import CabinetBedDrawer from './models/kenney-furniture-kit/cabinetBedDrawer.svelte';
import CabinetBedDrawerTable from './models/kenney-furniture-kit/cabinetBedDrawerTable.svelte';
import Chair from './models/kenney-furniture-kit/chair.svelte';
import ChairCushion from './models/kenney-furniture-kit/chairCushion.svelte';
import ChairDesk from './models/kenney-furniture-kit/chairDesk.svelte';
import ChairModernCushion from './models/kenney-furniture-kit/chairModernCushion.svelte';
import ChairModernFrameCushion from './models/kenney-furniture-kit/chairModernFrameCushion.svelte';
import ChairRounded from './models/kenney-furniture-kit/chairRounded.svelte';
import CoatRackStanding from './models/kenney-furniture-kit/coatRackStanding.svelte';
import Desk from './models/kenney-furniture-kit/desk.svelte';
import DeskCorner from './models/kenney-furniture-kit/deskCorner.svelte';
import Doorway from './models/kenney-furniture-kit/doorway.svelte';
import DoorwayFront from './models/kenney-furniture-kit/doorwayFront.svelte';
import Dryer from './models/kenney-furniture-kit/dryer.svelte';
import KitchenBar from './models/kenney-furniture-kit/kitchenBar.svelte';
import KitchenCabinet from './models/kenney-furniture-kit/kitchenCabinet.svelte';
import KitchenCabinetDrawer from './models/kenney-furniture-kit/kitchenCabinetDrawer.svelte';

export const AllObjects = {
	'kenney-furniture-kit-table': {
		component: Table,
		colors: 1
	},
	'kenney-furniture-kit-lampRoundFloor': {
		component: LampRoundFloor,
		colors: 2
	},
	'kenney-furniture-kit-loungeChair': {
		component: LoungeChair,
		colors: 2
	},
	'kenney-furniture-kit-loungeSofa': {
		component: LoungeSofa,
		colors: 2
	},
	'kenney-furniture-kit-pottedPlant': {
		component: PottedPlant,
		colors: 3
	},
	'kenney-furniture-kit-sideTable': {
		component: SideTable,
		colors: 1
	},
	'kenney-furniture-kit-bedBunk': {
		component: BedBunk,
		colors: 3
	},
	'kenney-furniture-kit-bedDouble': {
		component: BedDouble,
		colors: 4
	},
	'kenney-furniture-kit-bedSingle': {
		component: BedSingle,
		colors: 4
	},
	'kenney-furniture-kit-bench': {
		component: Bench,
		colors: 1
	},
	'kenney-furniture-kit-benchCushion': {
		component: BenchCushion,
		colors: 2
	},
	'kenney-furniture-kit-benchCushionLow': {
		component: BenchCushionLow,
		colors: 2
	},
	'kenney-furniture-kit-bookcaseClosed': {
		component: BookcaseClosed,
		colors: 2
	},
	'kenney-furniture-kit-cabinetBed': {
		component: CabinetBed,
		colors: 2
	},
	'kenney-furniture-kit-cabinetBedDrawer': {
		component: CabinetBedDrawer,
		colors: 2
	},
	'kenney-furniture-kit-cabinetBedDrawerTable': {
		component: CabinetBedDrawerTable,
		colors: 2
	},
	'kenney-furniture-kit-chair': {
		component: Chair,
		colors: 1
	},
	'kenney-furniture-kit-chairCushion': {
		component: ChairCushion,
		colors: 2
	},
	'kenney-furniture-kit-chairDesk': {
		component: ChairDesk,
		colors: 2
	},
	'kenney-furniture-kit-chairModernCushion': {
		component: ChairModernCushion,
		colors: 2
	},
	'kenney-furniture-kit-chairModernFrameCushion': {
		component: ChairModernFrameCushion,
		colors: 2
	},
	'kenney-furniture-kit-chairRounded': {
		component: ChairRounded,
		colors: 1
	},
	'kenney-furniture-kit-coatRackStanding': {
		component: CoatRackStanding,
		colors: 1
	},
	'kenney-furniture-kit-desk': {
		component: Desk,
		colors: 2
	},
	'kenney-furniture-kit-deskCorner': {
		component: DeskCorner,
		colors: 2
	},
	'kenney-furniture-kit-doorway': {
		component: Doorway,
		colors: 3
	},
	'kenney-furniture-kit-doorwayFront': {
		component: DoorwayFront,
		colors: 4
	},
	'kenney-furniture-kit-dryer': {
		component: Dryer,
		colors: 3
	},
	'kenney-furniture-kit-kitchenBar': {
		component: KitchenBar,
		colors: 3
	},
	'kenney-furniture-kit-kitchenCabinet': {
		component: KitchenCabinet,
		colors: 3
	},
	'kenney-furniture-kit-kitchenCabinetDrawer': {
		component: KitchenCabinetDrawer,
		colors: 3
	}
};

export const currentVersion = 0;

export const roomState: {
	wallColor: string;
	floorColor: string;
	objects: RoomObjectData[];

	size: { x: number; z: number };

	id: number;

	version: number;
} = $state({
	wallColor: '#f97316',
	floorColor: '#fde047',

	objects: [],

	size: { x: 2, z: 3 },

	id: 0,

	version: currentVersion
});

export const editorState: {
	startIndex: number;
	shownCount: number;

	selectedObject: RoomObjectData | null;
	transformControls: TransformControls | undefined;
	placingObject: RoomObjectData | null;

	isEditing: boolean;
} = $state({
	startIndex: 0,
	shownCount: 3,

	selectedObject: null,
	transformControls: undefined,
	placingObject: null,

	isEditing: false
});

export type RoomObjectKind = keyof typeof AllObjects;

export type RoomObjectData = {
	kind: RoomObjectKind;
	position: [number, number, number];
	rotation: number;
	colors: string[];
	placement: 'floor' | 'wallX' | 'wallZ';
};

export function applyTransformOfSelected() {
	if (editorState.selectedObject && editorState.transformControls) {
		editorState.selectedObject.position = [
			editorState.transformControls.object.position.x,
			editorState.transformControls.object.position.y,
			editorState.transformControls.object.position.z
		];

		editorState.selectedObject.rotation = editorState.transformControls.object.rotation.y;

		saveRoomToLocalStorage();
	}
}

export function saveRoomToLocalStorage() {
	localStorage.setItem('roomState', JSON.stringify(roomState));
}

export function rotateObject(rotation: number) {
	if (editorState.selectedObject) {
		applyTransformOfSelected();

		const selectedObject = editorState.selectedObject;
		editorState.selectedObject = null;

		setTimeout(() => {
			// rotate right
			selectedObject.rotation -= rotation;
			editorState.selectedObject = selectedObject;
		}, 0);
		saveRoomToLocalStorage();
	} else if (editorState.placingObject) {
		editorState.placingObject.rotation = (editorState.placingObject.rotation ?? 0) - rotation;
		saveRoomToLocalStorage();
	}
}

export function tryLoadingRoomFromLocalStorage(otherWiseReset: boolean = false) {
	const room = localStorage.getItem('roomState');
	if (room) {
		const roomObject = JSON.parse(room);
		roomState.floorColor = roomObject.floorColor;
		roomState.wallColor = roomObject.wallColor;
		roomState.objects = roomObject.objects;
		roomState.size = roomObject.size;
		roomState.id = roomObject.id ?? Math.random();
	} else if (otherWiseReset) {
		roomState.floorColor = '#a1a1a1';
		roomState.wallColor = '#f1f1f1';
		roomState.objects = [];
		roomState.size = { x: 2, z: 3 };
		roomState.id = Math.random();
		roomState.version = currentVersion;
	}
}
